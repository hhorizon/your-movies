import { createTheme, alpha } from "@mui/material";

const breakpoints = {
  values: { xs: 360, sm: 480, md: 760, lg: 1024, xl: 1200 },
};

const colors = {
  primary: "#5c8f22",
  primaryLight: "#74a043",
  secondary: "#ffffff",
};

const defaultTheme = createTheme({
  spacing: 5,
  breakpoints,
});

const theme = createTheme({
  spacing: 5,
  breakpoints,
  palette: {
    primary: { main: colors.primary, light: colors.primaryLight },
    secondary: { main: colors.secondary },
  },
  typography: {
    h4: {
      fontSize: 30,
      fontWeight: 700,
    },
    h5: {
      fontSize: 26,
      fontWeight: 700,
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("xs")]: {
            paddingRight: defaultTheme.spacing(5),
            paddingLeft: defaultTheme.spacing(5),
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("xs")]: {
            padding: 0,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("md")]: {
            borderRadius: 8,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: defaultTheme.shape.borderRadius,
          backgroundColor: alpha(defaultTheme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: alpha(defaultTheme.palette.common.white, 0.25),
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette.common.white,
          "&:hover:not(.Mui-disabled):before": {
            border: "none",
          },
          "&::before": {
            border: "none",
          },
          "&::after": {
            border: "none",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          paddingLeft: defaultTheme.spacing(1),
          color: defaultTheme.palette.common.white,
        },
      },
    },
  },
});

export default theme;
