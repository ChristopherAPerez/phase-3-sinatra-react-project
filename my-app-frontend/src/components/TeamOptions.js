import React from 'react';


function TeamOptions( { team } ){

    return (
        <option value={team.id}>{team.name}</option>
    )
}

export default TeamOptions;