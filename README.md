# EliteVoltTech 🛒⚡

**EliteVoltTech** is a full-stack E-Commerce platform built with the MERN stack (MongoDB, Express, React, Node.js).  
It includes user authentication, product management, shopping cart, and order processing functionalities.

---

## 🚀 Features

✅ User Registration & Login (JWT Authentication)  
✅ Product Browse, Search & Filter  
✅ Shopping Cart & Checkout Flow  
✅ Order Placement & Order History  
✅ Admin Product & Order Management  
✅ Responsive Design using React Bootstrap  
✅ State Management with Redux  
✅ Payments Integration (e.g. PayPal, Stripe - optional)

---

## 📂 Project Structure

```
EliteVoltTech/
 ├── backend/        # Express server, API routes, DB models
 ├── frontend/       # React client
 ├── .env    # Example environment variables
 ├── package.json    # Main server package
 └── README.md       # Project documentation
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sathisk15/EliteVoltTech.git
cd EliteVoltTech
```

### 2️⃣ Install backend dependencies

```bash
npm install
```

### 3️⃣ Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

### 4️⃣ Setup environment variables

Create a `.env` file in the root directory based on `.env.example`.  
Add your MongoDB URI and JWT secret, for example:

```env
NODE_ENV = development
PORT = 5000
DB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret
```

Create a `.env` file in the frontend root directory based on `.env`.  
Add your MongoDB URI and JWT secret, for example:

```env
REACT_APP_API_PROD_URL = your prod URL
REACT_APP_API_LOCAL_URL = http://localhost:5000
```

---

## ▶️ Running the Project

In the project root, run:

```bash
npm run dev
```

This will:

- Start the backend server on **http://localhost:5000**
- Start the React client on **http://localhost:3000**

Both run concurrently.

---

## 📌 Useful Scripts

| Command          | What it does                             |
| ---------------- | ---------------------------------------- |
| `npm run server` | Run backend only (with nodemon)          |
| `npm run client` | Run frontend only                        |
| `npm run dev`    | Run both backend & frontend concurrently |

---

## ⚠️ Common Issues

- **MongoDB not connected:**  
  Make sure your `.env` has a valid `MONGO_URI`.

- **Deprecated Packages:**  
  Some packages show deprecation warnings. You can update them later for production, but they don’t block development.

- **Vulnerabilities:**  
  Run `npm audit fix` or `npm audit fix --force` if needed.

---

## ✅ To Do

- [ ] Improve security (Helmet, Rate Limiting)
- [ ] Add payment provider integration
- [ ] Add tests
- [ ] CI/CD setup

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Happy Coding!** 🚀✨
