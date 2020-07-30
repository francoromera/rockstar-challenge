export const action = (type, payload) => ({
  type,
  payload,
});

export const getImagePath = (path, width = 500) => `https://image.tmdb.org/t/p/w${width}${path}`;
