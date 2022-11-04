import React from "react";

function Player({ player }) {

  return (
    <li>
        <p>{player.name}</p>
        <p>{player.position}</p>
    </li>
  );
}

export default Player;