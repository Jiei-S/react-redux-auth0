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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...projectsRouter,
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
