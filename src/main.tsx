import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import FloatingContact from "./component/FloatingContact";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <FloatingContact />
  </StrictMode>
);
