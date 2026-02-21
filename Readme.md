# 💳 Payment App

### 🚀 Full-Stack Digital Wallet (MERN + TypeScript)

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwindcss)
![Node](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-000000?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Overview

A modern **digital wallet and payment system** built using the MERN stack with **TypeScript** for type safety and scalability.

This application allows users to:

- 🔐 Register & Login securely
- 💸 Send and receive money
- 🏦 Manage wallet balance

The backend is built using **Node.js + Express + TypeScript**, ensuring better code maintainability and safety.

---

## 🖥️ Tech Stack

### 🎨 Frontend

- React.js
- TypeScript
- Tailwind CSS
- Axios
- React Router DOM

### ⚙️ Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt Password Hashing

---

## ✨ Features

- 🔐 JWT-based Authentication
- 💰 Secure Money Transfers
- 🏦 Wallet Balance System
- 📜 Transaction History
- 🛡 Protected API Routes
- 📱 Fully Responsive UI
- 🧠 Type-Safe Backend (TypeScript)

---

## 📂 Project Structure

```bash
payment-app/
│
├── backend/
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   ├── db.ts            # MongoDB connection setup
│   │   ├── middlewares.ts   # Auth & error middlewares
│   │   └── index.ts         # Entry point of the backend
│   ├── tsconfig.json        # TypeScript configuration
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   └── App.tsx          # Main App component
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/RohanSilwal1/Payment-Site
cd Payment-Site
```

---

## 🔹 Backend Setup (TypeScript)

```bash
cd backend
npm install
```

Create `.env` file:

```env
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run in Development Mode

```bash
npm run dev
```

### Build TypeScript

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

Backend runs at:

```
http://localhost:3000
```

---

## 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔐 API Endpoints

### Auth

- `POST /api/v1/signup`
- `POST /api/v1/login`

### Transactions

- `POST /api/account/transfer`
- `GET /api/account/balance`

---

## 🛡 Security

- JWT authentication
- Middleware route protection
- Environment variables configuration
- Type-safe request/response handling

---

## 🚀 Future Improvements

- 💳 Api Integration with other wallet
- 📊 Admin Dashboard
- 📲 Push Notifications
- 🌍 Multi-Currency Support
- 🔔 Email Notifications

---
