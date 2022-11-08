import React, { useState } from "react";
import Edit from "./Edit";

function Player({ player, update }) {
  const [isEditing, setIsEditing] = useState(false);

  function updateSwitch(updatedChange) {
    setIsEditing(false);
    update(updatedChange);
  }

  function handleDelete() {
    
  }

  return (
    <div>
      {isEditing ? (<Edit player={ player } update={ updateSwitch }/>) : (
      <div className="player">
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
                <td>{player.name ?  player.name : "N/A"}</td>
                <td>{player.position ?  player.position : "N/A"}</td>
                <td>{player.games > 0 ?  player.games : "N/A"}</td>
                <td>{player.innings > 0 ?  player.innings : "N/A"}</td>
                <td>{player.era > 0 ?  player.era : "N/A"}</td>
                <td>{player.win > 0 ?  player.win : "N/A"}</td>
                <td>{player.loss > 0 ?  player.loss : "N/A"}</td>
                <td>{player.batting_average > 0 ?  "." + player.batting_average : "N/A"}</td>
                <td>{player.hr > 0 ?  player.hr : "N/A"}</td>
                <td>{player.rbi > 0 ?  player.rbi : "N/A"}</td>
                <td>{player.jersey_number > 0 ? "#" + player.jersey_number : "N/A"}</td>
                <td>
                  <button onClick={() => setIsEditing((isEditing) => !isEditing)} >✏️</button>
                  <button onClick={handleDelete} >❌</button>
                </td>
              </tr>
            </tbody>
        </table>
    </div>
    )}
    </div>
  )
}

export default Player;