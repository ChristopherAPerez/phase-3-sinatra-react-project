import React, { useState } from "react";
import TeamOptions from "./TeamOptions.js"

function PlayerForm( { players, setPlayers, teams } ) {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("Pitcher")
    const [games, setGames] = useState("")
    const [innings, setInnings] = useState("")
    const [era, setERA] = useState("")
    const [wins, setWins] = useState("")
    const [loss, setLoss] = useState("")
    const [battingAverage, setBattingAverage] = useState("")
    const [hr, setHR] = useState("")
    const [rbi, setRBI] = useState("")
    const [jerseyNumber, setJerseyNumber] = useState("")
    const [team_id, setTeamID] = useState("")

    function handleSubmit(e) {
    e.preventDefault();

    console.log(position, team_id)

    fetch("http://localhost:9292/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        position: position,
        games: games,
        innings: innings,
        era: era,
        win: wins,
        loss: loss,
        batting_average: battingAverage,
        hr: hr,
        rbi: rbi,
        jersey_number: jerseyNumber,
        team_id: team_id
      }),
    })
      .then((r) => r.json())
      .then((newPlayer) => {setPlayers([...players, newPlayer])});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Position:</label>
            <select name="position" onChange={(e) => setPosition(e.target.value)}>
                <option value="Pitcher">Pitcher</option>
                <option value="First Baseman">First Baseman</option>
                <option value="Second Baseman">Second Baseman</option>
                <option value="Third Baseman">Third Baseman</option>
                <option value="Shortstop">Shortstop</option>
                <option value="Outfielder">Outfielder</option>
            </select>
            <label>Games Played:</label>
            <input type="number" name="games" value={games} onChange={(e) => setGames(e.target.value)}/>
            <label>Innings:</label>
            <input type="number" name="innings" value={innings} onChange={(e) => setInnings(e.target.value)}/>
            <label>ERA:</label>
            <input type="number" name="era" value={era} onChange={(e) => setERA(e.target.value)}/>
            <label>Wins:</label>
            <input type="number" name="wins" value={wins} onChange={(e) => setWins(e.target.value)}/>
            <label>Loss:</label>
            <input type="number" name="loss" value={loss} onChange={(e) => setLoss(e.target.value)}/>
            <label>B-Avg:</label>
            <input type="number" name="batting_average" value={battingAverage} onChange={(e) => setBattingAverage(e.target.value)}/>
            <label>HR:</label>
            <input type="number" name="hr" value={hr} onChange={(e) => setHR(e.target.value)}/>
            <label>RBI:</label>
            <input type="number" name="rbi" value={rbi} onChange={(e) => setRBI(e.target.value)}/>
            <label>Jersey #:</label>
            <input type="number" name="batting_average" value={jerseyNumber} onChange={(e) => setJerseyNumber(e.target.value)}/>
            <label>Team:</label>
            <select name="team_id" onChange={(e) => setTeamID(e.target.value)}>
                {teams.map((team) => {
                    return <TeamOptions key={team.id} team={ team }/>
                })}
            </select>
            <input type="submit"/>
        </form>
    );
}

export default PlayerForm;