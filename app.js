/**
 * PulseCare India - Elite Emergency Medical Services & Ambulance Fleet
 * Core Application Engine with Multi-City Private Hospital Network
 */

// INDIAN METROPOLITAN REGIONS, PRIVATE HOSPITALS & LANDMARKS
const CITIES = {
  DELHI: {
    name: 'Delhi NCR',
    code: 'DELHI',
    center: [28.6139, 77.2090],
    zoom: 12,
    hospitals: [
      { id: 'HOSP-DEL-1', name: 'Max Super Specialty Hospital, Saket', type: 'Private Tertiary Quaternary', icuBeds: 14, ventBeds: 9, oxyStatus: 'Optimal', lat: 28.5284, lng: 77.2119 },
      { id: 'HOSP-DEL-2', name: 'Fortis Escorts Heart Institute, Okhla', type: 'Private Cardiac Apex', icuBeds: 18, ventBeds: 12, oxyStatus: 'Optimal', lat: 28.5604, lng: 77.2798 },
      { id: 'HOSP-DEL-3', name: 'Indraprastha Apollo Hospital, Sarita Vihar', type: 'Private Multi-Specialty', icuBeds: 16, ventBeds: 11, oxyStatus: 'Optimal', lat: 28.5414, lng: 77.2831 },
      { id: 'HOSP-DEL-4', name: 'Medanta - The Medicity, Gurugram', type: 'Private Quaternary Care', icuBeds: 22, ventBeds: 16, oxyStatus: 'Optimal', lat: 28.4398, lng: 77.0422 }
    ],
    landmarks: [
      'DLF Cyber Hub, Gurugram',
      'Connaught Place Inner Circle',
      'Select Citywalk, Saket',
      'Golf Course Road, DLF Phase 5',
      'Aerocity Hospitality District',
      'Sector 18 Commercial Hub, Noida'
    ]
  },
  BLR: {
    name: 'Bengaluru',
    code: 'BLR',
    center: [12.9716, 77.5946],
    zoom: 12,
    hospitals: [
      { id: 'HOSP-BLR-1', name: 'Manipal Hospital, Old Airport Road', type: 'Private Tertiary Care', icuBeds: 16, ventBeds: 12, oxyStatus: 'Optimal', lat: 12.9592, lng: 77.6508 },
      { id: 'HOSP-BLR-2', name: 'Narayana Health City, Bommasandra', type: 'Private Cardiac Quaternary', icuBeds: 24, ventBeds: 18, oxyStatus: 'Optimal', lat: 12.8090, lng: 77.6974 },
      { id: 'HOSP-BLR-3', name: 'Apollo Hospitals, Bannerghatta Road', type: 'Private Multi-Specialty', icuBeds: 15, ventBeds: 10, oxyStatus: 'Optimal', lat: 12.8936, lng: 77.5976 },
      { id: 'HOSP-BLR-4', name: 'Fortis Hospital, Cunningham Road', type: 'Private Super-Specialty', icuBeds: 12, ventBeds: 8, oxyStatus: 'Optimal', lat: 12.9880, lng: 77.5950 }
    ],
    landmarks: [
      'Indiranagar 100ft Road',
      'MG Road Boulevard',
      'Koramangala 5th Block Junction',
      'ITPL Main Gate, Whitefield',
      'HSR Layout Sector 1'
    ]
  },
  MUM: {
    name: 'Mumbai',
    code: 'MUM',
    center: [19.0760, 72.8777],
    zoom: 12,
    hospitals: [
      { id: 'HOSP-MUM-1', name: 'Kokilaben Dhirubhai Ambani Hospital, Andheri', type: 'Private Quaternary Apex', icuBeds: 20, ventBeds: 15, oxyStatus: 'Optimal', lat: 19.1311, lng: 72.8252 },
      { id: 'HOSP-MUM-2', name: 'Lilavati Hospital & Research Centre, Bandra', type: 'Private Multi-Specialty', icuBeds: 14, ventBeds: 9, oxyStatus: 'Optimal', lat: 19.0515, lng: 72.8291 },
      { id: 'HOSP-MUM-3', name: 'P.D. Hinduja Hospital, Mahim', type: 'Private Tertiary Care', icuBeds: 12, ventBeds: 8, oxyStatus: 'Optimal', lat: 19.0336, lng: 72.8402 },
      { id: 'HOSP-MUM-4', name: 'Sir H.N. Reliance Foundation Hospital, Girgaon', type: 'Private Multi-Specialty', icuBeds: 18, ventBeds: 14, oxyStatus: 'Optimal', lat: 18.9563, lng: 72.8189 }
    ],
    landmarks: [
      'Bandra Bandstand Promenade',
      'BKC (Bandra Kurla Complex)',
      'Worli Sea Face Circle',
      'Hiranandani Gardens, Powai',
      'Nariman Point Business District'
    ]
  },
  HYD: {
    name: 'Hyderabad',
    code: 'HYD',
    center: [17.3850, 78.4867],
    zoom: 12,
    hospitals: [
      { id: 'HOSP-HYD-1', name: 'Apollo Health City, Jubilee Hills', type: 'Private Quaternary Super', icuBeds: 22, ventBeds: 17, oxyStatus: 'Optimal', lat: 17.4277, lng: 78.4116 },
      { id: 'HOSP-HYD-2', name: 'Yashoda Hospitals, Somajiguda', type: 'Private Multi-Specialty', icuBeds: 15, ventBeds: 10, oxyStatus: 'Optimal', lat: 17.4262, lng: 78.4608 },
      { id: 'HOSP-HYD-3', name: 'KIMS Hospitals, Secunderabad', type: 'Private Tertiary Care', icuBeds: 16, ventBeds: 11, oxyStatus: 'Optimal', lat: 17.4399, lng: 78.4886 },
      { id: 'HOSP-HYD-4', name: 'Continental Hospitals, Financial District', type: 'Private Multi-Specialty', icuBeds: 14, ventBeds: 9, oxyStatus: 'Optimal', lat: 17.4190, lng: 78.3490 }
    ],
    landmarks: [
      'Hitec City Cyber Towers',
      'Jubilee Hills Check Post',
      'Financial District Gachibowli',
      'Banjara Hills Road No 1',
      'Madhapur Metro Corridor'
    ]
  },
  CCU: {
    name: 'Kolkata',
    code: 'CCU',
    center: [22.5726, 88.3639],
    zoom: 12,
    hospitals: [
      { id: 'HOSP-CCU-1', name: 'Apollo Gleneagles Hospital, EM Bypass', type: 'Private Tertiary Quaternary', icuBeds: 18, ventBeds: 12, oxyStatus: 'Optimal', lat: 22.5746, lng: 88.4036 },
      { id: 'HOSP-CCU-2', name: 'Fortis Hospital, Anandapur', type: 'Private Super-Specialty', icuBeds: 14, ventBeds: 9, oxyStatus: 'Optimal', lat: 22.5186, lng: 88.4011 },
      { id: 'HOSP-CCU-3', name: 'Medica Superspecialty Hospital, Mukundapur', type: 'Private Cardiac & Critical', icuBeds: 20, ventBeds: 15, oxyStatus: 'Optimal', lat: 22.4988, lng: 88.3995 },
      { id: 'HOSP-CCU-4', name: 'AMRI Hospitals, Dhakuria', type: 'Private Multi-Specialty', icuBeds: 11, ventBeds: 7, oxyStatus: 'Optimal', lat: 22.5113, lng: 88.3670 }
    ],
    landmarks: [
      'Park Street Boulevard',
      'Salt Lake Sector V IT Hub',
      'South City Mall, Prince Anwar Shah Rd',
      'New Town Action Area 1',
      'Ballygunge Circular Road'
    ]
  }
};

// PRE-CONFIGURED PRIVATE DISPATCH OFFICERS
const DEFAULT_ADMINS = [
  {
    id: 'PULSE-DIR-101',
    name: 'Dr. Siddharth Kapoor',
    role: 'Medical Operations Director',
    badge: 'PULSE-CORP-101',
    shift: 'Shift Alpha (08:00 - 16:00)',
    avatar: 'SK',
    color: 'from-rose-600 to-red-600'
  },
  {
    id: 'PULSE-DISP-102',
    name: 'Rhea Sengupta',
    role: 'Senior Critical Care Dispatch Lead',
    badge: 'PULSE-CORP-102',
    shift: 'Shift Bravo (16:00 - 00:00)',
    avatar: 'RS',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'PULSE-OPS-103',
    name: 'Aditya Malhotra',
    role: 'National Fleet Logistics Supervisor',
    badge: 'PULSE-CORP-103',
    shift: 'Operations Command Oversight',
    avatar: 'AM',
    color: 'from-emerald-600 to-teal-600'
  }
];

// PULSECARE PRIVATE AMBULANCE FLEET
const DEFAULT_AMBULANCES = [
  {
    id: 'PULSE-AMB-01',
    vehicleNo: 'DL-01-EA-8801',
    type: 'ALS',
    typeName: 'PulseCare Mobile ICU (Dräger Ventilator / Zoll Defibrillator)',
    city: 'DELHI',
    driverName: 'Surender Pal Singh',
    driverPhone: '+91 98112 34567',
    status: 'AVAILABLE',
    baseStation: 'Max Healthcare Standby Depot, Saket',
    lat: 28.530,
    lng: 77.214,
    equipment: ['Dräger ICU Ventilator', 'Zoll Defibrillator', 'Infusion Pumps', 'ECMO Kit']
  },
  {
    id: 'PULSE-AMB-02',
    vehicleNo: 'DL-01-EB-8802',
    type: 'BLS',
    typeName: 'PulseCare Rapid BLS (Paramedic First Responder)',
    city: 'DELHI',
    driverName: 'Vikram Joshi',
    driverPhone: '+91 98223 45678',
    status: 'AVAILABLE',
    baseStation: 'DLF Cyber Hub Response Post, Gurugram',
    lat: 28.495,
    lng: 77.088,
    equipment: ['AED', 'High-Flow Oxygen', 'Stretcher', 'Cervical Collar']
  },
  {
    id: 'PULSE-AMB-03',
    vehicleNo: 'KA-05-EM-8803',
    type: 'ALS',
    typeName: 'PulseCare Mobile ICU (Cardiac Critical Care)',
    city: 'BLR',
    driverName: 'Kiran Gowda',
    driverPhone: '+91 98450 12345',
    status: 'AVAILABLE',
    baseStation: 'Manipal Hospital Standby Hub, Old Airport Rd',
    lat: 12.960,
    lng: 77.652,
    equipment: ['Hamilton Ventilator', 'Philips Cardiac Monitor', 'Emergency Resuscitation']
  },
  {
    id: 'PULSE-AMB-04',
    vehicleNo: 'KA-05-EM-8804',
    type: 'NEO',
    typeName: 'PulseCare NeoCare (Neonatal Critical Care Transport)',
    city: 'BLR',
    driverName: 'Devraj Urs',
    driverPhone: '+91 98455 67890',
    status: 'AVAILABLE',
    baseStation: 'Narayana Health City Depot, Bommasandra',
    lat: 12.810,
    lng: 77.698,
    equipment: ['Transport Incubator', 'Neonatal Ventilator', 'Infant Phototherapy']
  },
  {
    id: 'PULSE-AMB-05',
    vehicleNo: 'MH-02-ER-8805',
    type: 'ALS',
    typeName: 'PulseCare Mobile ICU (Advanced Critical Care)',
    city: 'MUM',
    driverName: 'Farhan Merchant',
    driverPhone: '+91 98200 11223',
    status: 'DISPATCHED',
    baseStation: 'Lilavati Hospital Standby, Bandra West',
    lat: 19.052,
    lng: 72.830,
    equipment: ['Mindray ICU Ventilator', 'Multi-Parametric Monitor', 'Syringe Pumps']
  },
  {
    id: 'PULSE-AMB-06',
    vehicleNo: 'TS-09-EMS-8806',
    type: 'BLS',
    typeName: 'PulseCare Trauma Response Unit',
    city: 'HYD',
    driverName: 'Chaitanya Reddy',
    driverPhone: '+91 98490 99887',
    status: 'AVAILABLE',
    baseStation: 'Apollo Health City Depot, Jubilee Hills',
    lat: 17.428,
    lng: 78.412,
    equipment: ['Oxygen System', 'Spine Board', 'Automated External Defibrillator']
  },
  {
    id: 'PULSE-AMB-07',
    vehicleNo: 'WB-01-EM-8807',
    type: 'ALS',
    typeName: 'PulseCare Mobile ICU (Cardiac & Trauma)',
    city: 'CCU',
    driverName: 'Anirban Mukherjee',
    driverPhone: '+91 98300 44556',
    status: 'AVAILABLE',
    baseStation: 'Apollo Gleneagles Standby, EM Bypass',
    lat: 22.575,
    lng: 88.404,
    equipment: ['Ventilator', 'Defibrillator', 'Trauma Pack']
  }
];

// SEEDED PRIVATE EMERGENCY DISPATCH REQUESTS
const DEFAULT_REQUESTS = [
  {
    id: 'PULSE-REQ-8801',
    patientName: 'Ramesh Chandra Sharma',
    patientPhone: '+91 98101 23456',
    city: 'DELHI',
    emergencyType: 'Acute Respiratory Failure / Low SpO2',
    severity: 'CRITICAL',
    vitals: { spo2: 87, pulse: 124, conscious: 'Verbal', bloodGroup: 'B+' },
    scheme: 'PulseCare Corporate Priority Member',
    pickupLocation: 'Cyber Hub Building 10, DLF Phase 2, Gurugram',
    destinationHospital: 'Max Super Specialty Hospital, Saket',
    notes: 'Acute respiratory distress. PulseCare Mobile ICU dispatched with high-flow oxygen.',
    status: 'PENDING',
    requestedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    assignedAmbulanceId: null,
    assignedAmbulanceNo: null,
    assignedDriverName: null,
    assignedDriverPhone: null,
    // CORE REQUIREMENT: Record of admin who assigned
    assignedBy: null,
    lat: 28.4954,
    lng: 77.0880
  },
  {
    id: 'PULSE-REQ-8802',
    patientName: 'Priya Mukherjee',
    patientPhone: '+91 98205 67890',
    city: 'MUM',
    emergencyType: 'Cardiac Distress / Severe Chest Pain',
    severity: 'CRITICAL',
    vitals: { spo2: 95, pulse: 138, conscious: 'Alert', bloodGroup: 'O+' },
    scheme: 'Cashless Private TPA / Star Health / HDFC Ergo',
    pickupLocation: 'Bandra Bandstand Promenade, Mumbai',
    destinationHospital: 'Lilavati Hospital & Research Centre, Bandra',
    notes: 'Substernal chest pressure radiating to left arm. Cardiac critical protocol engaged.',
    status: 'DISPATCHED',
    requestedAt: new Date(Date.now() - 19 * 60 * 1000).toISOString(),
    assignedAmbulanceId: 'PULSE-AMB-05',
    assignedAmbulanceNo: 'MH-02-ER-8805',
    assignedDriverName: 'Farhan Merchant',
    assignedDriverPhone: '+91 98200 11223',
    // CORE REQUIREMENT: Assigned by Dr. Siddharth Kapoor
    assignedBy: {
      adminId: 'PULSE-DIR-101',
      adminName: 'Dr. Siddharth Kapoor',
      adminRole: 'Medical Operations Director',
      adminBadge: 'PULSE-CORP-101',
      assignedAt: new Date(Date.now() - 17 * 60 * 1000).toISOString(),
      notes: 'Deployed MH-02-ER-8805 with cardiologist on call. ICU bed reserved at Lilavati.'
    },
    lat: 19.0525,
    lng: 72.8295
  },
  {
    id: 'PULSE-REQ-8803',
    patientName: 'Amit Kulkarni',
    patientPhone: '+91 98451 98765',
    city: 'BLR',
    emergencyType: 'Major Trauma / Road Incident',
    severity: 'HIGH',
    vitals: { spo2: 98, pulse: 102, conscious: 'Alert', bloodGroup: 'A+' },
    scheme: 'PulseCare Corporate Priority Member',
    pickupLocation: 'Indiranagar 100ft Road, Near Metro Junction, Bengaluru',
    destinationHospital: 'Manipal Hospital, Old Airport Road',
    notes: 'Suspected orthopedic fracture. Paramedic stabilization completed.',
    status: 'COMPLETED',
    requestedAt: new Date(Date.now() - 80 * 60 * 1000).toISOString(),
    assignedAmbulanceId: 'PULSE-AMB-03',
    assignedAmbulanceNo: 'KA-05-EM-8803',
    assignedDriverName: 'Kiran Gowda',
    assignedDriverPhone: '+91 98450 12345',
    // CORE REQUIREMENT: Assigned by Rhea Sengupta
    assignedBy: {
      adminId: 'PULSE-DISP-102',
      adminName: 'Rhea Sengupta',
      adminRole: 'Senior Critical Care Dispatch Lead',
      adminBadge: 'PULSE-CORP-102',
      assignedAt: new Date(Date.now() - 78 * 60 * 1000).toISOString(),
      notes: 'Emergency handover completed at Manipal Trauma Care.'
    },
    lat: 12.9780,
    lng: 77.6405
  }
];

class EmergencyApp {
  constructor() {
    this.soundEnabled = true;
    this.audioCtx = null;
    this.activeCity = 'DELHI';
    this.currentView = 'emergency-view';
    this.activeTrackingRequestId = null;
    this.selectedAssignRequestId = null;
    this.selectedAmbulanceForAssign = null;
    this.map = null;
    this.mapMarkers = [];

    this.initDataStore();
    this.initAudio();
    this.initUI();
    this.initMap();
    this.startAutoRefreshLoop();
  }

  // LocalStorage Persistence
  initDataStore() {
    if (!localStorage.getItem('ems_admins')) {
      localStorage.setItem('ems_admins', JSON.stringify(DEFAULT_ADMINS));
    }
    if (!localStorage.getItem('ems_active_admin')) {
      localStorage.setItem('ems_active_admin', JSON.stringify(DEFAULT_ADMINS[0]));
    }
    if (!localStorage.getItem('ems_ambulances')) {
      localStorage.setItem('ems_ambulances', JSON.stringify(DEFAULT_AMBULANCES));
    }
    if (!localStorage.getItem('ems_requests')) {
      localStorage.setItem('ems_requests', JSON.stringify(DEFAULT_REQUESTS));
    }
    if (!localStorage.getItem('ems_active_city')) {
      localStorage.setItem('ems_active_city', 'DELHI');
    }
    if (!localStorage.getItem('ems_audit_logs')) {
      const initialLogs = DEFAULT_REQUESTS.filter(r => r.assignedBy).map(r => ({
        id: 'LOG-' + Math.floor(Math.random() * 89999 + 10000),
        requestId: r.id,
        patientName: r.patientName,
        city: r.city,
        ambulanceId: r.assignedAmbulanceId,
        ambulanceNo: r.assignedAmbulanceNo,
        adminId: r.assignedBy.adminId,
        adminName: r.assignedBy.adminName,
        adminRole: r.assignedBy.adminRole,
        adminBadge: r.assignedBy.adminBadge,
        assignedAt: r.assignedBy.assignedAt,
        status: r.status,
        emergencyType: r.emergencyType,
        severity: r.severity,
        hospital: r.destinationHospital,
        scheme: r.scheme
      }));
      localStorage.setItem('ems_audit_logs', JSON.stringify(initialLogs));
    }

    this.activeCity = localStorage.getItem('ems_active_city') || 'DELHI';
  }

  getAdmins() {
    return JSON.parse(localStorage.getItem('ems_admins') || '[]');
  }

  getActiveAdmin() {
    return JSON.parse(localStorage.getItem('ems_active_admin') || JSON.stringify(DEFAULT_ADMINS[0]));
  }

  setActiveAdmin(admin) {
    localStorage.setItem('ems_active_admin', JSON.stringify(admin));
    this.renderAdminProfile();
    this.renderAdminConsoleHeader();
    this.renderStats();
  }

  getAmbulances() {
    return JSON.parse(localStorage.getItem('ems_ambulances') || '[]');
  }

  saveAmbulances(ambulances) {
    localStorage.setItem('ems_ambulances', JSON.stringify(ambulances));
    this.renderFleetGrid();
    this.renderStats();
    this.updateMapMarkers();
  }

  getRequests() {
    return JSON.parse(localStorage.getItem('ems_requests') || '[]');
  }

  saveRequests(requests) {
    localStorage.setItem('ems_requests', JSON.stringify(requests));
    this.renderPendingRequests();
    this.renderLiveTracker();
    this.renderRecentIncidents();
    this.renderAuditLogTable();
    this.renderStats();
    this.updateMapMarkers();
  }

  getAuditLogs() {
    return JSON.parse(localStorage.getItem('ems_audit_logs') || '[]');
  }

  saveAuditLogEntry(entry) {
    const logs = this.getAuditLogs();
    logs.unshift(entry);
    localStorage.setItem('ems_audit_logs', JSON.stringify(logs));
    this.renderAuditLogTable();
  }

  // Audio Synthesizer (Web Audio API)
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn('AudioContext not supported', e);
    }
  }

  playBeep(freq, type, duration, delay = 0) {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      setTimeout(() => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
      }, delay);
    } catch (err) {
      console.error(err);
    }
  }

  playSirenTone() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.playBeep(880, 'sine', 0.22, 0);
    this.playBeep(660, 'sine', 0.22, 230);
    this.playBeep(880, 'sine', 0.22, 460);
  }

  playSuccessChime() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.playBeep(523.25, 'sine', 0.15, 0);
    this.playBeep(659.25, 'sine', 0.15, 120);
    this.playBeep(783.99, 'sine', 0.25, 240);
    this.playBeep(1046.50, 'sine', 0.35, 360);
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.textContent = this.soundEnabled ? '🔊' : '🔇';
      btn.classList.toggle('text-rose-400', !this.soundEnabled);
    }
    if (this.soundEnabled) this.playSuccessChime();
  }

  // City Switcher
  switchCity(cityKey) {
    if (!CITIES[cityKey]) return;
    this.activeCity = cityKey;
    localStorage.setItem('ems_active_city', cityKey);

    const cityData = CITIES[cityKey];

    const sel = document.getElementById('headerCitySelector');
    if (sel) sel.value = cityKey;

    document.querySelectorAll('.current-city-label').forEach(el => el.textContent = cityData.name);
    const heroCity = document.getElementById('heroCityName');
    if (heroCity) heroCity.textContent = `${cityData.name} Hub`;
    const bookingBadge = document.getElementById('bookingCityBadge');
    if (bookingBadge) bookingBadge.textContent = cityData.name;

    this.populateHospitalsDropdown();
    this.populateLandmarkPresets();
    this.renderHospitalGrid();
    this.renderFleetGrid();
    this.renderRecentIncidents();

    if (this.map) {
      this.map.flyTo(cityData.center, cityData.zoom, { animate: true, duration: 1.2 });
      setTimeout(() => this.updateMapMarkers(), 400);
    }

    this.showToast(`Active operational hub set to ${cityData.name}`, 'info');
  }

  populateHospitalsDropdown() {
    const sel = document.getElementById('destinationHospital');
    if (!sel) return;
    const cityData = CITIES[this.activeCity];
    sel.innerHTML = cityData.hospitals.map(h => {
      return `<option value="${h.name}">${h.name} [ICU: ${h.icuBeds} Free | Vent: ${h.ventBeds}]</option>`;
    }).join('');
  }

  populateLandmarkPresets() {
    const container = document.getElementById('landmarkPresetContainer');
    if (!container) return;
    const cityData = CITIES[this.activeCity];
    container.innerHTML = cityData.landmarks.map(lm => {
      return `<button type="button" onclick="app.setPickupLocation('${lm}, ${cityData.name}')" class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 border border-slate-800 hover:border-slate-700 transition">${lm.split(',')[0]}</button>`;
    }).join('');
  }

  setPickupLocation(locationText) {
    const input = document.getElementById('pickupLocation');
    if (input) {
      input.value = locationText;
      this.showToast(`Pickup location set to ${locationText}`, 'info');
    }
  }

  // Clinical Vitals Evaluation
  evaluateVitals() {
    const spo2 = parseInt(document.getElementById('vitalSpo2')?.value || '100');
    const alertBox = document.getElementById('vitalsAlertBox');
    const severitySelect = document.getElementById('emergencySeverity');

    if (spo2 < 90) {
      if (alertBox) alertBox.classList.remove('hidden');
      if (severitySelect) severitySelect.value = 'CRITICAL';
    } else {
      if (alertBox) alertBox.classList.add('hidden');
    }
  }

  // UI Setup & Initial Render
  initUI() {
    this.switchCity(this.activeCity);
    this.renderAdminProfile();
    this.renderAdminConsoleHeader();
    this.renderPendingRequests();
    this.renderFleetGrid();
    this.renderHospitalGrid();
    this.renderAuditLogTable();
    this.renderRecentIncidents();
    this.renderStats();
    this.populateAdminFilters();

    const requests = this.getRequests();
    const activeReq = requests.find(r => r.status === 'PENDING' || r.status === 'DISPATCHED' || r.status === 'ON_SCENE');
    if (activeReq) {
      this.activeTrackingRequestId = activeReq.id;
      this.renderLiveTracker();
    }

    document.addEventListener('click', (e) => {
      const container = document.getElementById('adminAuthContainer');
      const dropdown = document.getElementById('adminDropdownMenu');
      if (dropdown && !dropdown.classList.contains('hidden')) {
        if (!container.contains(e.target)) dropdown.classList.add('hidden');
      }
    });
  }

  switchView(viewId) {
    document.querySelectorAll('.view-panel').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(viewId);
    if (target) target.classList.remove('hidden');
    this.currentView = viewId;

    const navMap = {
      'emergency-view': 'nav-emergency',
      'admin-view': 'nav-admin',
      'hospital-view': 'nav-hospital',
      'audit-view': 'nav-audit',
      'map-view': 'nav-map'
    };

    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active', 'bg-rose-600', 'text-white', 'shadow-sm');
      tab.classList.add('text-slate-300');
    });

    const activeNav = document.getElementById(navMap[viewId]);
    if (activeNav) {
      activeNav.classList.add('active', 'bg-rose-600', 'text-white', 'shadow-sm');
      activeNav.classList.remove('text-slate-300');
    }

    if (viewId === 'map-view') {
      setTimeout(() => {
        if (this.map) this.map.invalidateSize();
      }, 200);
    }
  }

  toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }

  // Admin Profile & Switching
  renderAdminProfile() {
    const admin = this.getActiveAdmin();
    const nameEl = document.getElementById('adminDisplayName');
    const badgeEl = document.getElementById('adminBadgeTag');
    const roleEl = document.getElementById('adminDisplayRole');
    const avatarEl = document.getElementById('adminAvatar');

    if (nameEl) nameEl.textContent = admin.name;
    if (badgeEl) badgeEl.textContent = admin.id;
    if (roleEl) roleEl.textContent = admin.role;
    if (avatarEl) {
      avatarEl.textContent = admin.avatar || admin.name.substring(0, 2).toUpperCase();
      avatarEl.className = `w-7 h-7 rounded-full bg-gradient-to-tr ${admin.color || 'from-rose-600 to-red-600'} flex items-center justify-center text-xs font-bold text-white uppercase`;
    }

    const admins = this.getAdmins();
    const list = document.getElementById('adminDropdownList');
    if (list) {
      list.innerHTML = admins.map(a => {
        const isActive = a.id === admin.id;
        return `
          <button onclick="app.switchActiveAdmin('${a.id}')" class="w-full text-left p-2 rounded-lg text-xs flex items-center justify-between ${isActive ? 'bg-rose-600/15 text-rose-300 border border-rose-500/30 font-bold' : 'text-slate-300 hover:bg-slate-800'}">
            <div>
              <div class="font-bold">${a.name}</div>
              <div class="text-[10px] text-slate-400">${a.role} (${a.id})</div>
            </div>
            ${isActive ? '<span class="text-xs text-rose-400">● Active</span>' : ''}
          </button>
        `;
      }).join('');
    }
  }

  renderAdminConsoleHeader() {
    const admin = this.getActiveAdmin();
    const nameEl = document.getElementById('adminConsoleName');
    const roleEl = document.getElementById('adminConsoleRole');
    const idEl = document.getElementById('adminConsoleId');

    if (nameEl) nameEl.textContent = admin.name;
    if (roleEl) roleEl.textContent = admin.role;
    if (idEl) idEl.textContent = admin.id;

    document.querySelectorAll('.admin-quick-btn').forEach(btn => {
      btn.classList.remove('bg-rose-600', 'text-white', 'border-rose-500');
      if (btn.textContent.toLowerCase().includes(admin.name.split(' ')[1]?.toLowerCase() || '')) {
        btn.classList.add('bg-rose-600', 'text-white', 'border-rose-500');
      }
    });
  }

  toggleAdminDropdown() {
    const menu = document.getElementById('adminDropdownMenu');
    menu.classList.toggle('hidden');
  }

  switchActiveAdmin(adminId) {
    const admins = this.getAdmins();
    const found = admins.find(a => a.id === adminId);
    if (found) {
      this.setActiveAdmin(found);
      const dropdown = document.getElementById('adminDropdownMenu');
      if (dropdown) dropdown.classList.add('hidden');
      this.showToast(`Active Dispatch Officer: ${found.name} (${found.role})`, 'info');
      this.playSuccessChime();
    }
  }

  openLoginModal() {
    const modal = document.getElementById('loginModal');
    const dropdown = document.getElementById('adminDropdownMenu');
    if (dropdown) dropdown.classList.add('hidden');
    if (modal) modal.showModal();
  }

  selectQuickProfile(adminId) {
    this.switchActiveAdmin(adminId);
    document.getElementById('loginModal').close();
  }

  handleAdminLogin(e) {
    e.preventDefault();
    const name = document.getElementById('loginAdminName').value.trim();
    const id = document.getElementById('loginAdminId').value.trim();
    const role = document.getElementById('loginAdminRole').value.trim();

    if (!name || !id || !role) return;

    const admins = this.getAdmins();
    let existing = admins.find(a => a.id === id);

    if (!existing) {
      existing = {
        id: id,
        name: name,
        role: role,
        badge: id,
        shift: 'Custom Dispatcher Shift',
        avatar: name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        color: 'from-rose-600 to-red-600'
      };
      admins.push(existing);
      localStorage.setItem('ems_admins', JSON.stringify(admins));
      this.populateAdminFilters();
    } else {
      existing.name = name;
      existing.role = role;
    }

    this.setActiveAdmin(existing);
    document.getElementById('loginModal').close();
    this.showToast(`Welcome Officer ${existing.name}! Dispatch credentials recorded.`, 'success');
    this.playSuccessChime();
  }

  // Emergency Booking Handling
  handleEmergencySubmit(e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value.trim();
    const phoneRaw = document.getElementById('patientPhone').value.trim();
    const type = document.getElementById('emergencyType').value;
    const severity = document.getElementById('emergencySeverity').value;
    const location = document.getElementById('pickupLocation').value.trim();
    const hospital = document.getElementById('destinationHospital').value;
    const scheme = document.getElementById('patientScheme').value;
    const notes = document.getElementById('patientNotes').value.trim();

    const spo2 = document.getElementById('vitalSpo2')?.value || '98';
    const pulse = document.getElementById('vitalPulse')?.value || '82';
    const conscious = document.getElementById('vitalConscious')?.value || 'Alert';
    const bloodGroup = document.getElementById('vitalBloodGroup')?.value || 'Unknown';

    if (!name || !phoneRaw || !location) {
      alert('Please fill all required patient details');
      return;
    }

    const fullPhone = `+91 ${phoneRaw}`;
    const newReqId = 'PULSE-REQ-' + Math.floor(Math.random() * 8999 + 1000);
    const cityData = CITIES[this.activeCity];

    const newRequest = {
      id: newReqId,
      patientName: name,
      patientPhone: fullPhone,
      city: this.activeCity,
      emergencyType: type,
      severity: severity,
      vitals: {
        spo2: parseInt(spo2),
        pulse: parseInt(pulse),
        conscious: conscious,
        bloodGroup: bloodGroup
      },
      scheme: scheme,
      pickupLocation: location,
      destinationHospital: hospital,
      notes: notes,
      status: 'PENDING',
      requestedAt: new Date().toISOString(),
      assignedAmbulanceId: null,
      assignedAmbulanceNo: null,
      assignedDriverName: null,
      assignedDriverPhone: null,
      assignedBy: null, // Stamped upon admin assignment
      lat: cityData.center[0] + (Math.random() - 0.5) * 0.04,
      lng: cityData.center[1] + (Math.random() - 0.5) * 0.04
    };

    const requests = this.getRequests();
    requests.unshift(newRequest);
    this.saveRequests(requests);

    this.activeTrackingRequestId = newReqId;
    this.renderLiveTracker();

    this.playSirenTone();
    this.showLiveAlert(`🚨 CRITICAL CALL LOGGED: ${name} (${type}) in ${cityData.name}. Dispatch officer required.`);

    document.getElementById('emergencyBookingForm').reset();
    this.populateHospitalsDropdown();
    this.showToast(`Emergency dispatch call ${newReqId} logged with PulseCare Operations!`, 'error');
  }

  triggerInstantSOS() {
    const cityData = CITIES[this.activeCity];
    const mockNames = ['Sunil Grover', 'Meenakshi Sundaram', 'Rajesh K. Agarwal', 'Anita Roy'];
    const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
    const randomAddress = cityData.landmarks[Math.floor(Math.random() * cityData.landmarks.length)] + `, ${cityData.name}`;

    const newReqId = 'PULSE-SOS-' + Math.floor(Math.random() * 8999 + 1000);
    const sosRequest = {
      id: newReqId,
      patientName: randomName + ' [PRIORITY SOS]',
      patientPhone: '+91 91108 PULSE',
      city: this.activeCity,
      emergencyType: 'Cardiac Distress / Severe Chest Pain',
      severity: 'CRITICAL',
      vitals: { spo2: 88, pulse: 128, conscious: 'Verbal', bloodGroup: 'B+' },
      scheme: 'PulseCare Corporate Priority Member',
      pickupLocation: randomAddress,
      destinationHospital: cityData.hospitals[0].name,
      notes: '1-Click Priority SOS Alert with high-flow oxygen Mobile ICU request.',
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

    const requests = this.getRequests();
    requests.unshift(sosRequest);
    this.saveRequests(requests);

    this.activeTrackingRequestId = newReqId;
    this.renderLiveTracker();

    this.playSirenTone();
    this.showLiveAlert(`🚨 PRIORITY SOS ACTIVATED: ${randomName} at ${randomAddress}. Immediate deployment required.`);
    this.showToast(`🚨 Priority SOS Activated! Operations desk alerted.`, 'error');
  }

  autoFillCurrentLocation() {
    const cityData = CITIES[this.activeCity];
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lng = pos.coords.longitude.toFixed(4);
          document.getElementById('pickupLocation').value = `GPS: ${lat}, ${lng} (Near ${cityData.landmarks[0]}, ${cityData.name})`;
          this.showToast('GPS coordinates locked successfully!', 'info');
        },
        () => {
          document.getElementById('pickupLocation').value = `${cityData.landmarks[0]}, ${cityData.name} (Simulated GPS)`;
          this.showToast(`Demo GPS applied for ${cityData.name}`, 'info');
        }
      );
    } else {
      document.getElementById('pickupLocation').value = `${cityData.landmarks[0]}, ${cityData.name} (Simulated GPS)`;
    }
  }

  // Live Tracker Rendering (User View)
  renderLiveTracker() {
    const container = document.getElementById('liveTrackerContent');
    const badge = document.getElementById('activeTrackingId');
    if (!container) return;

    const requests = this.getRequests();
    const req = requests.find(r => r.id === this.activeTrackingRequestId) || requests[0];

    if (!req) {
      badge.textContent = 'No Active Dispatch';
      container.innerHTML = `
        <div class="text-center py-10 px-4 space-y-3">
          <div class="w-14 h-14 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-2xl text-slate-400">📡</div>
          <h4 class="text-sm font-semibold text-slate-300">No Active Emergency In Flight</h4>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">
            Submit an emergency request above or hit the 1-Click Priority SOS button.
          </p>
        </div>
      `;
      return;
    }

    badge.textContent = req.id;

    const severityColors = {
      CRITICAL: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
      HIGH: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      MODERATE: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
      LOW: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
    };

    const isAssigned = req.status !== 'PENDING';
    const isEnRoute = req.status === 'DISPATCHED';
    const isOnScene = req.status === 'ON_SCENE';
    const isCompleted = req.status === 'COMPLETED';

    const step1Class = 'tracker-step-done';
    const step2Class = isAssigned ? 'tracker-step-done' : 'tracker-step-active';
    const step3Class = isCompleted ? 'tracker-step-done' : (isEnRoute ? 'tracker-step-active' : (isAssigned ? 'tracker-step-done' : 'tracker-step-pending'));
    const step4Class = isCompleted ? 'tracker-step-done' : (isOnScene ? 'tracker-step-active' : 'tracker-step-pending');
    const step5Class = isCompleted ? 'tracker-step-done' : 'tracker-step-pending';

    // ADMIN ATTRIBUTION HIGHLIGHT BOX (THE CORE REQUIREMENT DISPLAYED PROMINENTLY)
    let adminAttributionHtml = '';
    if (req.assignedBy) {
      adminAttributionHtml = `
        <div class="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-blue-950/50 border border-cyan-500/30 shadow-md">
          <div class="flex items-center justify-between mb-2 pb-2 border-b border-cyan-500/20">
            <span class="flex items-center space-x-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <span>🛡️</span>
              <span>VERIFIED DISPATCH OFFICER ATTRIBUTION</span>
            </span>
            <span class="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono font-bold border border-cyan-500/30">Officially Certified</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span class="text-slate-400 text-[10px] uppercase block">Assigned By Dispatch Officer:</span>
              <span class="font-bold text-white text-sm flex items-center space-x-1">
                <span>${req.assignedBy.adminName}</span>
                <span class="text-[10px] text-cyan-400 font-mono">(${req.assignedBy.adminId})</span>
              </span>
              <span class="text-[11px] text-slate-300 block">${req.assignedBy.adminRole}</span>
            </div>
            <div>
              <span class="text-slate-400 text-[10px] uppercase block">Assignment Timestamp:</span>
              <span class="font-mono text-cyan-300 font-semibold block">${new Date(req.assignedBy.assignedAt).toLocaleTimeString()}</span>
              <span class="text-[10px] text-slate-400">${new Date(req.assignedBy.assignedAt).toLocaleDateString()}</span>
            </div>
          </div>
          ${req.assignedBy.notes ? `<div class="mt-2 text-[11px] text-slate-300 italic bg-slate-950/60 p-2 rounded border border-slate-800">Dispatch Note: "${req.assignedBy.notes}"</div>` : ''}
        </div>
      `;
    } else {
      adminAttributionHtml = `
        <div class="mt-4 p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse"></span>
            <span class="text-rose-300 font-semibold">Awaiting Dispatch Officer Assignment...</span>
          </div>
          <button onclick="app.switchView('admin-view')" class="text-[11px] font-bold text-rose-400 hover:text-rose-300 underline">
            Open Command Desk &rarr;
          </button>
        </div>
      `;
    }

    const v = req.vitals || { spo2: 98, pulse: 80, conscious: 'Alert', bloodGroup: 'Unknown' };

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Patient Header with Scheme -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <div>
            <div class="flex items-center space-x-2">
              <h4 class="font-bold text-white text-base">${req.patientName}</h4>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${severityColors[req.severity] || severityColors.HIGH}">${req.severity}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300">${req.city || this.activeCity}</span>
            </div>
            <div class="text-xs text-slate-300 mt-0.5">${req.emergencyType} • <span class="text-cyan-400 font-medium">${req.scheme || 'PulseCare Priority Member'}</span></div>
          </div>
          <div class="text-right">
            <div class="text-xs text-slate-400">Logged at</div>
            <div class="text-xs font-mono text-slate-200">${new Date(req.requestedAt).toLocaleTimeString()}</div>
          </div>
        </div>

        <!-- Pre-Triage Vitals Pill Bar -->
        <div class="grid grid-cols-4 gap-2 text-center text-xs">
          <div class="p-2 rounded-lg bg-slate-950 border ${v.spo2 < 90 ? 'border-rose-500 bg-rose-950/20' : 'border-slate-800'}">
            <div class="text-[10px] text-slate-400">SpO2</div>
            <div class="font-bold ${v.spo2 < 90 ? 'text-rose-400' : 'text-emerald-400'} font-mono">${v.spo2}%</div>
          </div>
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-400">Pulse</div>
            <div class="font-bold text-white font-mono">${v.pulse} bpm</div>
          </div>
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-400">Conscious</div>
            <div class="font-bold text-cyan-300">${v.conscious}</div>
          </div>
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-400">Blood</div>
            <div class="font-bold text-rose-300 font-mono">${v.bloodGroup}</div>
          </div>
        </div>

        <!-- 5-Step Pipeline -->
        <div class="py-2">
          <div class="grid grid-cols-5 gap-1.5 text-center text-[10px] font-semibold">
            <div class="p-2 rounded-lg border ${step1Class}">
              <div class="text-base">📝</div>
              <div class="mt-1">Logged</div>
            </div>
            <div class="p-2 rounded-lg border ${step2Class}">
              <div class="text-base">🛡️</div>
              <div class="mt-1">Assigned</div>
            </div>
            <div class="p-2 rounded-lg border ${step3Class}">
              <div class="text-base">🚑</div>
              <div class="mt-1">En Route</div>
            </div>
            <div class="p-2 rounded-lg border ${step4Class}">
              <div class="text-base">🏥</div>
              <div class="mt-1">On Scene</div>
            </div>
            <div class="p-2 rounded-lg border ${step5Class}">
              <div class="text-base">✅</div>
              <div class="mt-1">Handover</div>
            </div>
          </div>
        </div>

        <!-- Location & Hospital -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
          <div>
            <span class="text-slate-400 block text-[10px] uppercase">Pickup Point:</span>
            <span class="font-medium text-slate-200">${req.pickupLocation}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px] uppercase">Destination Hospital:</span>
            <span class="font-bold text-cyan-300">${req.destinationHospital}</span>
          </div>
        </div>

        <!-- Assigned Ambulance Details -->
        ${req.assignedAmbulanceNo ? `
          <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-xl">🚑</div>
              <div>
                <div class="text-xs font-bold text-white font-mono">${req.assignedAmbulanceNo}</div>
                <div class="text-[11px] text-slate-300">Driver: <strong class="text-white">${req.assignedDriverName}</strong></div>
              </div>
            </div>
            <div class="flex items-center space-x-2 w-full sm:w-auto">
              <a href="tel:${req.assignedDriverPhone}" class="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-1">
                <span>📞 Call Driver</span>
              </a>
              <button onclick="app.openWhatsAppAlertModal('${req.id}')" class="btn-whatsapp px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-1">
                <span>💬 WhatsApp Alert</span>
              </button>
              <span class="px-2.5 py-1.5 rounded-lg bg-slate-800 text-[11px] font-mono font-bold text-rose-300">ETA ~6 min</span>
            </div>
          </div>
        ` : ''}

        <!-- Admin Attribution Box -->
        ${adminAttributionHtml}

      </div>
    `;
  }

  loadSampleActiveRequest() {
    const requests = this.getRequests();
    const assignedReq = requests.find(r => r.assignedBy);
    if (assignedReq) {
      this.activeTrackingRequestId = assignedReq.id;
      this.renderLiveTracker();
      this.showToast(`Loaded incident ${assignedReq.id} assigned by ${assignedReq.assignedBy.adminName}`, 'info');
    }
  }

  renderRecentIncidents() {
    const container = document.getElementById('recentIncidentsList');
    if (!container) return;

    const requests = this.getRequests();
    const cityRequests = requests.filter(r => (r.city || 'DELHI') === this.activeCity);

    if (cityRequests.length === 0) {
      container.innerHTML = `<div class="text-xs text-slate-500 py-3 text-center">No active calls in ${CITIES[this.activeCity].name}</div>`;
      return;
    }

    container.innerHTML = cityRequests.slice(0, 4).map(r => {
      const isSelected = r.id === this.activeTrackingRequestId;
      return `
        <div onclick="app.selectIncidentToTrack('${r.id}')" class="p-2.5 rounded-lg border cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-rose-600/10 border-rose-500/40 text-white' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-300'}">
          <div class="text-left">
            <div class="text-xs font-bold">${r.patientName}</div>
            <div class="text-[10px] text-slate-400">${r.id} • ${new Date(r.requestedAt).toLocaleTimeString()}</div>
          </div>
          <div class="text-right">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${r.status === 'COMPLETED' ? 'bg-emerald-500/20 text-emerald-400' : (r.status === 'PENDING' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400')}">${r.status}</span>
            ${r.assignedBy ? `<div class="text-[9px] text-cyan-400 mt-0.5">By ${r.assignedBy.adminName.split(' ')[1] || r.assignedBy.adminName}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  selectIncidentToTrack(id) {
    this.activeTrackingRequestId = id;
    this.renderLiveTracker();
    this.renderRecentIncidents();
  }

  // =========================================================================
  // ADMIN DISPATCH & ASSIGNMENT WORKFLOW (CORE REQUIREMENT)
  // =========================================================================

  renderPendingRequests() {
    const container = document.getElementById('pendingRequestsContainer');
    const badge = document.getElementById('pendingBadge');
    if (!container) return;

    const requests = this.getRequests();
    const pending = requests.filter(r => r.status === 'PENDING');

    if (badge) {
      badge.textContent = pending.length;
      badge.classList.toggle('hidden', pending.length === 0);
    }

    if (pending.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 text-slate-400">
          <div class="text-2xl mb-2">✨</div>
          <div class="text-sm font-semibold">No Pending Emergency Calls in Queue</div>
          <div class="text-xs text-slate-500 mt-1">All incoming dispatch requests have been allocated ambulances.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = pending.map(req => {
      const isCritical = req.severity === 'CRITICAL';
      const v = req.vitals || { spo2: 98, pulse: 80 };
      return `
        <div class="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-900/50 transition">
          <div class="space-y-1.5">
            <div class="flex items-center space-x-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isCritical ? 'bg-rose-600 text-white animate-pulse' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}">
                ${req.severity} PRIORITY
              </span>
              <span class="px-2 py-0.2 rounded text-[10px] font-bold bg-slate-800 text-slate-300 font-mono">${req.city || this.activeCity}</span>
              <span class="text-xs font-mono font-bold text-slate-400">${req.id}</span>
              <span class="text-xs text-slate-500">• ${new Date(req.requestedAt).toLocaleTimeString()}</span>
            </div>
            <div class="text-sm font-bold text-white flex items-center space-x-2">
              <span>${req.patientName}</span>
              <span class="text-xs font-normal text-slate-400">(${req.patientPhone})</span>
            </div>
            <div class="text-xs text-slate-300">
              <strong class="text-rose-400">Nature:</strong> ${req.emergencyType} | <span class="text-cyan-300 font-medium">Hospital: ${req.destinationHospital}</span>
            </div>
            <div class="text-xs text-slate-400 flex items-center space-x-3">
              <span>📍 ${req.pickupLocation}</span>
              <span class="text-rose-300 font-mono">SpO2: ${v.spo2}%</span>
              <span class="text-emerald-300 font-mono">Pulse: ${v.pulse}</span>
            </div>
            ${req.notes ? `<div class="text-[11px] text-slate-400 italic bg-slate-950 px-2 py-1 rounded border border-slate-800">"${req.notes}"</div>` : ''}
          </div>

          <!-- Action Button to Assign Ambulance -->
          <div class="flex-shrink-0 w-full md:w-auto">
            <button onclick="app.openAssignmentModal('${req.id}')" class="w-full md:w-auto px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-lg shadow-rose-600/20 transition flex items-center justify-center space-x-2">
              <span>🚑</span>
              <span>Assign Ambulance</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  openAssignmentModal(requestId) {
    const requests = this.getRequests();
    const req = requests.find(r => r.id === requestId);
    if (!req) return;

    this.selectedAssignRequestId = requestId;
    this.selectedAmbulanceForAssign = null;

    const currentAdmin = this.getActiveAdmin();

    // Populate Admin Attribution Box in Modal
    document.getElementById('modalAdminName').textContent = currentAdmin.name;
    document.getElementById('modalAdminBadge').textContent = currentAdmin.id;
    document.getElementById('modalAdminRole').textContent = `${currentAdmin.role} • ${currentAdmin.shift}`;

    // Populate Patient Details
    document.getElementById('modalPatientName').textContent = req.patientName;
    document.getElementById('modalPatientPhone').textContent = req.patientPhone;
    document.getElementById('modalSeverityBadge').textContent = `${req.severity} (${req.emergencyType}) • SpO2: ${req.vitals?.spo2 || 98}%`;
    document.getElementById('modalPickupLocation').textContent = req.pickupLocation;
    document.getElementById('modalHospital').textContent = req.destinationHospital;

    const ambulances = this.getAmbulances();
    const targetCity = req.city || this.activeCity;
    const available = ambulances.filter(a => a.status === 'AVAILABLE' && (a.city === targetCity || a.city === this.activeCity));
    const listContainer = document.getElementById('modalAmbulanceList');

    if (available.length === 0) {
      listContainer.innerHTML = `
        <div class="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 text-center text-xs text-rose-300">
          ⚠️ No ambulances in ${targetCity} currently marked as AVAILABLE. Please release a completed ambulance in the Fleet Grid.
        </div>
      `;
      document.getElementById('confirmAssignmentBtn').disabled = true;
    } else {
      document.getElementById('confirmAssignmentBtn').disabled = false;
      listContainer.innerHTML = available.map((amb, index) => {
        return `
          <label class="block p-3 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 cursor-pointer transition">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <input type="radio" name="assignAmbulanceRadio" value="${amb.id}" ${index === 0 ? 'checked' : ''} onchange="app.selectAmbulanceRadio('${amb.id}')" class="text-rose-600 focus:ring-rose-500">
                <div>
                  <div class="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span class="font-mono text-cyan-300">${amb.vehicleNo}</span>
                    <span class="px-1.5 py-0.2 rounded text-[10px] font-bold bg-slate-800 text-slate-300">${amb.type}</span>
                    <span class="text-[10px] text-slate-400 font-mono">(${amb.city})</span>
                  </div>
                  <div class="text-[11px] text-slate-300">Driver: <strong>${amb.driverName}</strong> (${amb.driverPhone})</div>
                  <div class="text-[10px] text-slate-400">Depot: ${amb.baseStation}</div>
                </div>
              </div>
              <div class="text-right">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Ready</span>
              </div>
            </div>
          </label>
        `;
      }).join('');
      this.selectedAmbulanceForAssign = available[0].id;
    }

    const modal = document.getElementById('assignmentModal');
    if (modal) modal.showModal();
  }

  selectAmbulanceRadio(ambId) {
    this.selectedAmbulanceForAssign = ambId;
  }

  // EXECUTE AMBULANCE ASSIGNMENT - RECORDS ADMIN NAME
  executeAssignment() {
    if (!this.selectedAssignRequestId || !this.selectedAmbulanceForAssign) {
      alert('Please select an ambulance to assign');
      return;
    }

    const requests = this.getRequests();
    const reqIndex = requests.findIndex(r => r.id === this.selectedAssignRequestId);
    if (reqIndex === -1) return;

    const ambulances = this.getAmbulances();
    const ambIndex = ambulances.findIndex(a => a.id === this.selectedAmbulanceForAssign);
    if (ambIndex === -1) return;

    const currentAdmin = this.getActiveAdmin();
    const assignedAmbulance = ambulances[ambIndex];
    const targetRequest = requests[reqIndex];

    const timestamp = new Date().toISOString();

    // 1. UPDATE EMERGENCY REQUEST WITH ADMIN ATTRIBUTION
    targetRequest.status = 'DISPATCHED';
    targetRequest.assignedAmbulanceId = assignedAmbulance.id;
    targetRequest.assignedAmbulanceNo = assignedAmbulance.vehicleNo;
    targetRequest.assignedDriverName = assignedAmbulance.driverName;
    targetRequest.assignedDriverPhone = assignedAmbulance.driverPhone;

    // THE CRITICAL FIELD: RECORDING ADMIN WHO ASSIGNED
    targetRequest.assignedBy = {
      adminId: currentAdmin.id,
      adminName: currentAdmin.name,
      adminRole: currentAdmin.role,
      adminBadge: currentAdmin.badge,
      assignedAt: timestamp,
      notes: `Allocated unit ${assignedAmbulance.vehicleNo} via PulseCare Operations Desk.`
    };

    // 2. UPDATE AMBULANCE STATUS
    assignedAmbulance.status = 'DISPATCHED';

    // 3. LOG IN TAMPER-EVIDENT AUDIT TRAIL
    const auditLogEntry = {
      id: 'LOG-' + Math.floor(Math.random() * 89999 + 10000),
      requestId: targetRequest.id,
      patientName: targetRequest.patientName,
      city: targetRequest.city || this.activeCity,
      ambulanceId: assignedAmbulance.id,
      ambulanceNo: assignedAmbulance.vehicleNo,
      adminId: currentAdmin.id,
      adminName: currentAdmin.name,      // RECORDED ADMIN NAME
      adminRole: currentAdmin.role,      // RECORDED ADMIN ROLE
      adminBadge: currentAdmin.badge,
      assignedAt: timestamp,
      status: 'DISPATCHED',
      emergencyType: targetRequest.emergencyType,
      severity: targetRequest.severity,
      hospital: targetRequest.destinationHospital,
      scheme: targetRequest.scheme
    };

    // Save state
    this.saveRequests(requests);
    this.saveAmbulances(ambulances);
    this.saveAuditLogEntry(auditLogEntry);

    // Close Modal
    document.getElementById('assignmentModal').close();

    // Play Sound & Notify
    this.playSuccessChime();
    this.showToast(`Unit ${assignedAmbulance.vehicleNo} assigned by Officer ${currentAdmin.name}!`, 'success');

    this.activeTrackingRequestId = targetRequest.id;
    this.renderLiveTracker();
  }

  // WhatsApp / SMS Attendant Alert Modal
  openWhatsAppAlertModal(requestId) {
    const requests = this.getRequests();
    const req = requests.find(r => r.id === requestId);
    if (!req || !req.assignedBy) return;

    const officer = req.assignedBy;
    const msg = `🚨 *PULSECARE INDIA - CRITICAL EMERGENCY DISPATCH ALERT*\n` +
      `-----------------------------------------\n` +
      `👤 *Patient:* ${req.patientName}\n` +
      `🚑 *Assigned Mobile Unit:* ${req.assignedAmbulanceNo}\n` +
      `👨‍✈️ *Lead Paramedic / Driver:* ${req.assignedDriverName}\n` +
      `📞 *Direct Driver Phone:* ${req.assignedDriverPhone}\n` +
      `🏥 *Destination Hospital:* ${req.destinationHospital}\n` +
      `🛡️ *Assigned by Dispatch Officer:* ${officer.adminName} (${officer.adminId})\n` +
      `⏱️ *Time of Allocation:* ${new Date(officer.assignedAt).toLocaleTimeString()}\n` +
      `📍 *Pickup Point:* ${req.pickupLocation}\n` +
      `-----------------------------------------\n` +
      `24/7 Support Desk: +91 1800-200-9110\n` +
      `Telemetry Live Tracking: https://pulsecare.in/track?ref=${req.id}`;

    document.getElementById('whatsappMessagePreview').textContent = msg;
    const encoded = encodeURIComponent(msg);
    document.getElementById('whatsappDirectLink').href = `https://wa.me/?text=${encoded}`;

    document.getElementById('whatsappModal').showModal();
  }

  copyWhatsAppMessage() {
    const text = document.getElementById('whatsappMessagePreview').textContent;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('Dispatch message copied to clipboard!', 'success');
    });
  }

  // Hospital Bed Matrix
  renderHospitalGrid() {
    const container = document.getElementById('hospitalGridContainer');
    if (!container) return;

    const cityData = CITIES[this.activeCity];
    container.innerHTML = cityData.hospitals.map(h => {
      return `
        <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800 shadow flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-start justify-between">
              <div>
                <span class="text-sm font-bold text-white block">${h.name}</span>
                <span class="text-[11px] text-cyan-400 font-mono">${h.type}</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Oxygen ${h.oxyStatus}
              </span>
            </div>

            <div class="mt-4 grid grid-cols-3 gap-2 text-center">
              <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <div class="text-[10px] text-slate-400 uppercase">ICU Beds</div>
                <div class="text-xl font-black ${h.icuBeds > 0 ? 'text-emerald-400' : 'text-rose-400'} font-mono">${h.icuBeds} Free</div>
              </div>
              <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <div class="text-[10px] text-slate-400 uppercase">Ventilators</div>
                <div class="text-xl font-black text-cyan-300 font-mono">${h.ventBeds} Ready</div>
              </div>
              <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <div class="text-[10px] text-slate-400 uppercase">Emergency OT</div>
                <div class="text-xl font-black text-white font-mono">Available</div>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-400 text-[11px]">Accreditation: NABH & JCI Certified</span>
            <button onclick="app.selectHospitalForNextBooking('${h.name}')" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-rose-300 transition">
              Select for Next Route &rarr;
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  refreshHospitalBedData() {
    this.playSuccessChime();
    this.showToast('Updated live bed counts from hospital network!', 'info');
    this.renderHospitalGrid();
  }

  selectHospitalForNextBooking(hospitalName) {
    this.switchView('emergency-view');
    const sel = document.getElementById('destinationHospital');
    if (sel) sel.value = hospitalName;
    this.showToast(`Selected destination: ${hospitalName}`, 'info');
  }

  // Fleet Management
  renderFleetGrid() {
    const container = document.getElementById('fleetGridContainer');
    const filter = document.getElementById('fleetStatusFilter')?.value || 'ALL';
    if (!container) return;

    let ambulances = this.getAmbulances();
    ambulances = ambulances.filter(a => a.city === this.activeCity || !a.city);

    if (filter !== 'ALL') {
      ambulances = ambulances.filter(a => a.status === filter);
    }

    const statusBadgeMap = {
      AVAILABLE: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      DISPATCHED: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      ON_SCENE: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      MAINTENANCE: 'bg-slate-800 text-slate-400 border-slate-700'
    };

    if (ambulances.length === 0) {
      container.innerHTML = `<div class="col-span-3 text-center py-8 text-slate-500">No vehicles matching the filter in ${CITIES[this.activeCity].name}</div>`;
      return;
    }

    container.innerHTML = ambulances.map(amb => {
      return `
        <div class="bg-slate-900/90 p-4 rounded-xl border border-slate-800 shadow flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-start justify-between">
              <div>
                <span class="text-xs font-bold text-white block font-mono text-cyan-300">${amb.vehicleNo}</span>
                <span class="text-[10px] text-slate-400 font-mono">${amb.type} - ${amb.typeName.split('(')[0]}</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${statusBadgeMap[amb.status]}">
                ${amb.status}
              </span>
            </div>

            <div class="mt-3 space-y-1 text-xs text-slate-300">
              <div>👨‍✈️ Paramedic: <strong class="text-white">${amb.driverName}</strong></div>
              <div>📞 Phone: <a href="tel:${amb.driverPhone}" class="text-cyan-400 hover:underline font-mono">${amb.driverPhone}</a></div>
              <div>📍 Depot: <span class="text-slate-400">${amb.baseStation}</span></div>
            </div>

            <div class="mt-2.5 pt-2.5 border-t border-slate-800 flex flex-wrap gap-1">
              ${(amb.equipment || []).map(eq => `<span class="text-[9px] bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">${eq}</span>`).join('')}
            </div>
          </div>

          <!-- Status Toggle Action -->
          <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="text-[10px] text-slate-400">Unit Status:</span>
            <select onchange="app.changeAmbulanceStatus('${amb.id}', this.value)" class="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none">
              <option value="AVAILABLE" ${amb.status === 'AVAILABLE' ? 'selected' : ''}>Available</option>
              <option value="DISPATCHED" ${amb.status === 'DISPATCHED' ? 'selected' : ''}>Dispatched</option>
              <option value="ON_SCENE" ${amb.status === 'ON_SCENE' ? 'selected' : ''}>On Scene</option>
              <option value="MAINTENANCE" ${amb.status === 'MAINTENANCE' ? 'selected' : ''}>Maintenance</option>
            </select>
          </div>
        </div>
      `;
    }).join('');
  }

  changeAmbulanceStatus(ambId, newStatus) {
    const ambulances = this.getAmbulances();
    const amb = ambulances.find(a => a.id === ambId);
    if (!amb) return;

    amb.status = newStatus;

    if (newStatus === 'AVAILABLE') {
      const requests = this.getRequests();
      const linkedReq = requests.find(r => r.assignedAmbulanceId === ambId && (r.status === 'DISPATCHED' || r.status === 'ON_SCENE'));
      if (linkedReq) {
        linkedReq.status = 'COMPLETED';
        this.saveRequests(requests);
      }
    }

    this.saveAmbulances(ambulances);
    this.showToast(`Unit ${amb.vehicleNo} marked as ${newStatus}`, 'info');
  }

  openAddAmbulanceModal() {
    const modal = document.getElementById('addAmbulanceModal');
    if (modal) {
      document.getElementById('newCityHub').value = this.activeCity;
      modal.showModal();
    }
  }

  handleAddAmbulance(e) {
    e.preventDefault();
    const vehicleNo = document.getElementById('newVehicleNo').value.trim();
    const type = document.getElementById('newUnitType').value;
    const city = document.getElementById('newCityHub').value;
    const driver = document.getElementById('newDriverName').value.trim();
    const phoneRaw = document.getElementById('newDriverPhone').value.trim();
    const base = document.getElementById('newBaseStation').value.trim();

    const cityData = CITIES[city] || CITIES[this.activeCity];

    const newAmbulance = {
      id: 'PULSE-AMB-' + Math.floor(Math.random() * 899 + 100),
      vehicleNo: vehicleNo,
      type: type,
      typeName: type === 'ALS' ? 'PulseCare Mobile ICU' : (type === 'NEO' ? 'PulseCare NeoCare Unit' : 'PulseCare Rapid BLS'),
      city: city,
      driverName: driver,
      driverPhone: `+91 ${phoneRaw}`,
      status: 'AVAILABLE',
      baseStation: base,
      lat: cityData.center[0] + (Math.random() - 0.5) * 0.04,
      lng: cityData.center[1] + (Math.random() - 0.5) * 0.04,
      equipment: ['Oxygen Supply', 'AED', 'Telemetry Link']
    };

    const ambulances = this.getAmbulances();
    ambulances.push(newAmbulance);
    this.saveAmbulances(ambulances);

    document.getElementById('addAmbulanceModal').close();
    this.showToast(`Unit ${vehicleNo} added to ${cityData.name} fleet!`, 'success');
  }

  // =========================================================================
  // ASSIGNMENT AUDIT LOG TABLE (THE CORE REQUIREMENT)
  // =========================================================================

  populateAdminFilters() {
    const admins = this.getAdmins();
    const select = document.getElementById('auditAdminFilter');
    if (!select) return;

    select.innerHTML = '<option value="ALL">All Dispatch Officers</option>' + 
      admins.map(a => `<option value="${a.name}">${a.name} (${a.id})</option>`).join('');
  }

  renderAuditLogTable() {
    const tbody = document.getElementById('auditTableBody');
    const empty = document.getElementById('auditEmptyState');
    const countEl = document.getElementById('auditCountSummary');
    if (!tbody) return;

    const search = document.getElementById('auditSearchInput')?.value.toLowerCase() || '';
    const adminFilter = document.getElementById('auditAdminFilter')?.value || 'ALL';
    const statusFilter = document.getElementById('auditStatusFilter')?.value || 'ALL';

    const requests = this.getRequests();
    let assignedRequests = requests.filter(r => r.assignedBy);

    if (search) {
      assignedRequests = assignedRequests.filter(r => 
        r.patientName.toLowerCase().includes(search) ||
        (r.assignedAmbulanceNo && r.assignedAmbulanceNo.toLowerCase().includes(search)) ||
        r.id.toLowerCase().includes(search) ||
        r.assignedBy.adminName.toLowerCase().includes(search) ||
        (r.city && r.city.toLowerCase().includes(search))
      );
    }

    if (adminFilter !== 'ALL') {
      assignedRequests = assignedRequests.filter(r => r.assignedBy.adminName === adminFilter);
    }

    if (statusFilter !== 'ALL') {
      assignedRequests = assignedRequests.filter(r => r.status === statusFilter);
    }

    if (countEl) {
      countEl.textContent = `Showing ${assignedRequests.length} verified ambulance assignments`;
    }

    if (assignedRequests.length === 0) {
      tbody.innerHTML = '';
      if (empty) empty.classList.remove('hidden');
      return;
    }

    if (empty) empty.classList.add('hidden');

    tbody.innerHTML = assignedRequests.map(r => {
      const assigned = r.assignedBy;
      const v = r.vitals || { spo2: 98, pulse: 80 };
      return `
        <tr class="hover:bg-slate-900/60 transition">
          <td class="px-4 py-3 font-mono">
            <div class="font-bold text-white">${r.id}</div>
            <div class="text-[10px] text-slate-400">${new Date(r.requestedAt).toLocaleTimeString()}</div>
          </td>
          <td class="px-4 py-3">
            <div class="font-bold text-white">${r.patientName}</div>
            <div class="text-[11px] text-slate-400">${r.city || 'DELHI'} • ${r.pickupLocation}</div>
          </td>
          <td class="px-4 py-3">
            <span class="text-xs text-slate-300 block">${r.emergencyType}</span>
            <div class="text-[10px] text-slate-400 mt-0.5">
              <span class="text-rose-400 font-bold">${r.severity}</span> | SpO2: <span class="font-mono text-cyan-300">${v.spo2}%</span>
            </div>
          </td>
          <td class="px-4 py-3 font-mono">
            <div class="font-bold text-cyan-300">${r.assignedAmbulanceNo}</div>
            <div class="text-[11px] text-slate-400 font-sans">Driver: ${r.assignedDriverName}</div>
          </td>

          <!-- CORE REQUIREMENT: DISPLAYING THE ADMIN WHO ASSIGNED -->
          <td class="px-4 py-3">
            <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-950/70 to-blue-950/70 border border-cyan-500/30 px-3 py-1.5 rounded-xl shadow-sm">
              <span class="text-sm">🛡️</span>
              <div>
                <div class="font-bold text-white text-xs flex items-center space-x-1">
                  <span>${assigned.adminName}</span>
                  <span class="text-[9px] bg-cyan-500/20 text-cyan-300 px-1 rounded font-mono font-bold">${assigned.adminId}</span>
                </div>
                <div class="text-[10px] text-cyan-300/90">${assigned.adminRole}</div>
                <div class="text-[9px] text-slate-400 font-mono mt-0.5">Assigned: ${new Date(assigned.assignedAt).toLocaleTimeString()}</div>
              </div>
            </div>
          </td>

          <td class="px-4 py-3">
            <div class="text-xs font-semibold text-slate-200">${r.destinationHospital.split(',')[0]}</div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${r.status === 'COMPLETED' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'}">
              ${r.status}
            </span>
          </td>

          <td class="px-4 py-3 text-right space-x-1">
            <button onclick="app.openWhatsAppAlertModal('${r.id}')" title="Share WhatsApp Alert" class="px-2 py-1 rounded btn-whatsapp text-[11px] font-bold">
              💬
            </button>
            <button onclick="app.viewIncidentDocket('${r.id}')" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-400 border border-slate-700">
              Docket &rarr;
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  filterAuditLog() {
    this.renderAuditLogTable();
  }

  viewIncidentDocket(requestId) {
    const requests = this.getRequests();
    const req = requests.find(r => r.id === requestId);
    if (!req || !req.assignedBy) return;

    const content = document.getElementById('incidentDocketContent');
    if (!content) return;

    const v = req.vitals || { spo2: 98, pulse: 80, conscious: 'Alert', bloodGroup: 'Unknown' };

    content.innerHTML = `
      <div class="border-b border-slate-700 pb-3">
        <div class="text-rose-400 font-bold">PULSECARE INDIA • PRIVATE CRITICAL CARE SERVICES</div>
        <div class="text-base font-bold text-white">INCIDENT DISPATCH DOCKET: ${req.id}</div>
        <div class="text-slate-400 text-[11px]">Command Hub: ${CITIES[req.city || this.activeCity]?.name || 'Delhi NCR'} • Date: ${new Date(req.requestedAt).toLocaleString()}</div>
      </div>

      <div class="grid grid-cols-2 gap-4 py-2 border-b border-slate-700">
        <div>
          <span class="text-slate-400 text-[10px] uppercase">Patient Profile & Vitals:</span>
          <div class="font-bold text-white text-sm">${req.patientName}</div>
          <div>Mobile: ${req.patientPhone}</div>
          <div>Category: ${req.emergencyType}</div>
          <div class="text-cyan-300">Vitals: SpO2 ${v.spo2}% | Pulse: ${v.pulse} bpm | Group: ${v.bloodGroup}</div>
          <div>Coverage: ${req.scheme || 'PulseCare Priority'}</div>
        </div>
        <div>
          <span class="text-slate-400 text-[10px] uppercase">Route Coordinates:</span>
          <div>Pickup: ${req.pickupLocation}</div>
          <div class="font-bold text-white">Hospital: ${req.destinationHospital}</div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 py-2 border-b border-slate-700">
        <div>
          <span class="text-slate-400 text-[10px] uppercase">Allocated Ambulance:</span>
          <div class="font-bold text-cyan-300">${req.assignedAmbulanceNo}</div>
          <div>Driver: ${req.assignedDriverName} (${req.assignedDriverPhone})</div>
        </div>
        
        <!-- ADMIN ATTRIBUTION STAMP IN DOCKET -->
        <div class="bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-500/30">
          <span class="text-cyan-400 text-[10px] uppercase font-bold">ASSIGNED BY DISPATCH OFFICER (RECORDED):</span>
          <div class="font-bold text-white text-sm">${req.assignedBy.adminName}</div>
          <div class="text-slate-300">Officer ID: ${req.assignedBy.adminId}</div>
          <div class="text-slate-300">Designation: ${req.assignedBy.adminRole}</div>
          <div class="text-cyan-300 mt-1 font-mono">Timestamp: ${new Date(req.assignedBy.assignedAt).toLocaleString()}</div>
        </div>
      </div>

      <div class="pt-2 text-[10px] text-slate-500 flex justify-between">
        <span>Digital Security Key: PULSE-SEC-${req.id.replace(/\D/g, '')}</span>
        <span>Authorized Signature: [ ELECTRONICALLY ATTESTED BY ${req.assignedBy.adminName.toUpperCase()} ]</span>
      </div>
    `;

    document.getElementById('incidentModal').showModal();
  }

  exportAuditCSV() {
    const requests = this.getRequests().filter(r => r.assignedBy);
    if (requests.length === 0) {
      alert('No recorded assignments to export yet.');
      return;
    }

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Request_ID,Patient_Name,Phone,City,Emergency_Type,Severity,SpO2,Pulse,Assigned_Ambulance,Driver,Admin_Name_Who_Assigned,Admin_ID,Admin_Role,Assignment_Timestamp,Hospital,Scheme,Status\n';

    requests.forEach(r => {
      const v = r.vitals || { spo2: 98, pulse: 80 };
      const row = [
        `"${r.id}"`,
        `"${r.patientName}"`,
        `"${r.patientPhone}"`,
        `"${r.city || 'DELHI'}"`,
        `"${r.emergencyType}"`,
        `"${r.severity}"`,
        `"${v.spo2}"`,
        `"${v.pulse}"`,
        `"${r.assignedAmbulanceNo || ''}"`,
        `"${r.assignedDriverName || ''}"`,
        `"${r.assignedBy.adminName}"`,
        `"${r.assignedBy.adminId}"`,
        `"${r.assignedBy.adminRole}"`,
        `"${r.assignedBy.assignedAt}"`,
        `"${r.destinationHospital}"`,
        `"${r.scheme || 'PulseCare'}"`,
        `"${r.status}"`
      ].join(',');
      csvContent += row + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `PulseCare_India_Assignments_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast('Assignment Audit Log exported as CSV!', 'success');
  }

  exportAuditJSON() {
    const requests = this.getRequests().filter(r => r.assignedBy);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(requests, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `PulseCare_India_Audit_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast('Assignment Audit Log exported as JSON!', 'success');
  }

  // Statistics Dashboard
  renderStats() {
    const ambulances = this.getAmbulances().filter(a => a.city === this.activeCity || !a.city);
    const requests = this.getRequests().filter(r => (r.city || 'DELHI') === this.activeCity);
    const currentAdmin = this.getActiveAdmin();

    const totalFleet = ambulances.length;
    const available = ambulances.filter(a => a.status === 'AVAILABLE').length;
    const activeDispatches = requests.filter(r => r.status === 'DISPATCHED' || r.status === 'ON_SCENE').length;
    const pending = requests.filter(r => r.status === 'PENDING').length;

    const myAssignments = this.getRequests().filter(r => r.assignedBy && r.assignedBy.adminId === currentAdmin.id).length;

    const elTotal = document.getElementById('statTotalFleet');
    const elAvail = document.getElementById('statAvailableFleet');
    const elActive = document.getElementById('statActiveDispatches');
    const elPending = document.getElementById('statPendingRequests');
    const elMyAssign = document.getElementById('statCurrentAdminAssignments');

    if (elTotal) elTotal.textContent = totalFleet;
    if (elAvail) elAvail.textContent = available;
    if (elActive) elActive.textContent = activeDispatches;
    if (elPending) elPending.textContent = pending;
    if (elMyAssign) elMyAssign.textContent = myAssignments;
  }

  // Interactive Fleet Map
  initMap() {
    const mapDiv = document.getElementById('fleetMap');
    if (!mapDiv || typeof L === 'undefined') return;

    try {
      const cityData = CITIES[this.activeCity];
      this.map = L.map('fleetMap').setView(cityData.center, cityData.zoom);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(this.map);

      this.updateMapMarkers();
    } catch (err) {
      console.warn('Leaflet map error', err);
    }
  }

  updateMapMarkers() {
    if (!this.map || typeof L === 'undefined') return;

    this.mapMarkers.forEach(m => this.map.removeLayer(m));
    this.mapMarkers = [];

    const ambulances = this.getAmbulances().filter(a => a.city === this.activeCity);
    const requests = this.getRequests().filter(r => (r.city || 'DELHI') === this.activeCity);
    const cityData = CITIES[this.activeCity];

    // Hospital Markers
    cityData.hospitals.forEach(h => {
      if (!h.lat || !h.lng) return;
      const customIcon = L.divIcon({
        html: `<div class="custom-map-icon text-cyan-400 text-lg">🏥</div>`,
        className: 'custom-leaflet-div-icon',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker([h.lat, h.lng], { icon: customIcon }).addTo(this.map);
      marker.bindPopup(`
        <div class="p-1">
          <div class="font-bold text-white text-xs">${h.name}</div>
          <div class="text-[10px] text-cyan-300 font-mono">${h.type}</div>
          <div class="text-[11px] text-emerald-400 mt-1 font-bold">ICU Beds: ${h.icuBeds} Free | Vent: ${h.ventBeds}</div>
        </div>
      `);
      this.mapMarkers.push(marker);
    });

    // Ambulance Markers
    ambulances.forEach(amb => {
      if (!amb.lat || !amb.lng) return;
      const isAvail = amb.status === 'AVAILABLE';
      const customIcon = L.divIcon({
        html: `<div class="custom-map-icon ${isAvail ? 'text-emerald-400' : 'text-amber-400'}">🚑</div>`,
        className: 'custom-leaflet-div-icon',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker([amb.lat, amb.lng], { icon: customIcon }).addTo(this.map);
      marker.bindPopup(`
        <div class="p-1">
          <div class="font-bold text-rose-400 text-xs font-mono">${amb.vehicleNo}</div>
          <div class="text-[10px] text-cyan-300 font-mono">${amb.type} • Status: ${amb.status}</div>
          <div class="text-[11px] text-slate-300 mt-1">Driver: ${amb.driverName} (${amb.driverPhone})</div>
          <div class="text-[10px] text-slate-400">Depot: ${amb.baseStation}</div>
        </div>
      `);
      this.mapMarkers.push(marker);
    });

    // Emergency Request Markers
    requests.filter(r => r.status !== 'COMPLETED').forEach(req => {
      if (!req.lat || !req.lng) return;
      const customIcon = L.divIcon({
        html: `<div class="custom-map-icon text-rose-500 animate-pulse">🚨</div>`,
        className: 'custom-leaflet-div-icon',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker([req.lat, req.lng], { icon: customIcon }).addTo(this.map);
      marker.bindPopup(`
        <div class="p-1">
          <div class="font-bold text-rose-400 text-xs">${req.severity}: ${req.patientName}</div>
          <div class="text-[11px] text-slate-200">${req.emergencyType}</div>
          <div class="text-[10px] text-slate-400 mt-1">Pickup: ${req.pickupLocation}</div>
          <div class="text-[10px] font-mono text-cyan-300 mt-1">Status: ${req.status}</div>
          ${req.assignedBy ? `<div class="text-[10px] text-slate-300 mt-0.5">Assigned by: <strong>${req.assignedBy.adminName}</strong></div>` : ''}
        </div>
      `);
      this.mapMarkers.push(marker);
    });
  }

  // Real-Time Notifications
  showLiveAlert(text) {
    const banner = document.getElementById('liveAlertBanner');
    const textEl = document.getElementById('liveAlertText');
    if (banner && textEl) {
      textEl.textContent = text;
      banner.classList.remove('hidden');
    }
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const borderColors = {
      success: 'border-emerald-500 text-emerald-300 bg-slate-900',
      error: 'border-rose-500 text-rose-300 bg-slate-900',
      info: 'border-cyan-500 text-cyan-300 bg-slate-900'
    };

    toast.className = `fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl border ${borderColors[type] || borderColors.info} shadow-2xl text-xs font-semibold flex items-center space-x-2 transition-all transform translate-y-4 opacity-0`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : (type === 'error' ? '🚨' : '✚')}</span>
      <span>${message}</span>
    `;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  resetDemoData() {
    if (confirm('Reset PulseCare India fleet, requests, and assignment audit logs to factory defaults?')) {
      localStorage.removeItem('ems_admins');
      localStorage.removeItem('ems_active_admin');
      localStorage.removeItem('ems_ambulances');
      localStorage.removeItem('ems_requests');
      localStorage.removeItem('ems_audit_logs');
      localStorage.removeItem('ems_active_city');
      this.initDataStore();
      this.initUI();
      this.showToast('System reset to PulseCare demo state.', 'info');
    }
  }

  startAutoRefreshLoop() {
    setInterval(() => {
      this.renderPendingRequests();
      this.renderStats();
    }, 10000);
  }
}

// Global App Instance Initialization
document.addEventListener('DOMContentLoaded', () => {
  window.app = new EmergencyApp();
});
