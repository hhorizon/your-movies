import React from "react";

import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface FavoriteLabelProps {
  isFavorite: boolean;
  onFavoriteIcon: (isAddIcon: boolean) => void;
}

const FavoriteLabel: React.FC<FavoriteLabelProps> = ({
  isFavorite,
  onFavoriteIcon,
}) => {
  return (
    <IconButton onClick={() => onFavoriteIcon(!isFavorite)}>
      {isFavorite ? (
        <FavoriteIcon color="primary" />
      ) : (
        <FavoriteBorderIcon color="primary" />
      )}
    </IconButton>
  );
};

export default FavoriteLabel;
