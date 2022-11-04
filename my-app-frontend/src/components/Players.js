import React from "react";
import Player from "./Player";

function Players({ players }) {
    return (
      <div>
        <ul>
          {players.map((player) => (
            <Player
              key={ player.id }
              player={ player }
              />))}
        </ul>
      </div>
    );
}

export default Players;