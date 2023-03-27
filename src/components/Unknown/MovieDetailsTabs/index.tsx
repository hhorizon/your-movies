import React, { useState } from "react";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MovieDetailsTabCast from "../MovieDetailsTabCast";
import MovieDetailsTabReviews from "../MovieDetailsTabReviews";

import { MediaType } from "../../../types";
import messages from "./messages";

interface MovieDetailsTabsProps {
  type: MediaType;
  movieId: string;
}

const MovieDetailsTabs: React.FC<MovieDetailsTabsProps> = ({
  movieId,
  type,
}) => {
  const [value, setValue] = useState(0);
  const intl = useIntl();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={intl.formatMessage(messages.castTabLabel)} />
          <Tab label={intl.formatMessage(messages.reviewsTabLabel)} />
        </Tabs>
      </Box>

      {value === 0 && <MovieDetailsTabCast type={type} movieId={movieId} />}

      {value === 1 && <MovieDetailsTabReviews type={type} movieId={movieId} />}
    </Box>
  );
};

export default MovieDetailsTabs;
