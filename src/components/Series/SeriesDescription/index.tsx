import React from "react";
import { format } from "date-fns";
import { useIntl } from "react-intl";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";

import formatedPosterImage from "../../../common/formatedPosterImage";
import { Movie } from "../../../types";
import messages from "./messages";

type SeriesDescriptionProps = {
  series: Movie;
};

const SeriesDescription: React.FC<SeriesDescriptionProps> = ({ series }) => {
  const intl = useIntl();

  const {
    name,
    original_name,
    first_air_date,
    last_air_date,
    number_of_seasons,
    number_of_episodes,
    episode_run_time,
    tagline,
    vote_average,
    homepage,
    genres,
    overview,
  } = series;

  console.log(episode_run_time);

  const detailsElements = [
    {
      name: intl.formatMessage(messages.worldPremiere),
      value: first_air_date ? format(new Date(first_air_date), "PPP") : null,
    },
    {
      name: intl.formatMessage(messages.duration),
      value: episode_run_time.length ? `~${episode_run_time[0]} min` : null,
    },
    {
      name: intl.formatMessage(messages.originalTitle),
      value: original_name ?? null,
    },
    {
      name: intl.formatMessage(messages.seasons),
      value: number_of_seasons ?? null,
    },
    {
      name: intl.formatMessage(messages.episodes),
      value: number_of_episodes ?? null,
    },
    {
      name: intl.formatMessage(messages.lastEpisodeDate),
      value: last_air_date ? format(new Date(last_air_date), "PPP") : null,
    },
  ];

  return (
    <Grid container spacing={{ sm: 6, lg: 10 }}>
      <Grid item sm={5} md={4}>
        <img
          src={formatedPosterImage(series.poster_path)}
          alt={name}
          width="100%"
        />
      </Grid>

      <Grid item sm={7} md={8}>
        <Box mb={6}>
          <Typography variant="h4">{name}</Typography>

          {tagline && <Typography>{tagline}</Typography>}
        </Box>

        <Box display="flex" alignItems="center" mb={6}>
          {homepage && (
            <Box mr={4}>
              <Chip
                component={Link}
                href={homepage}
                target="_blank"
                variant="outlined"
                size="small"
                label="Oficial page"
                clickable
                color="primary"
              />
            </Box>
          )}
          {vote_average && (
            <Box display="flex">
              <StarIcon sx={{ fontSize: 22, color: "#ffd700e6" }} />
              <Typography>{vote_average.toFixed(1)}</Typography>
            </Box>
          )}
        </Box>

        <Box width="fit-content" mb={6}>
          {detailsElements.map((elem, index) =>
            elem.value ? (
              <Box
                key={index}
                pl={1}
                ml={-1}
                mb={4}
                borderLeft="2px solid"
                borderColor="primary.main"
              >
                <Typography display="inline">{elem.name}: </Typography>
                <Typography display="inline" color="primary.main">
                  {elem.value}
                </Typography>
              </Box>
            ) : null,
          )}
        </Box>

        {genres && (
          <Box display="flex" mb={6}>
            {genres.map((genre, index) => (
              <Box key={genre.id} ml={index === 0 ? 0 : 1}>
                <Chip label={genre.name} size="small" color="primary" />
              </Box>
            ))}
          </Box>
        )}

        {overview && (
          <Box pl={1} ml={-1} borderLeft="2px solid" borderColor="primary.main">
            <Typography>{overview}</Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default SeriesDescription;
