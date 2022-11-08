import React, { useState } from "react";
import EditName from "./EditName";
import EditLocation from "./EditLocation";
import EditLeague from "./EditLeague";

function Team({ team, update }) {
  const [isEditing, setIsEditing] = useState(false);

  function updateSwitch(updatedChange) {
    setIsEditing(false);
    update(updatedChange);
  }

  return (
    <ul className="team">
      {isEditing ? ( <EditName team={ team } update={ updateSwitch }/> ) : ( <p>{team.name}</p> )}
      {isEditing ? ( <EditLocation team={ team } update={ updateSwitch }/> ) : ( <p>{team.location}</p> )}
      {isEditing ? ( <EditLeague team={ team } update={ updateSwitch }/> ) : ( <p>{team.league}</p> )}
      <button onClick={() => setIsEditing((isEditing) => !isEditing)} >✏️</button>
    </ul>
  );
}

export default Team;