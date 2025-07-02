import React from "react";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER = "https://via.placeholder.com/500x281?text=No+Image";

const MovieCard = ({
  movie,
  onRemove = false,
  onAdd,
  onRemoveFromWatchlist,
}) => {
  const posterUrl = movie.poster_path
    ? `${TMDB_IMAGE_BASE}${movie.poster_path}`
    : PLACEHOLDER;

  const handleAddToWatchlist = () => {
    if (onAdd) onAdd(movie);
  };

  const handleRemoveFromWatchlist = () => {
    if (onRemoveFromWatchlist) onRemoveFromWatchlist(movie.id);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
      <div
        className="
          w-12 sm:w-16 md:w-24
          aspect-[16/9]
          bg-gray-200
          rounded-lg
          overflow-hidden
          shadow
          mb-4
          mx-auto
        "
      >
        <img
          src={posterUrl}
          alt={movie.title || "No poster available"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 w-full flex flex-col items-center">
        <h3 className="font-semibold text-lg text-center">{movie.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          Rating: {movie.vote_average?.toFixed(1) || "N/A"}
        </p>
        {!onRemove ? (
          <button
            onClick={handleAddToWatchlist}
            className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Add to Watchlist
          </button>
        ) : (
          <button
            onClick={handleRemoveFromWatchlist}
            className="mt-3 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
