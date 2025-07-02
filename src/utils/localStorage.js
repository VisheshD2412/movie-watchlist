export const getWatchlist = () => {
  const watchlist = localStorage.getItem("watchlist");
  return watchlist ? JSON.parse(watchlist) : [];
};

export const setWatchlist = (watchlist) => {
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};
