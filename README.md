# 🎯 Valorant Hub ([Live Demo](https://valorant-hub-production.up.railway.app/))

Valorant Hub is a web application that allows users to explore detailed information about **Valorant Agents, Gamemodes, Maps, and Weapons** through a clean and interactive interface. Built using **Node.js, Express, EJS, and Axios**, the project delivers structured Valorant game data in a user-friendly UI.

All game data is fetched from the non-official API:  
👉 https://valorant-api.com/

---

## 📸 Screenshots

![Home Screen](https://i.imgur.com/VzoiSOc.png)
![Agents](https://i.imgur.com/0OU0zDx.png)
![Agent Details](https://i.imgur.com/gfbHJOe.png)
![Game Modes](https://i.imgur.com/6qjKxgE.png)
![Maps](https://i.imgur.com/23pFqbh.png)
![Weapons](https://i.imgur.com/4k7kaZU.png)

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

