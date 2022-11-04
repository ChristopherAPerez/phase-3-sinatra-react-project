import React from "react";

function Team({ team }) {

  return (
    <li>
        <p>{team.name}</p>
        <p>{team.location}</p>
        <p>{team.league}</p>
    </li>
  );
}

export default Team;