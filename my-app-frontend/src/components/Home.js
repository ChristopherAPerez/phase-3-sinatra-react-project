import React from "react";
import TableTeam from "./TableTeam"

function Home( { teams } ) {
    return (
        <div className="home">
            <ul>
                {teams.map((team) => (
                    <TableTeam key={ team.id } team={ team }/>
                ))}
            </ul>
        </div>
    )
}
  
export default Home;