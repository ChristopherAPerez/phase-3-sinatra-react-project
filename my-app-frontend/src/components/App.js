import React, { useState } from 'react';
import Header from "./Header";
import NavBar from "./NavBar.js"
import Teams from "./Teams.js"
import Players from "./Players.js"
import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {

  const [page, setPage] = useState("/")

  return (
    <main className="App">
      <Header />
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route path="/teams" element={<Teams/>} />
        <Route path="/teams" element={<Players/>} />
      </Routes>
    </main>
  );
}

export default App;
