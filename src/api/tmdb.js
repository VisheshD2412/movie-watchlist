import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

tmdb.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  config.params = {
    ...config.params,
    api_key: apiKey,
  };

  // Log the request for debugging
  console.log("🌐 Making request to:", config.baseURL + config.url);
  console.log("🔑 With params:", config.params);

  return config;
});

export default tmdb;
