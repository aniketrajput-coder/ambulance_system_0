/**
 * PulseCare India - Shared Core Engine, Auth & Persistence Layer
 * Provides centralized state, authentication guards, and data syncing across pages.
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

// ADMIN DISPATCH OFFICERS WITH PASSWORDS
const DEFAULT_ADMINS = [
  {
    id: 'PULSE-DIR-101',
    password: 'pulse@101',
    name: 'Dr. Siddharth Kapoor',
    role: 'Medical Operations Director',
    badge: 'PULSE-CORP-101',
    shift: 'Shift Alpha (08:00 - 16:00)',
    avatar: 'SK',
    color: 'from-rose-600 to-red-600'
  },
  {
    id: 'PULSE-DISP-102',
    password: 'pulse@102',
    name: 'Rhea Sengupta',
    role: 'Senior Critical Care Dispatch Lead',
    badge: 'PULSE-CORP-102',
    shift: 'Shift Bravo (16:00 - 00:00)',
    avatar: 'RS',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'PULSE-OPS-103',
    password: 'pulse@103',
    name: 'Aditya Malhotra',
    role: 'National Fleet Logistics Supervisor',
    badge: 'PULSE-CORP-103',
    shift: 'Operations Command Oversight',
    avatar: 'AM',
    color: 'from-emerald-600 to-teal-600'
  }
];

// PRIVATE AMBULANCE FLEET
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

// INITIAL SAMPLE REQUESTS
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
    notes: 'Acute respiratory distress. PulseCare Mobile ICU requested with high-flow oxygen.',
    status: 'PENDING',
    requestedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    assignedAmbulanceId: null,
    assignedAmbulanceNo: null,
    assignedDriverName: null,
    assignedDriverPhone: null,
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
    notes: 'Substernal chest pressure. Cardiac critical protocol engaged.',
    status: 'DISPATCHED',
    requestedAt: new Date(Date.now() - 19 * 60 * 1000).toISOString(),
    assignedAmbulanceId: 'PULSE-AMB-05',
    assignedAmbulanceNo: 'MH-02-ER-8805',
    assignedDriverName: 'Farhan Merchant',
    assignedDriverPhone: '+91 98200 11223',
    assignedBy: {
      adminId: 'PULSE-DIR-101',
      adminName: 'Dr. Siddharth Kapoor',
      adminRole: 'Medical Operations Director',
      adminBadge: 'PULSE-CORP-101',
      assignedAt: new Date(Date.now() - 17 * 60 * 1000).toISOString(),
      notes: 'Deployed MH-02-ER-8805. ICU bed reserved at Lilavati.'
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

// CORE PULSECARE DATA & AUTH SERVICE
const PulseCare = {
  init() {
    if (!localStorage.getItem('pulsecare_admins')) {
      localStorage.setItem('pulsecare_admins', JSON.stringify(DEFAULT_ADMINS));
    }
    if (!localStorage.getItem('pulsecare_ambulances')) {
      localStorage.setItem('pulsecare_ambulances', JSON.stringify(DEFAULT_AMBULANCES));
    }
    if (!localStorage.getItem('pulsecare_requests')) {
      localStorage.setItem('pulsecare_requests', JSON.stringify(DEFAULT_REQUESTS));
    }
    if (!localStorage.getItem('pulsecare_city')) {
      localStorage.setItem('pulsecare_city', 'DELHI');
    }
    if (!localStorage.getItem('pulsecare_audit_logs')) {
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
      localStorage.setItem('pulsecare_audit_logs', JSON.stringify(initialLogs));
    }
  },

  // Auth Methods
  getAdmins() {
    this.init();
    return JSON.parse(localStorage.getItem('pulsecare_admins') || '[]');
  },

  login(adminId, password) {
    this.init();
    const admins = this.getAdmins();
    const found = admins.find(a => a.id.toUpperCase() === adminId.trim().toUpperCase());
    
    if (!found) {
      return { success: false, message: 'Officer ID not recognized.' };
    }

    if (found.password && found.password !== password) {
      return { success: false, message: 'Incorrect officer security password.' };
    }

    // Set Active Session
    sessionStorage.setItem('pulsecare_session', JSON.stringify(found));
    localStorage.setItem('pulsecare_active_admin', JSON.stringify(found));
    return { success: true, admin: found };
  },

  logout() {
    sessionStorage.removeItem('pulsecare_session');
    localStorage.removeItem('pulsecare_active_admin');
    window.location.href = 'login.html';
  },

  getCurrentAdmin() {
    const session = sessionStorage.getItem('pulsecare_session');
    if (session) {
      return JSON.parse(session);
    }
    const local = localStorage.getItem('pulsecare_active_admin');
    if (local) {
      return JSON.parse(local);
    }
    return null;
  },

  requireAdminAuth() {
    const admin = this.getCurrentAdmin();
    if (!admin) {
      window.location.href = 'login.html?reason=auth_required';
      return false;
    }
    return admin;
  },

  // State Getters & Setters
  getActiveCity() {
    return localStorage.getItem('pulsecare_city') || 'DELHI';
  },

  setActiveCity(cityKey) {
    localStorage.setItem('pulsecare_city', cityKey);
  },

  getAmbulances() {
    this.init();
    return JSON.parse(localStorage.getItem('pulsecare_ambulances') || '[]');
  },

  saveAmbulances(ambulances) {
    localStorage.setItem('pulsecare_ambulances', JSON.stringify(ambulances));
  },

  deleteAmbulance(ambulanceId) {
    const ambulances = this.getAmbulances();
    const amb = ambulances.find(a => a.id === ambulanceId);
    if (!amb) return false;

    const remaining = ambulances.filter(a => a.id !== ambulanceId);
    this.saveAmbulances(remaining);
    return true;
  },

  updateAmbulanceStatus(ambulanceId, newStatus) {
    const ambulances = this.getAmbulances();
    const amb = ambulances.find(a => a.id === ambulanceId);
    if (!amb) return false;

    amb.status = newStatus;
    if (newStatus === 'AVAILABLE') {
      const requests = this.getRequests();
      const linkedReq = requests.find(r => r.assignedAmbulanceId === ambulanceId && (r.status === 'DISPATCHED' || r.status === 'ON_SCENE'));
      if (linkedReq) {
        linkedReq.status = 'COMPLETED';
        this.saveRequests(requests);
      }
    }
    this.saveAmbulances(ambulances);
    return true;
  },

  getRequests() {
    this.init();
    return JSON.parse(localStorage.getItem('pulsecare_requests') || '[]');
  },

  saveRequests(requests) {
    localStorage.setItem('pulsecare_requests', JSON.stringify(requests));
  },

  getAuditLogs() {
    this.init();
    return JSON.parse(localStorage.getItem('pulsecare_audit_logs') || '[]');
  },

  saveAuditLogEntry(entry) {
    const logs = this.getAuditLogs();
    logs.unshift(entry);
    localStorage.setItem('pulsecare_audit_logs', JSON.stringify(logs));
  },

  // Audio Alerts (Web Audio API)
  playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const playTone = (freq, duration, delay) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + duration);
        }, delay);
      };
      playTone(523.25, 0.15, 0);
      playTone(659.25, 0.15, 120);
      playTone(783.99, 0.25, 240);
      playTone(1046.50, 0.35, 360);
    } catch (e) {}
  },

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
    requestAnimationFrame(() => toast.classList.remove('translate-y-4', 'opacity-0'));

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// Initialize on Load
PulseCare.init();

/**
 * PulseCare Weather Telemetry & Live Radar Service
 * Integrates Open-Meteo Weather API & RainViewer Live Precipitation Radar
 */
const PulseCareWeather = {
  cache: {},
  cachedRadarUrl: null,
  radarUrlTimestamp: 0,

  async getWeather(lat, lng, cityCode = 'DELHI') {
    if (!lat || !lng) {
      const cityData = CITIES[cityCode] || CITIES.DELHI;
      lat = cityData.center[0];
      lng = cityData.center[1];
    }

    const key = `${parseFloat(lat).toFixed(2)}_${parseFloat(lng).toFixed(2)}`;
    const now = Date.now();
    if (this.cache[key] && (now - this.cache[key].timestamp < 600000)) {
      return this.cache[key].data;
    }

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Weather fetch status: ${res.status}`);
      const data = await res.json();
      const cur = data.current;
      
      const parsed = this.parseWmoCode(
        cur.weather_code,
        cur.temperature_2m,
        cur.relative_humidity_2m,
        cur.wind_speed_10m,
        cur.precipitation
      );

      this.cache[key] = {
        timestamp: now,
        data: parsed
      };
      return parsed;
    } catch (err) {
      console.warn('Weather API offline/blocked. Using regional fallback:', err.message);
      return this.getFallbackWeather(cityCode);
    }
  },

  parseWmoCode(code, temp, humidity, windSpeed, precipitation = 0) {
    let condition = 'Clear Sky';
    let icon = '☀️';
    let roadStatus = 'Dry • Optimal Emergency Speeds';
    let roadBadgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    let etaDelayMinutes = 0;
    let hazardLevel = 'OPTIMAL';

    if (code === 0) {
      condition = 'Clear Skies';
      icon = '☀️';
      roadStatus = 'Dry Asphalt • Optimal Emergency Speed';
    } else if (code === 1 || code === 2) {
      condition = code === 1 ? 'Mainly Clear' : 'Partly Cloudy';
      icon = code === 1 ? '🌤️' : '⛅';
      roadStatus = 'Clear Visibility • Normal Transit';
    } else if (code === 3) {
      condition = 'Overcast';
      icon = '☁️';
      roadStatus = 'Dry Roads • Standard Speeds';
    } else if (code === 45 || code === 48) {
      condition = 'Dense Fog / Mist';
      icon = '🌫️';
      roadStatus = 'Low Visibility (<200m) • Speed Capped';
      roadBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      etaDelayMinutes = 4;
      hazardLevel = 'CAUTION';
    } else if (code >= 51 && code <= 55) {
      condition = 'Light Drizzle';
      icon = '🌦️';
      roadStatus = 'Slick Roads • Braking Caution';
      roadBadgeClass = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      etaDelayMinutes = 2;
      hazardLevel = 'MODERATE';
    } else if (code >= 61 && code <= 65) {
      condition = code === 65 ? 'Heavy Downpour' : 'Moderate Rain';
      icon = '🌧️';
      roadStatus = code === 65 ? 'Waterlogged Lanes • ETA Delay' : 'Wet Roads • Braking Distance +30%';
      roadBadgeClass = code === 65 ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      etaDelayMinutes = code === 65 ? 5 : 3;
      hazardLevel = code === 65 ? 'HIGH' : 'MODERATE';
    } else if (code >= 80 && code <= 82) {
      condition = 'Rain Showers';
      icon = '🌧️';
      roadStatus = 'Intermittent Rain • Wet Surface';
      roadBadgeClass = 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      etaDelayMinutes = 3;
      hazardLevel = 'MODERATE';
    } else if (code >= 95) {
      condition = 'Severe Thunderstorm';
      icon = '⛈️';
      roadStatus = 'Severe Storm • Underpass Flood Hazard';
      roadBadgeClass = 'bg-rose-500/25 text-rose-300 border-rose-500/50';
      etaDelayMinutes = 6;
      hazardLevel = 'SEVERE';
    }

    return {
      temp: Math.round(temp),
      humidity: Math.round(humidity),
      windSpeed: Math.round(windSpeed),
      precipitation: precipitation || 0,
      code,
      condition,
      icon,
      roadStatus,
      roadBadgeClass,
      etaDelayMinutes,
      hazardLevel
    };
  },

  getFallbackWeather(cityCode = 'DELHI') {
    const defaults = {
      DELHI: { temp: 29, humidity: 62, windSpeed: 10, precipitation: 0, code: 2, condition: 'Partly Cloudy', icon: '⛅', roadStatus: 'Dry • Optimal Emergency Speeds', roadBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', etaDelayMinutes: 0, hazardLevel: 'OPTIMAL' },
      BLR: { temp: 24, humidity: 68, windSpeed: 12, precipitation: 0, code: 1, condition: 'Mild Breeze', icon: '🌤️', roadStatus: 'Optimal Urban Transit', roadBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', etaDelayMinutes: 0, hazardLevel: 'OPTIMAL' },
      MUM: { temp: 28, humidity: 82, windSpeed: 18, precipitation: 0, code: 2, condition: 'Coastal Humid', icon: '⛅', roadStatus: 'Normal Coastal Transit', roadBadgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30', etaDelayMinutes: 0, hazardLevel: 'OPTIMAL' },
      HYD: { temp: 28, humidity: 65, windSpeed: 11, precipitation: 0, code: 1, condition: 'Pleasant & Clear', icon: '🌤️', roadStatus: 'Dry • Optimal Speeds', roadBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', etaDelayMinutes: 0, hazardLevel: 'OPTIMAL' },
      CCU: { temp: 30, humidity: 76, windSpeed: 9, precipitation: 0, code: 2, condition: 'Hazy Sunshine', icon: '🌤️', roadStatus: 'Dry • Optimal Speeds', roadBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', etaDelayMinutes: 0, hazardLevel: 'OPTIMAL' }
    };
    return defaults[cityCode] || defaults.DELHI;
  },

  async getRadarTileUrl() {
    const now = Date.now();
    if (this.cachedRadarUrl && (now - this.radarUrlTimestamp < 300000)) {
      return this.cachedRadarUrl;
    }
    try {
      const res = await fetch('https://api.rainviewer.com/public/weather-maps.json');
      if (res.ok) {
        const data = await res.json();
        if (data.radar && data.radar.past && data.radar.past.length > 0) {
          const latest = data.radar.past[data.radar.past.length - 1];
          this.cachedRadarUrl = `https://tilecache.rainviewer.com${latest.path}/256/{z}/{x}/{y}/2/1_1.png`;
          this.radarUrlTimestamp = now;
          return this.cachedRadarUrl;
        }
      }
    } catch (e) {
      console.warn('RainViewer radar timestamp error:', e.message);
    }
    return 'https://tilecache.rainviewer.com/v2/radar/2d0bddd97f78/256/{z}/{x}/{y}/2/1_1.png';
  }
};
