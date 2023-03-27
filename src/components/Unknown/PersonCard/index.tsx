import React from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import formatedPosterImage from "../../../common/formatedPosterImage";
import { Actor } from "../../../types";

interface PersonCarsProps {
  actor: Actor;
}

const PersonCard: React.FC<PersonCarsProps> = ({ actor }) => {
  return (
    <Card elevation={0}>
      <CardMedia
        component="img"
        image={formatedPosterImage(actor.profile_path)}
        alt={actor.name}
        width="100%"
      />

      <CardContent>
        <Typography gutterBottom variant="h6">
          {actor.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {actor.character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
