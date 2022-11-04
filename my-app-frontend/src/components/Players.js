import React, {useState, useEffect} from "react";
import Player from "./Player";

function Players() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/players")
      .then((r) => r.json())
      .then((players) => setPlayers(players));
  }, []);

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