import React from "react";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBarCard from "../SearchBarCard";

import { Movie, MediaType } from "../../../types";
import useStyles from "./useStyles";
import messages from "./messages";

interface SearchBarListProps {
  movies?: Movie[];
  mediaType: MediaType;
  onItemClick: () => void;
}

const SearchBarList: React.FC<SearchBarListProps> = ({
  movies,
  mediaType,
  onItemClick,
}) => {
  const classes = useStyles();
  const intl = useIntl();

  if (!movies || movies.length === 0)
    return (
      <Box px={3} py={5}>
        <Typography variant="subtitle2" color="common.white" textAlign="center">
          {intl.formatMessage(messages.noResultsText)}
        </Typography>
      </Box>
    );

  return (
    <Box className={classes.searchListWrapper}>
      {movies.map((movie) => (
        <SearchBarCard
          key={movie.id}
          movie={movie}
          mediaType={mediaType}
          onClick={onItemClick}
        />
      ))}
    </Box>
  );
};

export default SearchBarList;
