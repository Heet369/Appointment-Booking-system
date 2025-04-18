# 🩺 Appointment Booking System

A full-stack **Doctor Appointment Booking System** built using the **MERN stack** – MongoDB, Express.js, React.js, and Node.js. This system allows users to book appointments with doctors, and includes an admin panel for managing doctors, appointments, and more.

## 📁 Project Structure

This repository consists of three main folders:

- `frontend` – User-facing client app (React)
- `admin` – Admin dashboard (React)
- `backend` – Server-side logic and APIs (Node.js + Express)

> ⚠️ `node_modules` folders are excluded from version control to reduce repository size. You must install the required dependencies manually as shown below.

## 🌐 Frontend Setup (User Interface)
Runs on: `http://localhost:5173`
### *Create the frontend folder*
> **`npm create vite@latest`**

### *Name the folder: frontend*
### *Select: React & JavaScript*

> **`cd frontend`**

### *Install dependencies*
> **`npm install`**
> **`npm install axios react-router-dom react-toastify`**

### *Start the frontend server*
> **`npm run dev`**

## 🔧 Backend Setup (Server & APIs)
Runs on: `http://localhost:4000`

### *Initialize Node.js project*
> **`npm init `**

### *A file named server.js (entry point) will be created*

### *Install backend dependencies*
> **`npm install express mongoose multer bcrypt cloudinary cors dotenv jsonwebtoken nodemon validator`**

### *Razorpay installation*
> **`npm install razorpay`**

### *Start the backend server*
> **`npm start`**
OR
> **`npm run server`**

## 🛠️ Admin Panel Setup
Runs on: `http://localhost:5174`

### *Create the admin folder*
> **`npm create vite@latest`**

### *Name the folder: admin*
### *Select: React & JavaScript*

> **`cd admin`**

### *Install dependencies*
> **`npm install`**
> **`npm install axios react-router-dom react-toastify`**

### *Start the admin panel*
> **`npm run dev`**

## 🙌 Acknowledgments
**Vite** – for blazing fast frontend development

**React Toastify** – for beautiful and customizable toast notifications

**Axios** – for easy HTTP requests

**React Router DOM** – for seamless routing in React apps

**Cloudinary** – for image storage and management

**MongoDB Atlas** – for hosting MongoDB in the cloud

**Razorpay** – for secure and simple payment gateway integration

**Express & Node.js** – for building the backend server

**Multer** – for handling file uploads
