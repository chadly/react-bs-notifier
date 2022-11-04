import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./root";

const root = createRoot(document.getElementById("docsApp"));
root.render(<Root />);
