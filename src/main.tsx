import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserDataProvider from "./contexts/users.tsx";

createRoot(document.getElementById("root")!).render(
  <UserDataProvider>
    <App />
  </UserDataProvider>
);
