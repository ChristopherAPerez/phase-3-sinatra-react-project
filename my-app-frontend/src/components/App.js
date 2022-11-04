import React, { useState, useEffect } from 'react';
import Header from "./Header";
import NavBar from "./NavBar.js"
import Teams from "./Teams.js"
import Players from "./Players.js"
import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {

  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [page, setPage] = useState("/")

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then((r) => r.json())
      .then((teams) => setTeams(teams));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/players")
      .then((r) => r.json())
      .then((players) => setPlayers(players));
  }, []);

  console.log(page)

  return (
    <main className="App">
      <Header />

      <NavBar onChangePage={setPage} />

      <Routes>
        <Route path="/teams" element={<Teams
          teams={ teams }
        />} />
        <Route path="/players" element={<Players 
          players={ players }
        />} />
      </Routes>
    </main>
  );
}

export default App;
