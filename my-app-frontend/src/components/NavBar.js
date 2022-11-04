import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px"
      };

    return (
        <nav>
            <NavLink exact to="/players" style={linkStyle}>Home</NavLink>
            <NavLink to="/teams" style={linkStyle}>MLB Teams</NavLink>
            <NavLink to="/players" style={linkStyle}>All-Stars</NavLink>
            <NavLink to="/teams" style={linkStyle}>Add Team</NavLink>
            <NavLink to="/players" style={linkStyle}>Add Player</NavLink>
        </nav>
    );
}

export default NavBar;