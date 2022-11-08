import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px",
      };

    return (
        <nav>
            <NavLink className="link" to="/home" style={linkStyle}>Home</NavLink>
            <NavLink className="link" to="/teams" style={linkStyle}>MLB Teams</NavLink>
            <NavLink className="link" to="/players" style={linkStyle}>All-Stars</NavLink>
            <NavLink className="link" to="/team_form" style={linkStyle}>Add Team</NavLink>
            <NavLink className="link" to="/player_form" style={linkStyle}>Add Player</NavLink>
        </nav>
    );
}

export default NavBar;