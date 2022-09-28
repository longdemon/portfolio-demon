import React, { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { NotificationsProvider } from "@mantine/notifications";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  </StrictMode>
);
