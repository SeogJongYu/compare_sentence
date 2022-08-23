import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="" element={<MainPage />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
