import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { WatchlistContext } from "../watchlist-context";

const WatchlistPage = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  const handleRemove = (id) => {
    removeFromWatchlist(id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="text-center text-gray-500">
          Your watchlist is empty. Add some movies from the search page!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemove={true}
              onRemoveFromWatchlist={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
