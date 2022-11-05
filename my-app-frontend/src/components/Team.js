import React, { useState } from "react";
import EditName from "./EditName";
import EditLocation from "./EditLocation";
import EditLeague from "./EditLeague";

function Team({ team, update }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? ( <EditName team={ team } update={ update }/> ) : ( <p>{team.name}</p> )}
      <button onClick={() => setIsEditing((isEditing) => !isEditing)} >✏️</button>
      {isEditing ? ( <EditLocation/> ) : ( <p>{team.location}</p> )}
      {isEditing ? ( <EditLeague/> ) : ( <p>{team.league}</p> )}
    </li>
  );
}

export default Team;