import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const router = (handleChangeTheme, currentTheme) =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <Root onChangeTheme={handleChangeTheme} currentTheme={currentTheme} />
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const handleChangeTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme.palette.mode === "dark"
        ? createTheme({ palette: { mode: "light" } })
        : createTheme({ palette: { mode: "dark" } })
    );
  };
  return (
    <ThemeProvider theme={currentTheme}>
      {" "}
      <RouterProvider router={router(handleChangeTheme, currentTheme)} />
    </ThemeProvider>
  );
}

export default App;
