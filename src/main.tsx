import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LayoutContextProvider, UserDataProvider } from "@/contexts";

createRoot(document.getElementById("root")!).render(
  <UserDataProvider>
    <LayoutContextProvider>
      <App />
    </LayoutContextProvider>
  </UserDataProvider>
);
