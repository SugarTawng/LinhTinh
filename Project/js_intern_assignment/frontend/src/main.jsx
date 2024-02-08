import React from "react";
import ReactDOM from "react-dom/client";
import { StoreContextProvider } from "./context/StoreContextProvider.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StoreContextProvider>
			<App />
		</StoreContextProvider>
	</React.StrictMode>
);
