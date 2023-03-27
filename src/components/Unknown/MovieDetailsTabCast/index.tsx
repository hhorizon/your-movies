import React from "react";
import { useIntl } from "react-intl";
import { useMediaQuery, useTheme } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonCard from "../PersonCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Loader from "../Loader";

import { useGetMovieCastQuery } from "../../../services/movieService";
import { MediaType } from "../../../types";
import messages from "./messages";

interface MovieDetailsTabCastProps {
  type: MediaType;
  movieId: string;
}

const MovieDetailsTabCast: React.FC<MovieDetailsTabCastProps> = ({
  movieId,
  type,
}) => {
  const intl = useIntl();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { data, isLoading } = useGetMovieCastQuery({
    movieId,
    type,
  });

  const slidesPerView = () => {
    if (isDesktop) return 5;
    if (isMobile) return 3;
    return 4;
  };

  return (
    <Box pt={5}>
      {isLoading && <Loader />}

      {data && data.cast.length !== 0 ? (
        <Box position="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView()}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
          >
            {data.cast.map((actor) => (
              <SwiperSlide key={actor.id}>
                <PersonCard actor={actor} />
              </SwiperSlide>
            ))}

            {data.cast.length > slidesPerView() && (
              <>
                <Box position="absolute" top="30%" left={0} zIndex={1}>
                  <IconButton className="prev">
                    <ArrowBackIosNewIcon fontSize="large" color="primary" />
                  </IconButton>
                </Box>

                <Box position="absolute" top="30%" right={0} zIndex={1}>
                  <IconButton className="next">
                    <ArrowForwardIosIcon fontSize="large" color="primary" />
                  </IconButton>
                </Box>
              </>
            )}
          </Swiper>
        </Box>
      ) : (
        <Typography>{intl.formatMessage(messages.noResultsText)}</Typography>
      )}
    </Box>
  );
};

export default MovieDetailsTabCast;
