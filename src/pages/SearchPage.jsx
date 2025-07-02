import React, { useState, useContext } from "react";
import tmdb from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import { WatchlistContext } from "../watchlist-context";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const { addToWatchlist } = useContext(WatchlistContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      console.log("🔍 Searching for:", query);
      console.log(
        "🔑 API Key:",
        import.meta.env.VITE_TMDB_API_KEY ? "Present" : "Missing"
      );

      const res = await tmdb.get("/search/movie", {
        params: { query },
      });

      console.log("📦 Full Response:", res);
      console.log("📦 Response Data:", res.data);
      console.log("📦 Response Status:", res.status);

      if (res.data && res.data.results && Array.isArray(res.data.results)) {
        console.log("✅ Found", res.data.results.length, "movies");
        setMovies(res.data.results);
      } else {
        console.error("❌ Unexpected response format:", res.data);
        setError("Unexpected response format from API");
        setMovies([]);
      }
    } catch (err) {
      console.error("🚫 Error fetching movies:", err);
      console.error("🚫 Error response:", err.response?.data);
      console.error("🚫 Error status:", err.response?.status);
      setError(`Failed to fetch movies: ${err.message}`);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWatchlist = (movie) => {
    console.log("Feedback handler called for:", movie.title, movie);
    addToWatchlist(movie);
    setFeedback(`${movie.title} added to watchlist!`);
    setTimeout(() => setFeedback(""), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Search Movies</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Enter movie title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </form>

      {/* Loading Indicator */}
      {loading && (
        <p className="text-center text-indigo-600">Loading movies...</p>
      )}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Feedback Message */}
      {feedback && (
        <div className="text-center text-green-600 mb-4">{feedback}</div>
      )}

      {/* Results Grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onAdd={handleAddToWatchlist}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No movies found. Try searching above.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
