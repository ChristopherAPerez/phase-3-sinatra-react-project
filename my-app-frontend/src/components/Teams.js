import Team from "./Team";

function Teams({ teams, update, handleDelete }) {

    return (
      <div>
        <ul>
          {teams.map((team) => (
            <Team
              key={ team.id }
              team={ team }
              update={ update }
              handleDelete={ handleDelete }
              />))}
        </ul>
      </div>
    );
}

export default Teams;