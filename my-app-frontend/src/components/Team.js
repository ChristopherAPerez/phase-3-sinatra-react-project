import React, { useState } from "react";
import EditTeam from "./EditTeam";

function Team({ team, update, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function updateSwitch(updatedChange) {
    setIsEditing(false);
    update(updatedChange);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:9292/teams/${team.id}`, {
      method: "DELETE",
    });

    handleDelete(team.id);
  }

  return (
    <ul className="team">
      {isEditing ? (<EditTeam team={ team } update={ updateSwitch } />) : (
        <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>League</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{team.name}</td>
            <td>{team.location}</td>
            <td>{team.league}</td>
            <td>
              <button onClick={() => setIsEditing((isEditing) => !isEditing)} >✏️</button>
              <button onClick={handleDeleteClick} >❌</button>
            </td>
          </tr>
        </tbody>
        </table>
      )}
    </ul>
  );
}

export default Team;