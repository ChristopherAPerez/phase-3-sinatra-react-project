import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px"
      };

    return (
        <nav>
            <NavLink to="/home" style={linkStyle}>Home</NavLink>
            <NavLink to="/teams" style={linkStyle}>MLB Teams</NavLink>
            <NavLink to="/players" style={linkStyle}>All-Stars</NavLink>
            <NavLink to="/team_form" style={linkStyle}>Add Team</NavLink>
            <NavLink to="/player_form" style={linkStyle}>Add Player</NavLink>
        </nav>
    );
}

export default NavBar;