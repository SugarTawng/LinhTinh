import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ListItem from "./components/ListItem.jsx";

// import { theme } from "./theme";
// import { ListItem, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ListItem />
  </React.StrictMode>
);
