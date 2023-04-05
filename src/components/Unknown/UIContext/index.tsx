import React, { createContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

interface UIContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
}

interface AlertProps {
  show: boolean;
  severity?: "success" | "info" | "warning" | "error";
  message?: string;
}

interface UIContextProviderProps {
  children: React.ReactElement;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

export const UIContextProvider: React.FC<UIContextProviderProps> = ({
  children,
}) => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    severity: "info",
    message: "",
  });

  const handleClose = () =>
    setAlert({
      show: false,
    });

  return (
    <UIContext.Provider value={{ setAlert }}>
      {children}
      <Snackbar open={alert.show} autoHideDuration={4000} onClose={handleClose}>
        <Alert elevation={6} variant="filled" severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </UIContext.Provider>
  );
};
