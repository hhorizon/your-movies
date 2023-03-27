const formatedMediaType = (mediaType: string) => {
  if (mediaType === "tv") return "Series";
  if (mediaType === "movie") return "Film";
  return "Film";
};

export default formatedMediaType;
