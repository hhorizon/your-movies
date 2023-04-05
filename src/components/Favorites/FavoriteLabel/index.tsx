import React from "react";

import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface FavoriteLabelProps {
  isFavorite: boolean;
  size?: "medium" | "large" | "small";
  onFavoriteIcon: (isAddIcon: boolean) => void;
}

const FavoriteLabel: React.FC<FavoriteLabelProps> = ({
  isFavorite,
  size,
  onFavoriteIcon,
}) => {
  return (
    <IconButton onClick={() => onFavoriteIcon(!isFavorite)}>
      {isFavorite ? (
        <FavoriteIcon fontSize={size ? size : "medium"} color="primary" />
      ) : (
        <FavoriteBorderIcon fontSize={size ? size : "medium"} color="primary" />
      )}
    </IconButton>
  );
};

export default FavoriteLabel;
