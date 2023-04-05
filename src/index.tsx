import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { FirebaseAppProvider, AuthProvider, StorageProvider } from "reactfire";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { UIContextProvider } from "./components/Unknown/UIContext";
import GlobalStyles from "./components/Unknown/GlobalStyles";
import IntlProvider from "./components/Unknown/IntlProvider";
import App from "./App";

import { firebaseApp, auth, storage } from "./common/firebaseApp";
import { store } from "./redux/store";
import theme from "./common/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <FirebaseAppProvider firebaseApp={firebaseApp}>
        <StorageProvider sdk={storage}>
          <AuthProvider sdk={auth}>
            <BrowserRouter>
              <IntlProvider>
                <ThemeProvider theme={theme}>
                  <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <GlobalStyles />
                    <UIContextProvider>
                      <App />
                    </UIContextProvider>
                  </StyledEngineProvider>
                </ThemeProvider>
              </IntlProvider>
            </BrowserRouter>
          </AuthProvider>
        </StorageProvider>
      </FirebaseAppProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
