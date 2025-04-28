import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserDataProvider from "./contexts/users.tsx";
import LayoutContextProvider from "./contexts/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <UserDataProvider>
    <LayoutContextProvider>
      <App />
    </LayoutContextProvider>
  </UserDataProvider>
);
