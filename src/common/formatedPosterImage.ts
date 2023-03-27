const formatedPosterImage = (url?: string) => {
  return url ? `https://image.tmdb.org/t/p/w500${url}` : "/not-found.png";
};

export default formatedPosterImage;
