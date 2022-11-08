import React, { useState } from "react";

function EditName({ team, update }) {
    const [teamLeague, setTeamLeague] = useState("American League")

    function handleChange(e){
        setTeamLeague(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/teams/${team.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: team.name,
            location: team.location,
            league: teamLeague
        }),
        })
        .then((r) => r.json())
        .then((updatedLeague) => update(updatedLeague))
    }

    return (
        <form onSubmit={handleSubmit}>
        <select name="league" onChange={handleChange}>
            <option value="American League">American League</option>
            <option value="National League">National League</option>
        </select>
        <input type="submit" value="✅" />
        </form>
    )
}

export default EditName;