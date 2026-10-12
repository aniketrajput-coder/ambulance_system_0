/**
 * PulseCare India - Patient Emergency Booking & Live Telemetry Controller
 * Strictly client-facing. Manages emergency bookings, live ambulance telemetry,
 * real-time dispatcher assignment detection, and route simulation.
 */

class PatientApp {
  constructor() {
    this.activeCity = PulseCare.getActiveCity();
    this.activeRequestId = null;
    this.map = null;
    this.patientMarker = null;
    this.ambulanceMarker = null;
    this.hospitalMarker = null;
    this.routePolyline = null;
    this.simulationInterval = null;
    this.radarLayer = null;
    this.isRadarActive = false;
    this.currentWeather = null;

    this.init();
  }

  init() {
    this.setupCitySelector();
    this.populateHospitals();
    this.setupFormListeners();
    this.listenForStorageUpdates();
    this.initMap();

    // Load active request: either from URL param, last booked, or default active request
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get('track');
    
    if (trackId) {
      this.trackBooking(trackId);
    } else {
      const lastId = sessionStorage.getItem('pulsecare_last_booked_id');
      if (lastId && this.getRequestById(lastId)) {
        this.trackBooking(lastId);
      } else {
        // Find latest pending or dispatched request for current city, or first request
        const requests = PulseCare.getRequests();
        const cityReq = requests.find(r => r.city === this.activeCity && r.status !== 'COMPLETED') || requests[0];
        if (cityReq) {
          this.trackBooking(cityReq.id);
        }
      }
    }
  }

  // City Management
  setupCitySelector() {
    const selector = document.getElementById('citySelector');
    if (selector) {
      selector.value = this.activeCity;
      selector.addEventListener('change', (e) => this.switchCity(e.target.value));
    }
    const heroCity = document.getElementById('heroCityName');
    if (heroCity && CITIES[this.activeCity]) {
      heroCity.textContent = `${CITIES[this.activeCity].name} Hub`;
    }
  }

  switchCity(cityKey) {
    if (!CITIES[cityKey]) return;
    this.activeCity = cityKey;
    PulseCare.setActiveCity(cityKey);

    const selector = document.getElementById('citySelector');
    if (selector) selector.value = cityKey;

    const heroCity = document.getElementById('heroCityName');
    if (heroCity) heroCity.textContent = `${CITIES[cityKey].name} Hub`;

    this.populateHospitals();

    // Recenter Map
    if (this.map) {
      const c = CITIES[cityKey];
      this.map.setView(c.center, c.zoom);
    }

    PulseCare.showToast(`Switched operating zone to ${CITIES[cityKey].name}`, 'info');
  }

  // Populate Destination Hospitals based on selected city
  populateHospitals() {
    const select = document.getElementById('destinationHospital');
    if (!select) return;

    const cityData = CITIES[this.activeCity] || CITIES.DELHI;
    select.innerHTML = cityData.hospitals.map((h, i) => `
      <option value="${h.name}" ${i === 0 ? 'selected' : ''}>
        ${h.name} (${h.icuBeds} ICU Beds Free)
      </option>
    `).join('');
  }

  // Geolocation Auto-Detection
  detectLocation() {
    const locBtn = document.getElementById('detectLocBtn');
    const addrInput = document.getElementById('pickupAddress');
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    if (locBtn) {
      locBtn.disabled = true;
      locBtn.innerHTML = '<span>⏳</span> Locating...';
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const cityData = CITIES[this.activeCity] || CITIES.DELHI;
        const randomLandmark = cityData.landmarks[Math.floor(Math.random() * cityData.landmarks.length)];
        
        addrInput.value = `Near ${randomLandmark} (GPS: ${lat.toFixed(4)}, ${lng.toFixed(4)})`;
        document.getElementById('pickupLat').value = lat;
        document.getElementById('pickupLng').value = lng;

        if (locBtn) {
          locBtn.disabled = false;
          locBtn.innerHTML = '<span>📍</span> GPS Located';
        }
        PulseCare.showToast('Current GPS coordinates captured successfully', 'success');
      },
      (err) => {
        if (locBtn) {
          locBtn.disabled = false;
          locBtn.innerHTML = '<span>📍</span> Auto-Detect';
        }
        // Fallback to sample landmark
        const cityData = CITIES[this.activeCity] || CITIES.DELHI;
        const randomLandmark = cityData.landmarks[0];
        addrInput.value = `${randomLandmark}, ${cityData.name}`;
        PulseCare.showToast('Using local landmark location.', 'info');
      },
      { timeout: 8000 }
    );
  }

  // Setup Form Submission
  setupFormListeners() {
    const form = document.getElementById('emergencyBookingForm');
    if (form) {
      form.addEventListener('submit', (e) => this.handleBookingSubmit(e));
    }
  }

  // Handle Booking Submission
  handleBookingSubmit(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value.trim();
    const patientPhone = document.getElementById('patientPhone').value.trim();
    const pickupAddress = document.getElementById('pickupAddress').value.trim();
    const destinationHospital = document.getElementById('destinationHospital').value;
    const emergencyType = document.getElementById('emergencyType').value;
    const severity = document.querySelector('input[name="severity"]:checked')?.value || 'CRITICAL';
    const notes = document.getElementById('patientNotes').value.trim();
    const scheme = document.getElementById('billingScheme')?.value || 'PulseCare Corporate Priority Member';

    // Clinical Vitals
    const bloodGroup = document.getElementById('bloodGroup')?.value || 'Unknown';
    const spo2 = parseInt(document.getElementById('vitalSpo2')?.value, 10) || 96;
    const pulse = parseInt(document.getElementById('vitalPulse')?.value, 10) || 88;
    const conscious = document.getElementById('vitalConscious')?.value || 'Alert';

    const cityData = CITIES[this.activeCity] || CITIES.DELHI;
    let lat = parseFloat(document.getElementById('pickupLat')?.value);
    let lng = parseFloat(document.getElementById('pickupLng')?.value);

    if (isNaN(lat) || isNaN(lng)) {
      lat = cityData.center[0] + (Math.random() - 0.5) * 0.05;
      lng = cityData.center[1] + (Math.random() - 0.5) * 0.05;
    }

    const newRequestId = 'PULSE-REQ-' + Math.floor(Math.random() * 8999 + 1000);
    const newRequest = {
      id: newRequestId,
      patientName: patientName,
      patientPhone: `+91 ${patientPhone}`,
      city: this.activeCity,
      emergencyType: emergencyType,
      severity: severity,
      vitals: {
        bloodGroup: bloodGroup,
        spo2: spo2,
        pulse: pulse,
        conscious: conscious
      },
      scheme: scheme,
      pickupLocation: pickupAddress,
      destinationHospital: destinationHospital,
      notes: notes || 'Emergency ambulance requested via PulseCare Patient Portal.',
      status: 'PENDING',
      requestedAt: new Date().toISOString(),
      assignedAmbulanceId: null,
      assignedAmbulanceNo: null,
      assignedDriverName: null,
      assignedDriverPhone: null,
      assignedBy: null, // WILL BE SET WHEN AN ADMIN DISPATCH OFFICER ASSIGNS
      lat: lat,
      lng: lng
    };

    const requests = PulseCare.getRequests();
    requests.unshift(newRequest);
    PulseCare.saveRequests(requests);

    if (window.PulseCareAPI && PulseCareAPI.backendOnline) {
      PulseCareAPI.createBooking(newRequest);
    }

    sessionStorage.setItem('pulsecare_last_booked_id', newRequestId);
    this.trackBooking(newRequestId);

    PulseCare.playChime();
    PulseCare.showToast(`Emergency Request ${newRequestId} Logged! Priority Dispatch Initiated.`, 'success');

    // Automatically display official booking confirmation receipt
    setTimeout(() => {
      this.openBookingReceipt(newRequestId);
    }, 450);

    // Scroll smoothly to tracker
    document.getElementById('trackingSection')?.scrollIntoView({ behavior: 'smooth' });
  }

  // 1-Click Fast SOS Trigger
  triggerInstantSOS() {
    const cityData = CITIES[this.activeCity] || CITIES.DELHI;
    const defaultHospital = cityData.hospitals[0].name;
    const defaultLandmark = cityData.landmarks[Math.floor(Math.random() * cityData.landmarks.length)];
    const newRequestId = 'PULSE-REQ-SOS-' + Math.floor(Math.random() * 899 + 100);

    const sosRequest = {
      id: newRequestId,
      patientName: 'Emergency Priority Patient',
      patientPhone: '+91 98110 00911',
      city: this.activeCity,
      emergencyType: 'Critical 1-Click SOS / Cardiac or Major Trauma',
      severity: 'CRITICAL',
      vitals: {
        bloodGroup: 'Emergency Universal (O-)',
        spo2: 89,
        pulse: 130,
        conscious: 'Unresponsive / Severe Distress'
      },
      scheme: 'PulseCare Immediate Emergency Dispatch Protocol',
      pickupLocation: `${defaultLandmark}, ${cityData.name} (1-Click Geolocation)`,
      destinationHospital: defaultHospital,
      notes: 'PANIC SOS TRIGGERED! Immediate Mobile ICU with Dräger ventilator and cardiac resuscitation needed.',
      status: 'PENDING',
      requestedAt: new Date().toISOString(),
      assignedAmbulanceId: null,
      assignedAmbulanceNo: null,
      assignedDriverName: null,
      assignedDriverPhone: null,
      assignedBy: null,
      lat: cityData.center[0] + (Math.random() - 0.5) * 0.03,
      lng: cityData.center[1] + (Math.random() - 0.5) * 0.03
    };

    const requests = PulseCare.getRequests();
    requests.unshift(sosRequest);
    PulseCare.saveRequests(requests);

    if (window.PulseCareAPI && PulseCareAPI.backendOnline) {
      PulseCareAPI.createBooking(sosRequest);
    }

    sessionStorage.setItem('pulsecare_last_booked_id', newRequestId);
    this.trackBooking(newRequestId);

    PulseCare.playChime();
    PulseCare.showToast('🚨 1-CLICK SOS ACTIVATED! Request forwarded to Dispatch Officers.', 'error');

    // Automatically display official booking confirmation receipt
    setTimeout(() => {
      this.openBookingReceipt(newRequestId);
    }, 450);

    document.getElementById('trackingSection')?.scrollIntoView({ behavior: 'smooth' });
  }

  // Track Booking by ID
  trackBooking(requestId) {
    const req = this.getRequestById(requestId);
    if (!req) {
      PulseCare.showToast(`Booking ID "${requestId}" not found.`, 'error');
      return;
    }

    this.activeRequestId = requestId;
    this.renderTrackingDetails(req);
    this.updateMapRoute(req);
    this.startLiveSimulation(req);
  }

  getRequestById(id) {
    return PulseCare.getRequests().find(r => r.id === id);
  }

  // Render Telemetry & Tracking View
  renderTrackingDetails(req) {
    const trackerContainer = document.getElementById('trackingContent');
    if (!trackerContainer) return;

    const isAssigned = !!req.assignedBy;
    const status = req.status;

    // Status Badge Info
    const statusBadges = {
      PENDING: { text: 'Awaiting Officer Assignment', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40', icon: '⏳' },
      DISPATCHED: { text: 'Dispatched & En-Route', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', icon: '🚑' },
      ON_SCENE: { text: 'Paramedics On-Scene', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', icon: '👨‍⚕️' },
      COMPLETED: { text: 'Patient Handed Over to Hospital', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40', icon: '🏥' }
    };
    const currentBadge = statusBadges[status] || statusBadges.PENDING;

    // Determine Stepper Classes
    const step1 = 'tracker-step-done';
    const step2 = isAssigned ? 'tracker-step-done' : 'tracker-step-active';
    const step3 = status === 'DISPATCHED' ? 'tracker-step-active' : (status === 'ON_SCENE' || status === 'COMPLETED' ? 'tracker-step-done' : 'tracker-step-pending');
    const step4 = status === 'ON_SCENE' ? 'tracker-step-active' : (status === 'COMPLETED' ? 'tracker-step-done' : 'tracker-step-pending');
    const step5 = status === 'COMPLETED' ? 'tracker-step-done' : 'tracker-step-pending';

    trackerContainer.innerHTML = `
      <!-- TOP BOOKING SUMMARY HEADER -->
      <div class="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-mono font-bold text-slate-400">BOOKING ID:</span>
              <span class="text-base sm:text-lg font-black text-white font-mono text-cyan-400">${req.id}</span>
              <button onclick="navigator.clipboard.writeText('${req.id}'); PulseCare.showToast('Copied Booking ID!', 'info')" class="text-xs text-slate-400 hover:text-white p-1" title="Copy ID">📋</button>
              <button onclick="patientApp.openBookingReceipt('${req.id}')" class="ml-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/90 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition flex items-center space-x-1 cursor-pointer">
                <span>🧾</span>
                <span>View Receipt</span>
              </button>
            </div>
            <div class="text-xs text-slate-400 mt-0.5">
              Logged: <span class="text-slate-300">${new Date(req.requestedAt).toLocaleTimeString()}</span> • ${CITIES[req.city]?.name || req.city} Hub
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <span class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${currentBadge.color}">
              <span>${currentBadge.icon}</span>
              <span>${currentBadge.text}</span>
            </span>
          </div>
        </div>

        <!-- 5-STEP LIFECYCLE PROGRESS PIPELINE -->
        <div class="py-2">
          <div class="grid grid-cols-5 gap-1 text-center text-[10px] font-semibold">
            <div class="p-2 rounded-lg border ${step1}">
              <div class="text-sm mb-1">📋</div>
              <div class="hidden sm:block">1. Emergency Call Logged</div>
              <div class="sm:hidden">Logged</div>
            </div>
            <div class="p-2 rounded-lg border ${step2}">
              <div class="text-sm mb-1">🛡️</div>
              <div class="hidden sm:block">2. Officer Assigned Fleet</div>
              <div class="sm:hidden">Assigned</div>
            </div>
            <div class="p-2 rounded-lg border ${step3}">
              <div class="text-sm mb-1">🚑</div>
              <div class="hidden sm:block">3. Mobile ICU En-Route</div>
              <div class="sm:hidden">En-Route</div>
            </div>
            <div class="p-2 rounded-lg border ${step4}">
              <div class="text-sm mb-1">🩺</div>
              <div class="hidden sm:block">4. Paramedics On-Scene</div>
              <div class="sm:hidden">On-Scene</div>
            </div>
            <div class="p-2 rounded-lg border ${step5}">
              <div class="text-sm mb-1">🏥</div>
              <div class="hidden sm:block">5. Hospital Handover</div>
              <div class="sm:hidden">Handover</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CORE REQUIREMENT: DISPATCH OFFICER IN CHARGE OF ASSIGNMENT -->
      <div class="rounded-2xl border ${isAssigned ? 'bg-gradient-to-br from-slate-900 via-[#0a1426] to-[#0c1e3d] border-cyan-500/40 shadow-xl shadow-cyan-950/30' : 'bg-slate-900/60 border-slate-800/80'} p-5 relative overflow-hidden transition-all">
        
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full ${isAssigned ? 'bg-cyan-400 animate-pulse' : 'bg-amber-400'}"></span>
            <h3 class="text-xs font-extrabold uppercase tracking-wider ${isAssigned ? 'text-cyan-300' : 'text-slate-400'}">
              ${isAssigned ? 'Certified Dispatch Controller in Charge' : 'Officer Dispatch Review Pending'}
            </h3>
          </div>
          ${isAssigned ? `<span class="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">VERIFIED ASSIGNMENT</span>` : ''}
        </div>

        ${isAssigned ? `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/70 p-4 rounded-xl border border-cyan-500/20">
            <div class="flex items-center space-x-3.5">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-cyan-500/20">
                🛡️
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <span class="text-base font-black text-white">${req.assignedBy.adminName}</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">${req.assignedBy.adminId}</span>
                </div>
                <div class="text-xs text-cyan-300 font-medium">${req.assignedBy.adminRole}</div>
                <div class="text-[11px] text-slate-400 mt-0.5 font-mono">
                  Authorized At: <strong class="text-slate-200">${new Date(req.assignedBy.assignedAt).toLocaleTimeString()}</strong>
                </div>
              </div>
            </div>

            <div class="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
              <div class="text-[10px] uppercase font-bold text-slate-400">Badge & Authorization:</div>
              <div class="text-xs font-mono text-cyan-400 font-bold">${req.assignedBy.adminBadge}</div>
              <div class="text-[11px] text-slate-300 mt-1 italic max-w-xs">
                "${req.assignedBy.notes || 'Authorized immediate deployment of critical care unit under private hospital protocols.'}"
              </div>
            </div>
          </div>
        ` : `
          <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-2">
            <div class="w-8 h-8 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm animate-pulse">
              ⏳
            </div>
            <div class="text-sm font-bold text-white">Your Request is at the Top of the Emergency Dispatch Queue</div>
            <p class="text-xs text-slate-400 max-w-md mx-auto">
              A certified PulseCare Emergency Dispatch Officer at the <strong>${CITIES[req.city]?.name} Control Desk</strong> is reviewing patient vitals and assigning the nearest Advanced Life Support unit. The officer's verified name and badge will appear here momentarily.
            </p>
          </div>
        `}
      </div>

      <!-- ASSIGNED AMBULANCE & CREW CARD (IF ASSIGNED) -->
      ${isAssigned ? `
        <div class="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center space-x-2">
              <span class="text-lg">🚑</span>
              <h3 class="text-sm font-bold text-white">Assigned Critical Care Ambulance Unit</h3>
            </div>
            <span class="text-xs font-mono font-black text-rose-400 bg-rose-500/15 border border-rose-500/30 px-2.5 py-1 rounded-lg">
              ${req.assignedAmbulanceNo}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2 text-xs">
              <div>
                <span class="text-slate-400 block text-[11px]">Ambulance Classification:</span>
                <strong class="text-white">PulseCare Mobile ICU (Advanced Life Support)</strong>
              </div>
              <div>
                <span class="text-slate-400 block text-[11px]">Primary Pilot / Paramedic:</span>
                <strong class="text-white text-sm">${req.assignedDriverName || 'On-duty Paramedic'}</strong>
              </div>
              <div class="pt-1">
                <a href="tel:${req.assignedDriverPhone}" class="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition">
                  <span>📞 Call Paramedic Direct</span>
                  <span class="font-mono text-[11px]">(${req.assignedDriverPhone})</span>
                </a>
              </div>
            </div>

            <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div class="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">On-Board Critical Equipment:</div>
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px]">Dräger ICU Ventilator</span>
                <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px]">Zoll Biphasic Defibrillator</span>
                <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px]">Syringe Infusion Pumps</span>
                <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px]">High-Flow Oxygen & Suction</span>
              </div>
              <div class="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                Destination: <strong class="text-white">${req.destinationHospital}</strong>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- PATIENT VITALS & ROUTE INFO -->
      <div class="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Patient Emergency Docket</h4>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span class="text-slate-400 block text-[11px]">Patient Name:</span>
            <strong class="text-white text-sm">${req.patientName}</strong>
            <span class="text-slate-400 block text-[11px] mt-1">Contact: ${req.patientPhone}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px]">Pickup Location:</span>
            <strong class="text-white">${req.pickupLocation}</strong>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-center">
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase block">SpO2 Oxygen</span>
            <strong class="text-sm font-black ${req.vitals?.spo2 < 90 ? 'text-rose-400 animate-pulse' : 'text-cyan-300'} font-mono">${req.vitals?.spo2 || 98}%</strong>
          </div>
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase block">Heart Rate</span>
            <strong class="text-sm font-black text-white font-mono">${req.vitals?.pulse || 84} bpm</strong>
          </div>
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase block">Blood Group</span>
            <strong class="text-sm font-black text-white font-mono">${req.vitals?.bloodGroup || 'O+'}</strong>
          </div>
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase block">Consciousness</span>
            <strong class="text-sm font-black text-white font-mono">${req.vitals?.conscious || 'Alert'}</strong>
          </div>
        </div>
      </div>

      <!-- FIRST AID & WAITING CHECKLIST -->
      <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl text-xs space-y-2">
        <div class="font-bold text-rose-400 flex items-center space-x-1.5">
          <span>⚠️</span>
          <span>While You Wait for Ambulance Arrival:</span>
        </div>
        <ul class="list-disc list-inside text-slate-300 space-y-1 text-[11px] leading-relaxed">
          <li>Keep patient seated or recumbent in a well-ventilated room; loosen restrictive clothing.</li>
          <li>Ensure the apartment building entrance, gates, and elevator are unlocked and cleared for stretcher access.</li>
          <li>Keep patient's national ID, past medical discharge summaries, and ongoing prescription files ready.</li>
          <li>Do not give oral fluids or solid food if the patient is vomiting, drowsy, or semi-conscious.</li>
        </ul>
      </div>

      <!-- ACTIONS & SHARE -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="patientApp.openBookingReceipt('${req.id}')" class="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center space-x-2 transition shadow-md shadow-cyan-600/20 cursor-pointer">
            <span>🧾</span>
            <span>View / Print Receipt</span>
          </button>
          <button onclick="patientApp.shareViaWhatsApp('${req.id}')" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-2 transition shadow-md shadow-emerald-600/20 cursor-pointer">
            <span>📲</span>
            <span>Share on WhatsApp</span>
          </button>
        </div>
        <a href="tel:18002009110" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center space-x-2 border border-slate-700 transition">
          <span>📞</span>
          <span>Contact 24/7 Operations Desk</span>
        </a>
      </div>
    `;
  }

  // Live Map Integration & Dynamic Routing
  initMap() {
    const mapDiv = document.getElementById('patientTrackingMap');
    if (!mapDiv || typeof L === 'undefined') return;

    try {
      const cityData = CITIES[this.activeCity] || CITIES.DELHI;
      this.map = L.map('patientTrackingMap', {
        zoomControl: true,
        attributionControl: false
      }).setView(cityData.center, 13);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(this.map);
    } catch (e) {
      console.warn('Leaflet initialization skipped:', e);
    }
  }

  updateMapRoute(req) {
    if (!this.map || typeof L === 'undefined') return;

    // Clear existing markers
    if (this.patientMarker) this.map.removeLayer(this.patientMarker);
    if (this.ambulanceMarker) this.map.removeLayer(this.ambulanceMarker);
    if (this.hospitalMarker) this.map.removeLayer(this.hospitalMarker);
    if (this.routePolyline) this.map.removeLayer(this.routePolyline);

    const patientLatLng = [req.lat, req.lng];
    
    // Find Hospital LatLng
    const cityData = CITIES[req.city] || CITIES[this.activeCity] || CITIES.DELHI;
    const hospObj = cityData.hospitals.find(h => h.name === req.destinationHospital) || cityData.hospitals[0];
    const hospitalLatLng = [hospObj.lat, hospObj.lng];

    // Patient Marker (Red Flashing Beacon)
    const patientIcon = L.divIcon({
      html: `<div class="custom-map-icon text-rose-500 animate-pulse text-2xl font-bold">🚨</div>`,
      className: 'custom-div-icon',
      iconSize: [30, 30]
    });
    this.patientMarker = L.marker(patientLatLng, { icon: patientIcon }).addTo(this.map);
    this.patientMarker.bindPopup(`<b>Emergency Pickup</b><br>${req.pickupLocation}`).openPopup();

    // Hospital Marker
    const hospitalIcon = L.divIcon({
      html: `<div class="custom-map-icon text-emerald-400 text-2xl">🏥</div>`,
      className: 'custom-div-icon',
      iconSize: [30, 30]
    });
    this.hospitalMarker = L.marker(hospitalLatLng, { icon: hospitalIcon }).addTo(this.map);
    this.hospitalMarker.bindPopup(`<b>Destination Hospital</b><br>${hospObj.name}`);

    // If Ambulance is Assigned
    if (req.assignedAmbulanceId) {
      const ambulances = PulseCare.getAmbulances();
      const amb = ambulances.find(a => a.id === req.assignedAmbulanceId);
      const ambLatLng = amb ? [amb.lat, amb.lng] : [patientLatLng[0] + 0.02, patientLatLng[1] + 0.02];

      const ambIcon = L.divIcon({
        html: `<div class="custom-map-icon text-cyan-400 text-3xl animate-bounce">🚑</div>`,
        className: 'custom-div-icon',
        iconSize: [34, 34]
      });
      this.ambulanceMarker = L.marker(ambLatLng, { icon: ambIcon }).addTo(this.map);
      this.ambulanceMarker.bindPopup(`<b>${req.assignedAmbulanceNo || 'Mobile ICU'}</b><br>Officer In Charge: ${req.assignedBy?.adminName || 'Operations Desk'}`);

      // Draw Route Polyline from Ambulance -> Patient -> Hospital
      const routePoints = [ambLatLng, patientLatLng, hospitalLatLng];
      this.routePolyline = L.polyline(routePoints, {
        color: '#06b6d4',
        weight: 4,
        opacity: 0.8,
        dashArray: '8, 8'
      }).addTo(this.map);

      this.map.fitBounds(L.latLngBounds(routePoints), { padding: [40, 40] });
    } else {
      this.map.setView(patientLatLng, 14);
    }

    // Live Transit Weather Telemetry Integration
    PulseCareWeather.getWeather(req.lat, req.lng, req.city).then(w => {
      this.currentWeather = w;

      // Update Weather Pill in Header
      const pill = document.getElementById('patientWeatherPill');
      const pillIcon = document.getElementById('patientWeatherIcon');
      const pillTemp = document.getElementById('patientWeatherTemp');
      const pillDesc = document.getElementById('patientWeatherDesc');

      if (pill) pill.classList.remove('hidden');
      if (pillIcon) pillIcon.textContent = w.icon;
      if (pillTemp) pillTemp.textContent = `${w.temp}°C`;
      if (pillDesc) pillDesc.textContent = w.condition;

      // Update Floating Map HUD
      const hud = document.getElementById('patientMapWeatherHud');
      const hudCity = document.getElementById('patientHudCity');
      const hudTemp = document.getElementById('patientHudTemp');
      const hudRoadBadge = document.getElementById('patientHudRoadBadge');
      const hudAdvisory = document.getElementById('patientHudAdvisory');

      if (hud) hud.classList.remove('hidden');
      if (hudCity) hudCity.textContent = CITIES[req.city]?.name || req.city || 'DELHI';
      if (hudTemp) hudTemp.textContent = `${w.temp}°C ${w.icon}`;
      if (hudRoadBadge) {
        hudRoadBadge.className = `text-[9px] px-1.5 py-0.5 rounded font-semibold border ${w.roadBadgeClass}`;
        hudRoadBadge.textContent = w.roadStatus.split('•')[0].trim();
      }
      if (hudAdvisory) {
        hudAdvisory.textContent = `${w.roadStatus}. ${w.etaDelayMinutes > 0 ? `+${w.etaDelayMinutes}m weather transit precaution.` : 'Normal emergency speeds.'}`;
      }

      // Update live ETA tag if ambulance is active
      const etaEl = document.getElementById('liveEtaDisplay');
      if (etaEl && req.assignedAmbulanceId && req.status === 'DISPATCHED') {
        const baseEta = 6;
        const totalEta = baseEta + w.etaDelayMinutes;
        etaEl.innerHTML = `ETA ~${totalEta}m ${w.etaDelayMinutes > 0 ? `<span class="text-[10px] text-amber-300">(+${w.etaDelayMinutes}m ${w.icon})</span>` : ''}`;
      }
    });
  }

  async toggleRadarOverlay() {
    if (!this.map || typeof L === 'undefined') {
      PulseCare.showToast('Map is loading, please standby...', 'info');
      return;
    }

    const btn = document.getElementById('btnPatientRadarToggle');
    const stateText = document.getElementById('patientRadarState');
    const liveDot = document.getElementById('patientRadarDot');

    if (this.isRadarActive) {
      if (this.radarLayer) {
        this.map.removeLayer(this.radarLayer);
        this.radarLayer = null;
      }
      this.isRadarActive = false;
      if (btn) btn.classList.remove('weather-radar-active');
      if (stateText) stateText.textContent = 'OFF';
      if (liveDot) liveDot.classList.add('hidden');
      PulseCare.showToast('Precipitation radar layer disabled', 'info');
    } else {
      try {
        PulseCare.showToast('Connecting to precipitation radar...', 'info');
        const radarUrl = await PulseCareWeather.getRadarTileUrl();
        this.radarLayer = L.tileLayer(radarUrl, {
          opacity: 0.65,
          zIndex: 10,
          maxZoom: 19
        }).addTo(this.map);
        this.isRadarActive = true;
        if (btn) btn.classList.add('weather-radar-active');
        if (stateText) stateText.textContent = 'LIVE ON';
        if (liveDot) liveDot.classList.remove('hidden');
        PulseCare.showToast('Live precipitation radar overlay active', 'success');
      } catch (e) {
        PulseCare.showToast('Precipitation radar tiles currently unavailable', 'error');
      }
    }
  }

  // Real-time movement simulation towards patient
  startLiveSimulation(req) {
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval);
      this.simulationInterval = null;
    }

    if (!req.assignedAmbulanceId || req.status !== 'DISPATCHED') {
      const etaElem = document.getElementById('liveEtaDisplay');
      if (etaElem) {
        etaElem.textContent = req.status === 'PENDING' ? 'Awaiting Dispatch' : (req.status === 'ON_SCENE' ? 'On Scene' : 'Completed');
      }
      return;
    }

    let progress = 0;
    this.simulationInterval = setInterval(() => {
      progress += 0.05;
      if (progress > 1) {
        clearInterval(this.simulationInterval);
        return;
      }

      // Update ETA display
      const remainingMins = Math.max(1, Math.round((1 - progress) * 8));
      const remainingKm = ((1 - progress) * 3.5).toFixed(1);
      const etaElem = document.getElementById('liveEtaDisplay');
      if (etaElem) {
        etaElem.textContent = `ETA: ~${remainingMins} Mins (${remainingKm} km away)`;
      }

      // Animate Ambulance Marker towards Patient
      if (this.ambulanceMarker && this.patientMarker) {
        const pLat = req.lat;
        const pLng = req.lng;
        const startLat = req.lat + 0.02;
        const startLng = req.lng + 0.02;

        const currentLat = startLat + (pLat - startLat) * progress;
        const currentLng = startLng + (pLng - startLng) * progress;

        this.ambulanceMarker.setLatLng([currentLat, currentLng]);
      }
    }, 2000);
  }

  // Official Booking Confirmation Receipt Modal
  openBookingReceipt(requestId) {
    const req = this.getRequestById(requestId);
    if (!req) return;

    const receiptModal = document.getElementById('bookingReceiptModal');
    const receiptContainer = document.getElementById('receiptContentToPrint');
    if (!receiptModal || !receiptContainer) return;

    const receiptNo = 'RCP-2026-' + (req.city || 'IND') + '-' + req.id.replace('PULSE-REQ-', '').replace('SOS-', 'S');
    const isAssigned = !!req.assignedBy;
    const v = req.vitals || { spo2: 98, pulse: 84, bloodGroup: 'O+', conscious: 'Alert' };
    const w = this.currentWeather || PulseCareWeather.getFallbackWeather(req.city);

    receiptContainer.innerHTML = `
      <!-- OFFICIAL CORPORATE RECEIPT HEADER -->
      <div class="border-b border-slate-700 pb-4 text-left">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold text-xl">
              ✚
            </div>
            <div>
              <h2 class="text-base font-extrabold text-white tracking-tight">PulseCare India Private Limited</h2>
              <p class="text-[11px] text-slate-400 font-medium">Critical Care Transport & Mobile ICU Network</p>
            </div>
          </div>
          <div class="text-right">
            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              ✓ Booking Confirmed
            </span>
            <div class="text-[10px] text-slate-400 font-mono mt-1">24/7 Helpline: +91 1800-200-9110</div>
          </div>
        </div>
      </div>

      <!-- RECEIPT & DOCKET METADATA -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-b border-slate-800 text-xs text-left">
        <div>
          <span class="text-[10px] uppercase text-slate-400 block font-semibold">Receipt Number</span>
          <strong class="font-mono text-cyan-300">${receiptNo}</strong>
        </div>
        <div>
          <span class="text-[10px] uppercase text-slate-400 block font-semibold">Booking ID</span>
          <strong class="font-mono text-white">${req.id}</strong>
        </div>
        <div>
          <span class="text-[10px] uppercase text-slate-400 block font-semibold">Date & Time</span>
          <span class="text-slate-300 font-mono text-[11px]">${new Date(req.requestedAt).toLocaleString()}</span>
        </div>
        <div>
          <span class="text-[10px] uppercase text-slate-400 block font-semibold">Operating Hub</span>
          <span class="text-slate-300 font-semibold">${CITIES[req.city]?.name || req.city} Hub</span>
        </div>
      </div>

      <!-- PATIENT & ROUTE DOCKET -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-b border-slate-800 text-xs text-left">
        <div class="space-y-1.5">
          <span class="text-[10px] uppercase text-cyan-400 font-bold block">Patient Details:</span>
          <div>Full Name: <strong class="text-white text-sm">${req.patientName}</strong></div>
          <div>Emergency Contact: <strong class="font-mono text-slate-300">${req.patientPhone}</strong></div>
          <div>Triage Urgency: <span class="text-rose-400 font-bold">${req.severity}</span> (${req.emergencyType})</div>
          <div class="text-[11px] text-slate-400">Clinical Vitals: SpO2 ${v.spo2}% | Pulse ${v.pulse} bpm | Blood: ${v.bloodGroup} | ${v.conscious}</div>
        </div>

        <div class="space-y-1.5">
          <span class="text-[10px] uppercase text-cyan-400 font-bold block">Route & Destination:</span>
          <div>Pickup Location: <strong class="text-white">${req.pickupLocation}</strong></div>
          <div>Destination Hospital: <strong class="text-emerald-400 text-sm">${req.destinationHospital}</strong></div>
          <div>Billing Coverage: <span class="text-slate-300">${req.scheme || 'Direct Hospital Billing / Cashless TPA'}</span></div>
        </div>
      </div>

      <!-- ROUTE WEATHER & ENVIRONMENTAL TELEMETRY -->
      <div class="py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-left">
        <div class="flex items-center space-x-2.5">
          <span class="text-xl">${w.icon}</span>
          <div>
            <span class="text-[10px] uppercase text-cyan-400 font-bold block">Transit Route Meteorological Telemetry</span>
            <span class="text-slate-200 font-semibold">${w.condition}, ${w.temp}°C • Humidity ${w.humidity}% • Wind ${w.windSpeed} km/h</span>
          </div>
        </div>
        <div class="sm:text-right">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${w.roadBadgeClass}">
            ${w.roadStatus}
          </span>
        </div>
      </div>

      <!-- DISPATCH & ALLOCATION STATUS -->
      <div class="py-3 border-b border-slate-800 text-xs text-left">
        <span class="text-[10px] uppercase text-slate-400 font-bold block mb-1.5">Fleet Allocation & Officer Verification:</span>
        ${isAssigned ? `
          <div class="bg-cyan-950/40 p-3.5 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="text-xs font-bold text-white flex items-center space-x-1.5">
                <span>🚑 Assigned Ambulance:</span>
                <span class="text-cyan-300 font-mono text-sm">${req.assignedAmbulanceNo}</span>
                <span class="text-slate-300 font-normal text-[11px]">(Pilot: ${req.assignedDriverName} - ${req.assignedDriverPhone})</span>
              </div>
              <div class="text-[11px] text-slate-300 mt-1">
                Authorized By Dispatch Officer: <strong class="text-white">${req.assignedBy.adminName}</strong> (${req.assignedBy.adminId} • ${req.assignedBy.adminRole})
              </div>
            </div>
            <span class="px-2.5 py-1 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wide">
              Unit En-Route
            </span>
          </div>
        ` : `
          <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
            <div class="flex items-center space-x-2.5">
              <span class="text-amber-400 text-lg animate-pulse">⏳</span>
              <div>
                <strong class="text-white text-xs">Request In Priority Dispatch Queue</strong>
                <p class="text-[11px] text-slate-400">Our on-duty Dispatch Controller is verifying the nearest Mobile ICU. Vehicle details update automatically.</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              Priority Queue
            </span>
          </div>
        `}
      </div>

      <!-- COMPLIANCE & LEGAL NOTICE -->
      <div class="pt-3 text-[10px] text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left">
        <div class="space-y-0.5">
          <p>✓ PulseCare accredited critical care transport protocol • Certified for private emergency admission.</p>
          <p>✓ All deployments are timestamped, logged, and digitally certified by on-duty medical dispatch officers.</p>
        </div>
        <div class="font-mono text-slate-500 text-[10px] text-right">
          AUTH-STAMP: PC-IN-${req.id}
        </div>
      </div>
    `;

    this.currentReceiptRequestId = req.id;
    receiptModal.showModal();
  }

  printReceipt() {
    window.print();
  }

  shareReceiptWhatsApp() {
    if (!this.currentReceiptRequestId) return;
    const req = this.getRequestById(this.currentReceiptRequestId);
    if (!req) return;

    const receiptNo = 'RCP-2026-' + (req.city || 'IND') + '-' + req.id.replace('PULSE-REQ-', '').replace('SOS-', 'S');
    const w = this.currentWeather || PulseCareWeather.getFallbackWeather(req.city);
    const assignedText = req.assignedBy 
      ? `Assigned Dispatch Officer: ${req.assignedBy.adminName} (${req.assignedBy.adminId})\nAmbulance: ${req.assignedAmbulanceNo} (Paramedic: ${req.assignedDriverName} - ${req.assignedDriverPhone})`
      : `Status: In Priority Dispatch Queue (Controller Reviewing)`;

    const text = `🧾 *PULSECARE INDIA — EMERGENCY BOOKING RECEIPT*\n*Receipt No:* ${receiptNo}\n*Booking ID:* ${req.id}\n*Date:* ${new Date(req.requestedAt).toLocaleString()}\n*Patient:* ${req.patientName} (${req.patientPhone})\n*Pickup:* ${req.pickupLocation}\n*Hospital:* ${req.destinationHospital}\n*Severity:* ${req.severity}\n*Route Weather:* ${w.icon} ${w.temp}°C ${w.condition} (${w.roadStatus})\n${assignedText}\n*24/7 Helpline:* +91 1800-200-9110`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  }

  // WhatsApp Share Functionality
  shareViaWhatsApp(requestId) {
    const req = this.getRequestById(requestId);
    if (!req) return;

    const assignedText = req.assignedBy 
      ? `Assigned Dispatch Officer: ${req.assignedBy.adminName} (${req.assignedBy.adminId})\nAmbulance: ${req.assignedAmbulanceNo} (Paramedic: ${req.assignedDriverName} - ${req.assignedDriverPhone})`
      : `Status: Awaiting Dispatch Officer Assignment`;

    const text = `🚨 *PulseCare India Critical Care Telemetry*\n*Booking ID:* ${req.id}\n*Patient:* ${req.patientName}\n*Status:* ${req.status}\n*Hospital:* ${req.destinationHospital}\n${assignedText}\n*Helpline:* +91 1800-200-9110`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  }

  // Cross-Tab Real-Time Syncing (Listen for Admin Dispatch Events & File Protocol Heartbeat)
  listenForStorageUpdates() {
    const checkForUpdates = () => {
      if (this.activeRequestId) {
        const updated = this.getRequestById(this.activeRequestId);
        if (updated) {
          const currentHash = `${updated.status}_${updated.assignedAmbulanceId}_${updated.assignedBy?.adminId || ''}`;
          if (this.lastStateHash !== currentHash) {
            const wasUnassigned = !this.lastStateHash || !this.lastStateHash.includes('_PULSE-');
            this.lastStateHash = currentHash;
            this.renderTrackingDetails(updated);
            this.updateMapRoute(updated);
            this.startLiveSimulation(updated);

            if (wasUnassigned && updated.status === 'DISPATCHED' && updated.assignedBy) {
              PulseCare.playChime();
              PulseCare.showToast(`Unit ${updated.assignedAmbulanceNo} Dispatched by Officer ${updated.assignedBy.adminName}!`, 'success');
            }
          }
        }
      }
    };

    // Standard cross-tab storage event
    window.addEventListener('storage', (e) => {
      if (e.key === 'pulsecare_requests' || e.key === 'pulsecare_ambulances') {
        checkForUpdates();
      }
    });

    // Heartbeat fallback for file:// protocol where browsers may isolate storage events
    setInterval(checkForUpdates, 1500);
  }
}

// Instantiate on Load
document.addEventListener('DOMContentLoaded', () => {
  window.patientApp = new PatientApp();
});
