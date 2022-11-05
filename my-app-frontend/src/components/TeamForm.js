import React, { useState } from "react";

function TeamForm( { teams, setTeams } ) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [league, setLeague] = useState("")

    function handleChange(e){
        setLeague(e.target.value)
    }

    function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/teams", {
      method: "POST",
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
      .then((newTeam) => {setTeams([...teams, newTeam])});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Location:</label>
            <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            <label>League:</label>
            <select name="league" onChange={handleChange}>
                <option value="American League">American League</option>
                <option value="National League">National League</option>
            </select>
            <input type="submit"/>
        </form>
    );
}

export default TeamForm;