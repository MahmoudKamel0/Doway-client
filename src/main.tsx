import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Application from "@app";
import "@styles/globals.style.css";
import { enableReactScan } from "@config/react-scan.config";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Application />
    </StrictMode>,
);

// Enable React Scan for development QA and visual inspection of the React component tree.
// This should be called after the application is rendered.
enableReactScan();

// Initialize internationalization features before rendering the app.
// This sets up language resources and translation handling.
// enableI18n();
