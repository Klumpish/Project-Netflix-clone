# 🎬 Netflix Clone

A Netflix-style movie browsing web app built using **React** and **Vite**. It uses the **TMDB API** to fetch movie data, **Firebase** for user authentication, and **Firestore** to store user information.

This project helped me learn more about integrating APIs, managing authentication, routing in React, and deploying fullstack front-end apps.

---

## 🚀 Features

- 🔐 User authentication with Firebase
- 📄 User profile data stored in Firestore
- 🎞️ Movie data fetched from [TMDB API](https://developer.themoviedb.org/)
- 🔍 Search and browse movies
- 📱 Responsive design
- 🚨 Toast notifications with `react-toastify`
- 🌐 Hosted on Vercel

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
  - Auth
  - Firestore
- [TMDB API](https://developer.themoviedb.org/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Vercel](https://vercel.com/)
- JavaScript, CSS

---

## 📦 Setup Instructions

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root:
   ```bash
   VITE_TMDB_TOKEN=your_tmdb_token_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
