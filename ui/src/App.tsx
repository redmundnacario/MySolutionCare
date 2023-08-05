import React from "react";
import { Routes, Route } from "react-router-dom";

import WithGlobalModalProvider from "@components/hoc/WithGlobalModalProvider";
import Clients from "@pages/Clients";
import DataProvider from "@store/DataProvider";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <WithGlobalModalProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/Clients" element={<Clients />} />
          </Routes>
        </DataProvider>
      </WithGlobalModalProvider>
    </div>
  );
}
