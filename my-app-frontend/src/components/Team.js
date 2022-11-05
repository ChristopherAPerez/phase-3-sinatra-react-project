import React, { useState } from "react";
import EditName from "./EditName";
import EditLocation from "./EditLocation";
// import EditLeague from "./EditLeague";

function Team({ team, update }) {
  const [isEditing, setIsEditing] = useState(false);

  function updateSwitch(updatedChange) {
    setIsEditing(false);
    update(updatedChange);
  }

  return (
    <li>
      {isEditing ? ( <EditName team={ team } update={ updateSwitch }/> ) : ( <p>{team.name}</p> )}
      {isEditing ? ( <EditLocation team={ team } update={ updateSwitch }/> ) : ( <p>{team.location}</p> )}
      <button onClick={() => setIsEditing((isEditing) => !isEditing)} >✏️</button>
      {/* {isEditing ? ( <EditLeague/> ) : ( <p>{team.league}</p> )} */}
    </li>
  );
}

export default Team;