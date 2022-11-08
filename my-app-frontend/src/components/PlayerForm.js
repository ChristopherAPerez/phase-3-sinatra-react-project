import React, { useState } from "react";
import TeamOptions from "./TeamOptions.js"
import { useNavigate } from "react-router-dom"

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
    const [team_id, setTeamID] = useState(teams[0].id)

    const navigate = useNavigate()

    function handleSubmit(e) {
    e.preventDefault();

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
      .then((newPlayer) => {setPlayers([...players, newPlayer])})
      navigate("/players")
    }

    return (
        <form className="playerForm" onSubmit={handleSubmit}>
            <h2>Add a Player</h2>


            <label>Name:</label>
            <input className="inputPlayer" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            
            <br></br>
            
            <label>Position:</label>
            <select className="inputPlayer" name="position" onChange={(e) => setPosition(e.target.value)}>
                <option value="Pitcher">Pitcher</option>
                <option value="First Baseman">First Baseman</option>
                <option value="Second Baseman">Second Baseman</option>
                <option value="Third Baseman">Third Baseman</option>
                <option value="Shortstop">Shortstop</option>
                <option value="Outfielder">Outfielder</option>
            </select>
            
            <br></br>
            
            
            <label>Games Played:</label>
            <input className="inputPlayer" type="number" name="games" value={games} onChange={(e) => setGames(e.target.value)}/>
            
            <br></br>
            
            <label>Innings:</label>
            <input className="inputPlayer" type="number" name="innings" value={innings} onChange={(e) => setInnings(e.target.value)}/>
            
            <br></br>
            
            <label>ERA:</label>
            <input className="inputPlayer" type="number" name="era" value={era} onChange={(e) => setERA(e.target.value)}/>
            
            <br></br>
            
            <label>Wins:</label>
            <input className="inputPlayer" type="number" name="wins" value={wins} onChange={(e) => setWins(e.target.value)}/>
            
            <br></br>
            
            <label>Loss:</label>
            <input className="inputPlayer" type="number" name="loss" value={loss} onChange={(e) => setLoss(e.target.value)}/>
            
            <br></br>
            
            <label>B-Avg:</label>
            <input className="inputPlayer" type="number" name="batting_average" value={battingAverage} onChange={(e) => setBattingAverage(e.target.value)}/>
            
            <br></br>
            
            <label>HR:</label>
            <input className="inputPlayer" type="number" name="hr" value={hr} onChange={(e) => setHR(e.target.value)}/>
            
            <br></br>
            
            <label>RBI:</label>
            <input className="inputPlayer" type="number" name="rbi" value={rbi} onChange={(e) => setRBI(e.target.value)}/>
            
            <br></br>
            
            <label>Jersey #:</label>
            <input className="inputPlayer" type="number" name="batting_average" value={jerseyNumber} onChange={(e) => setJerseyNumber(e.target.value)}/>
            
            <br></br>
            
            <label>Team:</label>
            <select className="inputPlayer" name="team_id" onChange={(e) => setTeamID(e.target.value)}>
                {teams.map((team) => {
                    return <TeamOptions key={team.id} team={ team }/>
                })}
            </select>

            <br></br>

            <input className="inputPlayer" type="submit"/>
        </form>
    );
}

export default PlayerForm;