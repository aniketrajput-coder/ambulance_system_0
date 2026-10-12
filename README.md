
---

## 🛠️ Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Leaflet.js, Web Audio API |
| **Backend** | Python 3 (`http.server`, `sqlite3`, zero external dependencies) / Node.js (`Express.js`, `cors`) |
| **Database** | SQLite 3 (Relational Schema with Foreign Keys & Indexes) |
| **External APIs** | Open-Meteo Meteorological API, RainViewer Global Radar Tile API, HTML5 Geolocation API |
| **Deployment** | Netlify Drop (Frontend), Localhost / Cloud VM (Backend) |

---

## 🗄️ Database Schema

### Tables & Relationships

1. **`officers`**: Certified medical dispatch officers (`id`, `name`, `role`, `badge`, `shift`, `avatar`, `color`).
2. **`ambulances`**: Vehicle fleet inventory (`id`, `vehicle_no`, `type`, `city`, `driver_name`, `driver_phone`, `status`, `base_station`, `current_lat`, `current_lng`, `oxygen_level`, `battery_pct`, `total_dispatches`).
3. **`bookings`**: Emergency requests (`id`, `patient_name`, `patient_phone`, `city`, `emergency_type`, `severity`, `vitals`, `pickup_location`, `destination_hospital`, `status`, `assigned_ambulance_id`, `assigned_by`).
4. **`hospitals`**: Tertiary hospital network with ICU bed & oxygen monitor (`id`, `name`, `type`, `city`, `icu_beds`, `vent_beds`, `lat`, `lng`).
5. **`weather_logs`**: Cached atmospheric metrics & road safety transit advisories.

---

## 🔌 REST API Endpoints

The backend exposes a JSON REST API on port `5000`:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check & database status |
| `POST` | `/api/auth/login` | Authenticate officer credentials & return session token |
| `GET` | `/api/ambulances` | List fleet inventory (supports `?city=` and `?status=`) |
| `POST` | `/api/ambulances` | Register a new ambulance unit |
| `PUT` | `/api/ambulances/:id` | Update ambulance status, equipment, driver, or location |
| `DELETE` | `/api/ambulances/:id` | Remove an ambulance from the active fleet |
| `GET` | `/api/bookings` | List all patient emergency booking requests |
| `POST` | `/api/bookings` | Submit a new booking or 1-Click SOS emergency |
| `GET` | `/api/bookings/:id` | Retrieve single booking telemetry & assigned crew |
| `PUT` | `/api/bookings/:id/assign` | Assign ambulance & dispatch officer to an incident |
| `PUT` | `/api/bookings/:id/status` | Update dispatch lifecycle status |
| `GET` | `/api/hospitals` | Query hospital ICU bed and oxygen availability |
| `GET` | `/api/stats` | High-level fleet availability & operational metrics |

---

## 🔑 Demo Credentials

Authenticate on [`login.html`](frontend/login.html):

| Officer Name | Officer / Admin ID | Password | Role & Designation |
| :--- | :--- | :--- | :--- |
| **Dr. Siddharth Kapoor** | `PULSE-DIR-101` | `pulse@101` | Medical Operations Director |
| **Rhea Sengupta** | `PULSE-DISP-102` | `pulse@102` | Senior Critical Care Dispatch Lead |
| **Aditya Malhotra** | `PULSE-OPS-103` | `pulse@103` | National Fleet Logistics Supervisor |
