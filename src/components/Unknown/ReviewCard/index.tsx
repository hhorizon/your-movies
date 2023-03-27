import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import formatedPosterImage from "../../../common/formatedPosterImage";
import { Review } from "../../../types";

interface ReviewCarsProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCarsProps> = ({ review }) => {
  const showUserName = review.author !== review.author_details.username;
  return (
    <Box>
      <Box display="flex" mb={5}>
        <Avatar
          src={formatedPosterImage(review.author_details.avatar_path)}
          alt={review.author}
        />
        <Box>
          <Typography ml={3}>{review.author}</Typography>
          {showUserName && (
            <Typography ml={3} variant="body2" color="primary.main">
              {review.author_details.username}
            </Typography>
          )}
        </Box>
      </Box>

      <Box px={3}>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 10,
          }}
        >
          {review.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewCard;
