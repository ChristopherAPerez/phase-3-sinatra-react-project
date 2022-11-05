import React, { useState } from "react";

function EditName({ team, update }) {

    const { name } = team.name 
    
    const [teamName, setTeamName] = useState(name)

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/teams/${team.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            team: teamName,
            location: team.location,
            league: team.league
        }),
        })
        .then((r) => r.json())
        .then((updatedName) => update(updatedName));
    }

    return (
        <form onSubmit={handleFormSubmit}>
        <input
            type="text"
            name="name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
        />
        <input type="submit"/>
        </form>
    )
}

export default EditName;