import Player from "./Player";

function Players( { players, update, handleDelete } ) {

    return (
      <div>
        <ul>
          {players.map((player) => (
            <Player
              key={ player.id }
              player={ player }
              update={ update }
              handleDelete={ handleDelete }
              />))}
        </ul>
      </div>
    );
}

export default Players;