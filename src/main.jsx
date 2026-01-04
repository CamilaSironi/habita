import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import { FilterProvider } from "./context/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
