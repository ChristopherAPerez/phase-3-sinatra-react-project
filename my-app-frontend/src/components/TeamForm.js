import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function TeamForm( { teams, setTeams } ) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [league, setLeague] = useState("")

    const navigate = useNavigate()

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
      .then((newTeam) => {setTeams([...teams, newTeam])})
      navigate("/teams")
    }

    return (
        <form className="teamForm" onSubmit={handleSubmit}>
            <h2>Add a Team</h2>

            <label>Name:</label>
            <input className="inputPlayer" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            
            <br></br>

            <label>Location:</label>
            <input className="inputPlayer" type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            
            <br></br>
            
            <label>League:</label>
            <select className="inputPlayer" name="league" onChange={handleChange}>
                <option value="American League">American League</option>
                <option value="National League">National League</option>
            </select>
            
            <br></br>
            
            <input className="inputPlayer" type="submit"/>
        </form>
    );
}

export default TeamForm;