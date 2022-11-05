import React, {useState, useEffect} from "react";
import Team from "./Team";

function Teams({ teams, update }) {

    return (
      <div>
        <ul>
          {teams.map((team) => (
            <Team
              key={ team.id }
              team={ team }
              update={ update }
              />))}
        </ul>
      </div>
    );
}

export default Teams;