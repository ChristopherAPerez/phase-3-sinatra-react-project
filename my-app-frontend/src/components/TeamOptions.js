import React from 'react';


function TeamOptions( { teams, team, setTeamID } ){

    

    return (
        <option value={team.id}>{team.name}</option>
    )
}

export default TeamOptions;