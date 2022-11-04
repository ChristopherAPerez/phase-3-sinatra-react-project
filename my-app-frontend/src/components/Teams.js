import React from "react";
import Team from "./Team";

function Teams({ teams }) {
    return (
      <div>
        <ul>
          {teams.map((team) => (
            <Team
              key={ team.id }
              team={ team }
              />))}
        </ul>
      </div>
    );
}

export default Teams;