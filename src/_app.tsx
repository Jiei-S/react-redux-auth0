import { Suspense } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import { Global } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "./components/_shared/config/i18n";
import muiTheme from "./components/_shared/config/mui-theme";
import Layout from "./components/_shared/layouts/layout";
import projectsRouter from "./components/projects/routes";
import { globalStyle } from "./global";
import store from "./modules";
import Login from "./components/login";
import AuthenticationGuard from "./components/_shared/components/auth/authentication-guard";
import { PageKey } from "./components/_shared/const/const";
import Auth0Provider from "./components/_shared/components/auth/authentication-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0Provider>
        <AuthenticationGuard component={Layout} />
      </Auth0Provider>
    ),
    children: [
      ...projectsRouter,
      {
        path: PageKey.login,
        element: <Login />,
      },
      {
        path: "*",
        loader: async () => {
          return redirect("/");
        },
      },
    ],
  },
]);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <ReduxProvider store={store}>
          <Global styles={globalStyle} />
          <Suspense fallback={null}>
            <RouterProvider router={router} />
          </Suspense>
        </ReduxProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
