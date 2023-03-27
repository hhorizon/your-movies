import React from "react";
import Typography from "@mui/material/Typography";

interface LogoProps {
  size?: "large" | "small";
}

const Logo: React.FC<LogoProps> = ({ size = "small" }) => {
  return (
    <Typography variant={size === "small" ? "h6" : "h5"}>
      <span style={{ color: "blue" }}>Your</span>
      <span style={{ color: "yellow" }}>Movies</span>
    </Typography>
  );
};

export default Logo;
