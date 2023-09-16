import App from "./components/App";
import { createRoot } from "react-dom/client";
import "../client/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
