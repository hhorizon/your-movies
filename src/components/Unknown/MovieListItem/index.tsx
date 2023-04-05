import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import FavoriteLabel from "../../Favorites/FavoriteLabel";

import formatedPosterImage from "../../../common/formatedPosterImage";
import formatedMediaType from "../../../common/formatedMediaType";
import formatedReleaseDate from "../../../common/formatedReleaseDate";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../../../services/firestoreService";
import { getUser } from "../../../redux/auth/auth-selectors";
import { openRegistrationModal } from "../../../redux/common/common-actions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MovieWithFavorite } from "../../../types";

interface MoviesListItemProps {
  movie: MovieWithFavorite;
}

const MoviesListItem: React.FC<MoviesListItemProps> = ({ movie }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  const mediaType = formatedMediaType(movie.media_type);
  const releaseDate = formatedReleaseDate(movie);
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null;
  const linkToDetails =
    movie.media_type === "tv" ? `/series/${movie.id}` : `/films/${movie.id}`;

  const onFavoriteIcon = (isAddIcon: boolean) => {
    if (!user.uid) {
      dispatch(openRegistrationModal(1));
    } else {
      isAddIcon
        ? addToFavorite(movie, user.uid)
        : deleteFromFavorite(movie, user.uid);
    }
  };

  return (
    <Box position="relative">
      <Box
        position="relative"
        component={RouterLink}
        to={linkToDetails}
        state={{
          from: location.pathname,
        }}
        sx={{ textDecoration: "none" }}
      >
        <Card elevation={0}>
          {rating && (
            <Box position="absolute" top={10} left={10} zIndex={1}>
              <Chip label={rating} color="primary" />
            </Box>
          )}

          <CardActionArea>
            <CardMedia
              component="img"
              image={formatedPosterImage(movie.poster_path)}
              alt={movie.title ?? movie.name}
            />

            <CardContent>
              <Typography gutterBottom variant="h6">
                {movie.title ?? movie.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {releaseDate ? `${releaseDate},` : null} {mediaType}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box position="absolute" top={5} right={5}>
        <FavoriteLabel
          isFavorite={movie.isFavorite}
          onFavoriteIcon={onFavoriteIcon}
        />
      </Box>
    </Box>
  );
};

export default MoviesListItem;
