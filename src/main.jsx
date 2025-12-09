import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FriendsListProvider } from "./FriendsListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FriendsListProvider>
        <App />
      </FriendsListProvider>
    </BrowserRouter>
  </StrictMode>
);
