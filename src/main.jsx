import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/design-system.css";
import "./styles/global.css";

import { FavoritesProvider } from "./context/FavoritesContext";
import { FilterProvider } from "./context/FilterContext";
import App from "./App";

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
