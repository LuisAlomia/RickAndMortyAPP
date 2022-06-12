import React from "react";
import ReactDOM from "react-dom/client";
import RickAndMortyApp from "./RickAndMortyApp";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="mainApp">
    <React.StrictMode>
      <RickAndMortyApp />
    </React.StrictMode>
  </main>
);
