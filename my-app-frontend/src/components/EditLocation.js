import React, { useState } from "react";

function EditName({ team, update }) {
    const [teamLocation, setTeamLocation] = useState(team.location)

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/teams/${team.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: team.name,
            location: teamLocation,
            league: team.league
        }),
        })
        .then((r) => r.json())
        .then((updatedLocation) => update(updatedLocation));
    }

    return (
        <form onSubmit={handleFormSubmit}>
        <input
            type="text"
            name="location"
            value={teamLocation}
            onChange={(e) => setTeamLocation(e.target.value)}
        />
        <input type="submit" value="save"/>
        </form>
    )
}

export default EditName;