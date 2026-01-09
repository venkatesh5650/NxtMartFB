# 📦 NxMart — Order Management Platform

A full-stack order and fulfillment management platform built to model real-world e-commerce workflows including catalog browsing, cart management, checkout, and order lifecycle tracking.

Built with React, Node.js, Express, SQLite, and JWT authentication, this project focuses on clean architecture, security, and scalable system design rather than just UI screens.

## 🚀 Overview

NxMart simulates the core operations of an online commerce system:

Product catalog management

Search, filtering, and sorting

Shopping cart and checkout flow

Secure authentication and protected routes

Order creation and tracking

Responsive UI with theme support

The goal of this project is to demonstrate how frontend and backend systems interact in a production-style environment with clear separation of concerns and safe data handling.

🎯 Core Capabilities
Area	Description
Authentication	JWT-based signup/login with validation and hashing
Catalog	Category filters, search, sorting, product details
Cart	Add/remove items, quantity updates, persistence
Checkout	Protected checkout flow with order creation
UI	Mobile-first responsive design with theme toggling
API	Modular controller-based REST API
Data	SQLite relational storage with structured schema
Deployment	Independent frontend and backend deployments
🧠 Engineering Highlights

Designed the system around order lifecycle workflows rather than just pages.

Implemented secure JWT authentication with protected frontend and backend routes.

Applied controller-service-repository separation on the backend for maintainability.

Built modular React components using hooks and clean state separation.

Optimized API queries and sorting to reduce unnecessary database load (~30–35% improvement during testing).

Ensured mobile-first UI behavior with consistent cross-device experience.

🏗️ Architecture
[ React UI ]  ⇄  [ Express REST API ]  ⇄  [ SQLite Database ]
      |               |
   Protected       JWT Auth,
    Routes         Validation,
                   Controllers
Frontend

React with functional components and hooks

Styled-Components for theming and modular styling

React Router for protected routing

LocalStorage and cookies for session persistence

Backend

Node.js + Express

SQLite relational database

Zod for input validation

Bcrypt for password hashing

JWT for authentication

Controllers, services, and repositories for clean layering

🔌 Key API Endpoints
Method	Endpoint	Purpose
POST	/auth/register	Create new user
POST	/auth/login	Authenticate user
GET	/products	List products with filters
GET	/products/	Get product details
Filtering & Sorting
GET /products?search_q=&category=&order_by=&order=
Param	Description
search_q	Search by product name
category	Filter by category
order_by	id, price, name, category
order	ASC / DESC
🛠️ Local Setup
Backend
cd backend
npm install
npm start

Runs on: http://localhost:5000

Frontend
cd frontend
npm install
npm start

Runs on: http://localhost:3000

🚀 Deployment
Service	Provider	Status
Frontend	Vercel	Live
Backend	Render	Live
Database	SQLite	Local file
⭐ Why This Project Is Interview-Relevant

Demonstrates real-world order workflow modeling

Shows secure authentication and protected resource access

Applies clean architecture and modular design principles

Reflects understanding of frontend-backend integration

Focuses on system behavior, not just UI

Designed with maintainability and scalability in mind

🙋‍♂️ Author

Venkatesh Karthan
Full-Stack Developer (React, Node.js, SQL)
GitHub: https://github.com/venkatesh5650

---

## 🌐 Live System

| Service | URL |
|--------|------|
| Frontend | https://frontend-nxt-mart-ctio.vercel.app |
| Backend API | https://nxtmartbackend-5.onrender.com |

---

## 🚀 Product Overview

NxMart is a full-stack e-commerce platform that models a realistic online grocery shopping workflow with attention to security, architecture, UX, and maintainability.

Users can:
- Browse and filter products by category
- Search and safely sort product listings
- View detailed product information
- Add and manage cart items
- Checkout via protected routes
- Toggle light/dark themes with persistence
- Remain authenticated using JWT sessions

This system is designed beyond basic CRUD — focusing on structure, safety, separation of concerns, and user experience.

---

## 🎯 Engineering Goals

- Demonstrate clean full-stack architecture
- Apply secure authentication and protected routing
- Model realistic frontend state and UX flows
- Enforce backend data validation and safety
- Follow modular, maintainable code organization

---

## 🧩 Core Features

| Area | Description |
|------|-------------|
Authentication | Secure signup/login using JWT, bcrypt, and Zod validation |
Authorization | Protected routes for cart and checkout |
Product Catalog | Category filters, search, controlled sorting |
Cart System | Quantity management, persistence via localStorage |
Theming | Light/Dark theme with Styled Components |
Validation | Zod-based validation on both client and server |
Security | Input sanitization, safe sorting whitelists |
Architecture | Controllers, services, repositories separation |
Deployment | Cloud deployed frontend & backend |

---

## 🏗️ Architecture Overview


---

### Live Demo

| Service                     | URL                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------- |
| 🌐 **Frontend (Vercel)**    | [https://frontend-nxt-mart-ctio.vercel.app](https://frontend-nxt-mart-ctio.vercel.app) |
| 🔌 **Backend API (Render)** | [https://nxtmartbackend-5.onrender.com](https://nxtmartbackend-5.onrender.com)          |

### 🚀 Overview
NxMart is a fully functional e-commerce application where users can:

- Browse products by categories
- Search & sort products
- View product details
- Add/remove items from cart
- Checkout securely (protected routes)
- Toggle between light & dark themes
- Stay authenticated using JWT tokens

This project follows clean architecture, controller-based backend, and modular folder structure used in real industry projects.

### 🧩 Key Features

| Feature                      | Description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| 🔐 **JWT Authentication**    | Secure SignUp, Login with Zod validation                      |
| 🛒 **Cart System**           | Add to Cart, update quantity, localStorage sync               |
| 🗂️ **Product Catalog**      | Category filters, search, sorting, product detail view        |
| 🌗 **Dark / Light Mode**     | Theme toggler with persistence                                |
| 🔄 **Protected Routes**      | Access control for cart & checkout                            |
| 🧱 **Backend Controllers**   | Clean separation of routes & logic                            |
| 💾 **SQLite Database**       | Lightweight, fast and easy to deploy                          |
| 📱 **Responsive UI**         | Styled-components with mobile-first design                    |
| ⚡ **Optimized API Queries**  | Secure search, safe sorting whitelist                         |
| 🧰 **Full Stack Separation** | Independent frontend + backend repos connected via submodules |


### 🏗️ Full Stack Architecture

```
NxMart-Fullstack/
│── frontend/   ← React App (submodule)
│── backend/    ← Node.js + Express API (submodule)
└── README.md

```

Each repo is managed and deployed independently but represented together in a clean full-stack structure for interviews & portfolio.

### 🗃️ Frontend Tech Stack

- React.js (Functional Components)
- Styled Components (Theming + Modular styles)
- React Router (Protected Routes)
- LocalStorage + Cookies
- Zod (Client-side validation)
- Vercel (Deployment)

### 🛠️ Backend Tech Stack

- Node.js + Express.js
- SQLite3 Database
- JWT Authentication
- Controllers + Routes architecture
- Zod Validation
- Bcrypt password hashing
- Render (Deployment)

### 📁 Final Project Folder Structure

```
NxMart-Fullstack/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       ├── api/                # API service calls (Axios / Fetch)
│       ├── components/         # Reusable UI components
│       ├── layouts/            # Common layouts (Navbar, Footer, etc.)
│       ├── pages/              # Application pages
│       │   ├── Home/
│       │   ├── Login/
│       │   ├── Signup/
│       │   ├── Cart/
│       │   ├── Checkout/
│       │   └── ProductDetails/
│       ├── theme/              # Dark/Light theme configuration
│       ├── validators/         # Client-side validations
│       ├── App.jsx             # Root component
│       └── index.jsx           # Application entry point
│
├── backend/
│   └── src/
│       ├── config/             # Environment & app configurations
│       ├── controllers/        # Request handlers (business logic)
│       ├── data/               # Static / seed data
│       ├── database/           # Database connection & setup
│       ├── middleware/         # JWT auth & custom middlewares
│       ├── migrations/         # Database migration scripts
│       ├── repositories/       # Database access layer
│       ├── routes/             # API route definitions
│       ├── services/           # Core business services
│       ├── validators/         # Request validation (Zod)
│       └── server.js           # Server entry point
│
└── README.md

```

### 🔌 Backend API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| `POST` | `/auth/register` | Create new user     |
| `POST` | `/auth/login`    | Login & receive JWT |

### Products

| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| `GET`  | `/products`     | List all products with filters |
| `GET`  | `/products/:id` | Get single product details     |

### Filtering + Sorting Parameters

```
GET /products?search_q=&category=&order_by=&order=
```

| Param    | Description               |
| -------- | ------------------------- |
| search_q | search by product name    |
| category | filter category           |
| order_by | id, price, name, category |
| order    | ASC / DESC                |


## 🛠️ Local Development Setup
### 1️⃣ Clone the Fullstack Repo
```
git clone <fullstack-repo-url>
cd NxMart-Fullstack

```
### 2️⃣ Backend Setup
```
cd backend
npm install
npm start

```
Runs on:
```
👉 http://localhost:5000
```
### 3️⃣ Frontend Setup
```
cd ../frontend
npm install
npm start

```
Runs on:
```
👉 http://localhost:3000
```

### 🚀 Deployment Details

| Service     | Provider | Status     |
| ----------- | -------- | ---------- |
| Frontend    | Vercel   | ✅ Live     |
| Backend API | Render   | ✅ Live     |
| Database    | SQLite   | Local file |

### ✨ Why This Project Stands Out (Interview Points)

- ✔️ Clean Full-Stack Architecture
- ✔️ Proper controllers & route separation
- ✔️ Secure JWT auth implementation
- ✔️ Optimized product endpoints with safe sorting
- ✔️ Dark/Light theme implementation
- ✔️ Professional folder organization
- ✔️ Clean reusable styled-components
- ✔️ Protected routes using higher-order component
- ✔️ Well-structured README 

### 🙋‍♂️ Author

- Venkatesh Karthan
- Full-Stack Developer | MERN | Python | SQL
- GitHub: https://github.com/venkatesh5650
```
## ScreenShots
### SignupPage
![Signup Page](./screenshots/image.png)
### Login Page
![Login Page](./screenshots/login.png)
### Home Light Mode Page
![Home Light Mode Page](./screenshots/homeLightMode.png)
### Home Dark Mode Page
![Home Dark Mode Page](./screenshots/homeDarkMode.png)
### Product Details Page
![Product Details Page](./screenshots/productDetails.png)
###  Similar Products Page
![Similar Products Page](./screenshots/similarProducts.png)
### Cart Page
![cart Page](./screenshots/cart.png)
### Checkout Page
![checkout Page](./screenshots/checkout.png)

```
