import React from "react";

function PlayBall( ) {

    return (
        <div className="playball">
            <h2>MLB Teams and Players</h2>
            <div className="list">
                <h3>What this app does:</h3>
                <li>
                    Connects a frontend, React, with a backend, Sinatra, database
                </li>
                <li>
                    Allows the users to browse through list of data of MLB teams
                </li>
                <li>
                    Allows the users to browse through list of data of MLB players
                </li>
                <li>
                    Users can upload new MLB teams, real or of their own imagination
                </li>
                <li>
                    Users can create new MLB athlete and assign them to an MLB team available, also adding their stats
                </li>
                <li>
                    The application allows the users to update or delete teams or players from the list/database
                </li>
            </div>
        </div>
    )
}
  
export default PlayBall;