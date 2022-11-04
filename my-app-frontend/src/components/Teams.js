import React, {useState, useEffect} from "react";
import Team from "./Team";

function Teams() {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then((r) => r.json())
      .then((teams) => setTeams(teams));
  }, []);

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