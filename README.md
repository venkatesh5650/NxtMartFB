# 🛍️ NxMart — Order Management Platform

A modern, secure, and modular Order Management Platform built with React, Node.js, Express, SQLite, and JWT — designed to model real-world catalog, cart, checkout, and order fulfillment workflows with role-based control and auditability.

Built with React, Node.js, Express, SQLite, and JWT authentication, this project focuses on clean architecture, security, and scalable system design rather than just UI screens.

## 🚀 Overview

NxMart is a full-stack Order Management Platform that models the core business workflows of an e-commerce system — from product discovery to checkout, order creation, fulfillment updates, and order history.

Unlike a basic CRUD shop, this system focuses on:

- Clean separation of frontend, backend, and data layers
- Secure authentication and role-based authorization
- Realistic order lifecycle and admin operations
- Modular architecture suitable for extension and scaling
- Interview-ready system explanation and structure

The project demonstrates how modern engineering teams design, secure, and structure full-stack business systems.


## 🔄 Core Business Workflows

### User Flow
1. Browse products with filtering and search.
2. Add products to cart and manage quantities.
3. Checkout via protected routes (authentication required).
4. Order is created securely through backend API.
5. User can view order details and order history.

### Admin Flow
1. View all orders in the system.
2. View order details and history.
3. Update order status (processing, shipped, delivered, etc.).
4. Enable or disable users and products.
5. Maintain system integrity through role-restricted APIs.

## 🔐 Role-Based Access Control (RBAC)

| Role  | Capabilities |
|--------|--------------|
User   | Browse, cart, checkout, view own orders and history |
Admin  | Manage products, view all orders, update order status, manage users |

RBAC is enforced using middleware (`auth`, `requireRole`) on the backend and protected routes on the frontend.


## 🧩 Key Engineering Features

| Area | Implementation |
|------|----------------|
Authentication | JWT-based login, bcrypt password hashing |
Authorization | Role-based access using middleware |
Order Lifecycle | Catalog → Cart → Checkout → Order → Status updates |
Frontend Architecture | Modular React components with hooks |
Backend Architecture | Controllers, services, repositories layered structure |
Validation | Zod used for request and input validation |
Security | Protected routes, input sanitization, safe sorting whitelist |
Persistence | SQLite database with migrations |
Deployment | Frontend on Vercel, Backend on Render |
Responsiveness | Mobile-first UI using Styled Components |


## 🏗️ System Architecture
```
[ React Frontend ] ⇄ [ Express REST API ] ⇄ [ SQLite Database ]
                     │
                     ├─ JWT Authentication
                     ├─ Role-Based Authorization
                     ├─ Validation & Sanitization
                     └─ Order & User Controllers
```

## 🛠️ Backend Structure
```
backend/src/
├── config/         # Environment & configuration
├── controllers/    # Business logic handlers
├── database/       # DB connection & setup
├── middleware/     # Auth & RBAC middlewares
├── migrations/     # Schema evolution
├── repositories/   # Data access layer
├── routes/         # API route definitions
├── services/       # Core business services
├── validators/     # Request validation
└── server.js       # App entry point
```
## 🎨 Frontend Structure
```
frontend/src/
├── api/           # API communication layer
├── components/    # Reusable UI components
├── context/       # Auth & app state context
├── layouts/       # Shared layouts
├── pages/         # Application pages
├── theme/         # Light/Dark themes
├── validators/    # Client-side validation
└── App.js         # App root
```
## 🔌 API Design Highlights

### Public
GET    /products
GET    /products/:id

### Auth
POST   /auth/register
POST   /auth/login

### User Orders
POST   /orders
GET    /orders
GET    /orders/:id
GET    /orders/:id/history

### Admin
GET    /admin/orders
PUT    /admin/orders/:id/status
GET    /admin/users
PATCH  /admin/users/:id/toggle

## ✨ Why This Project Stands Out

✔️ Models realistic order workflows, not just CRUD  
✔️ Demonstrates layered backend architecture  
✔️ Uses secure JWT authentication and RBAC  
✔️ Separates concerns cleanly across frontend and backend  
✔️ Implements real admin and user flows  
✔️ Shows understanding of business logic, not just UI  
✔️ Written with interview explanation and clarity in mind  







## 🏗️ Architecture

The platform follows a layered architecture:

Frontend:
- React functional components with hooks
- Styled Components for modular and theme-aware styling
- Protected routes enforced through routing guards

Backend:
- Express REST API with controllers and services
- Repository layer for database access
- JWT-based authentication middleware
- Input validation at API boundaries

This separation improves testability, scalability, and maintainability.


## 🎨 Frontend Engineering Highlights

- State managed through React hooks and context where appropriate
- Centralized API layer for consistent backend communication
- Protected routes for cart and checkout access
- Graceful handling of loading, error, and empty states
- Theming system implemented with Styled Components

## 🛠️ Backend Engineering Highlights

- RESTful APIs following resource-based routing
- Controllers separated from business logic and data access
- Secure password storage using bcrypt
- JWT authentication with middleware enforcement
- Query parameter whitelisting for safe sorting and filtering

## 🙋‍♂️ Author

**Venkatesh Karthan**  
Full-Stack Developer | React | Node.js | SQL  

This project represents my hands-on learning in building secure, modular, and scalable web systems.


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



## 🎯 Engineering Goals

- Demonstrate clean full-stack architecture
- Apply secure authentication and protected routing
- Model realistic frontend state and UX flows
- Enforce backend data validation and safety
- Follow modular, maintainable code organization

---


---



---

### Live Demo

| Service                     | URL                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------- |
| 🌐 **Frontend (Vercel)**    | [https://frontend-nxt-mart-ctio.vercel.app](https://frontend-nxt-mart-ctio.vercel.app) |
| 🔌 **Backend API (Render)** | [https://nxtmartbackend-5.onrender.com](https://nxtmartbackend-5.onrender.com)          |





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

## 🛠️ Local Development Setup
### 1️⃣ Clone the Fullstack Repo
```
git clone <fullstack-repo-url>
cd NxMart-Fullstack

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
