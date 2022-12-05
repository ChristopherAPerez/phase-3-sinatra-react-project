import React, { useState } from "react";

function Team({ team, update }) {

    const [name, setName] = useState(team.name);
    const [location, setLocation] = useState(team.location);
    const [league, setLeague] = useState("American League");

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/teams/${team.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            location: location,
            league: league
        }),
        })
        .then((r) => r.json())
        .then((updatedTeam) => update(updatedTeam));
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>League</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <input
                type="text"
                name="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />                    
            </td>
            <td>
                <input
                type="text"
                name="location"
                autoComplete="off"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />                    
            </td>
            <td>
                <select name="league" onChange={(e) => setLeague(e.target.value)}>
                    <option value="American League">American League</option>
                    <option value="National League">National League</option>
                </select>               
            </td>
            <td>
                <input type="submit" value="✅"/>
            </td>
          </tr>
        </tbody>
        </table>
    </form>
  );
}

export default Team;