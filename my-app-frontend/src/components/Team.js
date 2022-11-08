import React, { useState } from "react";
import EditName from "./EditName";
import EditLocation from "./EditLocation";
import EditLeague from "./EditLeague";

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
        <td>{isEditing ? ( <EditName team={ team } update={ updateSwitch }/> ) : team.name}</td>
        <td>{isEditing ? ( <EditLocation team={ team } update={ updateSwitch }/> ) :  team.location }</td>
        <td>{isEditing ? ( <EditLeague team={ team } update={ updateSwitch }/> ) : team.league}</td>
        <td>
          <button onClick={() => setIsEditing((isEditing) => !isEditing)} >✏️</button>
          <button onClick={handleDeleteClick} >❌</button>
        </td>
      </tr>
    </tbody>
    </table>
    </ul>
  );
}

export default Team;