# Movie Watchlist App

A modern, responsive web application to search for movies and manage your personal watchlist. Built with React, TailwindCSS, and the TMDB API.

---

## 🚀 Project Overview

- **Purpose:** Search for movies, view details, and add/remove them from your watchlist.
- **Tech Stack:** React (Vite), TailwindCSS, Axios, TMDB API, React Context, localStorage
- **Live Demo:** _[Add link after deployment]_

---

## ✨ Features

- 🔍 **Movie Search** via TMDB API
- ⭐ **Add/Remove from Watchlist** (persists in localStorage)
- 📱 **Responsive Design** (mobile, tablet, desktop)
- ⚡ **Instant UI Updates** with React Context
- 🚦 **Robust Error Handling** and loading states

---
🌐LIVE LINK: https://visheshd2412.github.io/movie-watchlist/
## 📁 Folder Structure

```
movie-watchlist-app/
│
├── public/
├── src/
│   ├── api/              # Axios TMDB API setup
│   │   └── tmdb.js
│   ├── assets/           # Static assets
│   ├── components/       # UI components (MovieCard, Navbar)
│   ├── pages/            # Main pages (SearchPage, WatchlistPage)
│   ├── utils/            # Utility functions (localStorage.js)
│   ├── App.jsx           # Main app layout and routing
│   ├── watchlist-context.jsx # Global watchlist state
│   ├── main.jsx          # App entry point
│   └── index.css         # TailwindCSS imports
├── .env                  # API key (not committed)
├── package.json
└── tailwind.config.js
```

---

## 🛠️ Setup & Development

1. **Clone the repo:**
   ```bash
   git clone https://github.com/VisheshD2412/movie-watchlist.git
   cd movie-watchlist-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Add your TMDB API key:**
   - Create a `.env` file in the root:
     ```
     VITE_TMDB_API_KEY=your_tmdb_api_key_here
     ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

---

## 🧩 Key Implementation Details

- **TMDB API Integration:** Axios instance with interceptors for API key.
- **State Management:** React Context for global watchlist, useState/useEffect for local state.
- **Persistence:** Watchlist is synced to localStorage.
- **Responsive UI:** TailwindCSS utility classes and aspect-ratio utilities.
- **Error Handling:** User-friendly messages for API and network errors.

---

## 🐞 Debugging & Troubleshooting

- Console logging and React DevTools for state inspection.
- Network tab for API call verification.
- localStorage inspection in browser DevTools.

---

## 📚 Lessons Learned

- React lifecycle and state management best practices
- Debugging real-world async and UI issues
- Building scalable, maintainable React apps

---

## 📦 Deployment

- Push to GitHub: `git push origin main`
- (Optional) Deploy to Vercel, Netlify, or GitHub Pages for a live demo.

---

## 📄 License

MIT
