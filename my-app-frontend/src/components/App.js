import React, { useState, useEffect } from 'react';
import Header from "./Header";
import NavBar from "./NavBar.js"
import Teams from "./Teams.js"
import Players from "./Players.js"
import TeamForm from "./TeamForm.js"
import PlayerForm from "./PlayerForm.js"
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

  function handleUpdateTeam(updateTeam) {
    const updatedTeam = teams.map((team) => {
      if (team.id === updateTeam.id) {
        return updateTeam;
      } else {
        return team;
      }
    });
    setTeams(updatedTeam);
  }

  function handleUpdatePlayer(updatePlayer) {
    const updatedPlayer = players.map((player) => {
      if (player.id === updatePlayer.id) {
        return updatePlayer;
      } else {
        return player;
      }
    });
    setPlayers(updatedPlayer);
  }

  return (
    <main className="App">
      <Header />

      <NavBar onChangePage={setPage} />

      <Routes>
        <Route path="/teams" element={<Teams teams={ teams } update={ handleUpdateTeam }/>} />
        <Route path="/players" element={<Players players={ players } setPlayers={ setPlayers } update={ handleUpdatePlayer } />} />
        <Route path="/team_form" element={<TeamForm teams={ teams } setTeams={ setTeams } />}/>
        <Route path="/player_form" element={<PlayerForm players={ players } setPlayers={ setPlayers } teams= { teams }/>}/>
      </Routes>
    </main>
  );
}

export default App;
