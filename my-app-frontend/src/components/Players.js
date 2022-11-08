import Player from "./Player";

function Players( { players, update } ) {

    return (
      <div>
        <ul>
          {players.map((player) => (
            <Player
              key={ player.id }
              player={ player }
              update={ update }
              />))}
        </ul>
      </div>
    );
}

export default Players;