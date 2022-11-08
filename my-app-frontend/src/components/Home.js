import React from "react";
import TableTeam from "./TableTeam"

function Home( { teams } ) {
    return (
        <div className="home">
            <h2>MLB Teams and Players</h2>
            <ul>
                {teams.map((team) => (
                    <TableTeam key={ team.id } team={ team }/>
                ))}
            </ul>
        </div>
    )
}
  
export default Home;