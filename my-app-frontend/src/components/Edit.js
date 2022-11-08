import React, { useState } from "react";

function Edit({ player, update }) {

    const [name, setName] = useState(player.name ? player.name : "N/A")
    const [position, setPosition] = useState(player.position ? player.position : "N/A")
    const [games, setGames] = useState(player.games ? player.games : 0)
    const [innings, setInnings] = useState(player.innings ? player.innings : 0)
    const [era, setERA] = useState(player.era ? player.era : 0)
    const [win, setWin] = useState(player.win ? player.win : 0)
    const [loss, setLoss] = useState(player.loss ? player.loss : 0)
    const [avg, setAvg] = useState(player.batting_average ? player.batting_average : 0)
    const [hr, setHR] = useState(player.hr ? player.hr : 0)
    const [rbi, setRBI] = useState(player.rbi ? player.rbi : 0)
    const [jersey, setJersey] = useState(player.jersey_number ? player.jersey_number : 0)

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/players/${player.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            position: position,
            games: games,
            innings: innings,
            era: era,
            win: win,
            loss: loss,
            batting_average: avg,
            hr: hr,
            rbi: rbi,
            jersey_number: jersey,
            team_id: player.team_id
        }),
        })
        .then((r) => r.json())
        .then((updatedPlayer) => update(updatedPlayer));
    }

    return ( 
        <form className="player" onSubmit={handleFormSubmit}>
        <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Games</th>
                <th>Innings</th>
                <th>ERA</th>
                <th>Wins</th>
                <th>Loss</th>
                <th>Avg</th>
                <th>HR</th>
                <th>RBI</th>
                <th>Jersey</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>       
                    <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />                    
                </td>
                <td>       
                    <input
                    type="text"
                    name="position"
                    autoComplete="off"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="game"
                    autoComplete="off"
                    value={games}
                    onChange={(e) => setGames(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="innings"
                    autoComplete="off"
                    value={innings}
                    onChange={(e) => setInnings(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="era"
                    autoComplete="off"
                    value={era}
                    onChange={(e) => setERA(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="win"
                    autoComplete="off"
                    value={win}
                    onChange={(e) => setWin(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="name"
                    autoComplete="off"
                    value={loss}
                    onChange={(e) => setLoss(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="avg"
                    autoComplete="off"
                    value={avg}
                    onChange={(e) => setAvg(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="hr"
                    autoComplete="off"
                    value={hr}
                    onChange={(e) => setHR(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="rbi"
                    autoComplete="off"
                    value={rbi}
                    onChange={(e) => setRBI(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>       
                    <input
                    type="number"
                    name="jersey"
                    autoComplete="off"
                    value={jersey}
                    onChange={(e) => setJersey(e.target.value)}
                    className="input"
                    />                    
                </td>
                <td>
                <input type="submit" value="✅"/>
                </td>
              </tr>
            </tbody>
        </table>
        </form>
    )
}

export default Edit;