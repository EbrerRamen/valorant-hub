# 🎯 Valorant Hub ([Live Demo](https://valorant-hub-production.up.railway.app/))

Valorant Hub is a web application that allows users to explore detailed information about **Valorant Agents, Gamemodes, Maps, and Weapons** through a clean and interactive interface. Built using **Node.js, Express, EJS, and Axios**, the project delivers structured Valorant game data in a user-friendly UI.

All game data is fetched from the non-official API:  
👉 https://valorant-api.com/

---

## 📸 Screenshots

![Home Screen](https://imgur.com/kHNIMw0.png)
![Agents](https://i.imgur.com/0OU0zDx.png)
![Agent Details](https://i.imgur.com/gfbHJOe.png)
![Game Modes](https://imgur.com/wZU4fEe.png)
![Maps](https://imgur.com/h7fXDcw.png)
![Weapons](https://imgur.com/laVSRPk.png)
![Weapon Details](https://imgur.com/2ypwW60.png)
![Skins](https://imgur.com/uSKR6Bu.png)
![Skin Details](https://imgur.com/2ThlNA7.png)
![Skin Level Video](https://imgur.com/6nj1vYz.png)
![Bundles](https://imgur.com/UVrHvzT.png)

---

## 🚀 Features

### 🧑‍🎤 Agents Explorer
- Browse all Valorant agents
- Filter agents by role (Duelist, Controller, Initiator, Sentinel)
- View detailed agent profiles including:
  - Agent image
  - Role + role description
  - Abilities with:
    - Ability name
    - Description
    - Default key bindings

---

### 🎮 Gamemodes
- View all available Valorant game modes
- Each gamemode includes:
  - Name
  - Description
  - Approximate match duration

---

### 🗺️ Maps
- Explore all Valorant maps
- View:
  - Map name
  - Site locations (A Site, B Site, etc.)

---

### 🔫 Weapons
- Browse complete weapon list
- Each weapon includes:
  - Weapon name
  - Type (Rifle, SMG, Sniper, Sidearm, etc.)
  - In-game cost

---

### 🔫 Weapon Details
- Deep-dive tactical dashboard for every weapon.
- Each weapon profile includes a high-quality 3D rendered hero image of the Default Skin.
- Granular Damage Profile highlighting Head, Body, and Leg damage across specific distances.
- Dedicated ADS (Aim Down Sights) metrics covering Zoom multiplier, fire rate, run speed, and 1st bullet accuracy.

---

### 🎨 Weapon Skins & Media Theater
- Cinematic showcase for all weapon cosmetics.
- Each skin profile includes a clean arsenal grid that filters out standard/placeholder skins.
- Color Variants (Chromas) featuring interactive color swatches.
- Evolution Upgrades (Levels) tracking VFX, animations, and Finisher upgrades.
- Custom tactical media player with seamless looping video previews and hover-to-listen audio.

---

## 🛠️ Tech Stack

- **Frontend**
  - HTML
  - CSS
  - Bootstrap
  - EJS (Embedded JavaScript Templates)

- **Backend**
  - Node.js
  - Express.js

- **Data Fetching**
  - Axios
  - https://valorant-api.com/

- **Deployment**
  - Railway

---

## 📁 Project Structure

valorant-hub/  
│  
├── public/ # Static assets (CSS, images)  
├── views/ # EJS templates  
│ ├── partials/  
│ ├── agents.ejs  
│ ├── agent-details.ejs  
│ ├── gamemodes.ejs  
│ ├── maps.ejs  
│ └── weapons.ejs  
├── index.js # Main server file  
├── package.json  
└── README.md  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone [https://github.com/your-username/valorant-hub.git](https://github.com/EbrerRamen/valorant-hub.git)
cd valorant-hub
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the project
```bash
node index.js
```

### 4️⃣ Open in browser
```bash
http://localhost:3000
```

---

## 🌐 Deployment

This project is deployed using Railway. Visit [Project Demo](https://valorant-hub-production.up.railway.app/)

---

## 👨‍💻 Author

Developed by Md. Abrar Rahman Shafin
A Valorant fan project built for learning full-stack web development.

---

📡 API Reference

This project uses data from:

[https://valorant-api.com/](https://valorant-api.com/)

---

