/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);

function Root() {
    return (
        <React.StrictMode>
                <App />
        </React.StrictMode>
    );
}
