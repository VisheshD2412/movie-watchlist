import React, { createContext, useState, useEffect } from "react";
import { getWatchlist, setWatchlist } from "./utils/localStorage";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlistState] = useState(getWatchlist());

  useEffect(() => {
    setWatchlist(watchlist);
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    setWatchlistState((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromWatchlist = (id) => {
    setWatchlistState((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
