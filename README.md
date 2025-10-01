# 🎓 College Dashboard with Advanced Filters

## 🌟 Project Overview

This is a **Full-Stack College Dashboard** application designed to help users efficiently browse, filter, and manage a list of colleges. It provides a clean, responsive interface for searching by name, filtering by location, course, and fee range, as well as allowing users to save their favorite colleges and submit/view reviews.

The application adheres to the required standards for a modern web application, featuring a dedicated REST API for data persistence and real-time interactions.

## 🚀 Live Demo

| Component | Status | Link |
| :--- | :--- | :--- |
| **Frontend** | Deployed (Vercel/Netlify) | `[INSERT FRONTEND DEPLOYMENT LINK HERE]` |
| **Backend API** | Deployed (Render/Heroku) | `[INSERT BACKEND DEPLOYMENT LINK HERE]` |
| **Demo Video** | Hosted (YouTube/Loom) | `[INSERT DEMO VIDEO LINK HERE]` |

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** **React.js** (Functional Components and Hooks)
* **Styling:** **Tailwind CSS** (for responsive and utility-first styling)
* **State Management (Optional):** Context API / Redux Toolkit
* **HTTP Client:** **Axios** / Fetch API

### Backend
* **Runtime:** **Node.js**
* **Framework:** **Express.js**
* **Database:** **MongoDB** (or specify: PostgreSQL/MySQL)
* **ORM/ODM:** **Mongoose** (for MongoDB)

### Deployment (Bonus)
* **Frontend:** Vercel / Netlify
* **Backend:** Render / Heroku

---

## ✨ Features Implemented

### Core Functionality
* **Full-Stack CRUD:** Persistent storage and retrieval of colleges, reviews, and favorites.
* **Dynamic Filtering:** Combine filters for **Location**, **Course**, and **Fee Range** simultaneously.
* **Real-time Search:** Search colleges dynamically by **Name**.
* **Sorting:** Sort colleges by **Fee** (Low to High / High to Low).
* **Favorites:** Users can **add** and **remove** colleges from their Favorites list, stored in the DB.
* **Reviews:** Dedicated page to **submit** and **view** user-generated reviews.

### UI & UX Enhancements
* **Responsive Design:** Fully functional and visually appealing on both desktop and mobile devices.
* **Dark Mode Toggle:** Switch between Light and Dark themes for better user experience.
* **Error Handling:** Friendly messages displayed when no colleges match the current search/filter criteria.
* **Clean Navigation:** Dedicated routes for Home, Colleges, Reviews, Favorites, and Logout.

---

## ⚙️ Backend API Endpoints

The Express.js backend exposes the following RESTful endpoints:

| Method | Endpoint | Description | Query Parameters (Filter/Sort) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/colleges` | Fetch all colleges | `location, course, minFee, maxFee, search, sortByFee` |
| `POST` | `/api/reviews` | Submit a new review | - |
| `GET` | `/api/reviews` | Fetch all submitted reviews | - |
| `POST` | `/api/favorites` | Add a college to favorites | Requires College ID in request body |
| `GET` | `/api/favorites` | Fetch all of the user's favorites | - |
| `DELETE` | `/api/favorites/:id` | Remove a college from favorites by its ID | - |

---

## 💻 Steps to Run Locally

### Prerequisites
* Node.js (v14+)
* npm or yarn
* A running instance of MongoDB (Local or Atlas)

### 1. Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [YOUR GITHUB REPO LINK]
    cd college-dashboard-backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
3.  **Configure environment variables:**
    Create a `.env` file in the root directory and add your database connection string and port:
    ```
    PORT=5000
    MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"
    ```
4.  **Seed the database:**
    The backend includes a script (or runs on initial connection) to seed the `colleges` collection with the sample dataset.
5.  **Start the server:**
    ```bash
    npm start
    ```
    The API should now be running on `http://localhost:5000`.

### 2. Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../college-dashboard-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
3.  **Configure API URL:**
    Create a `.env` file in the frontend root and set the API base URL:
    ```
    REACT_APP_API_URL=http://localhost:5000/api
    ```
    *Note: If testing with the deployed backend, use the hosted API link here.*
4.  **Start the client:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.
