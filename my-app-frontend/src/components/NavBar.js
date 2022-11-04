import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px"
      };

    return (
        <nav>
            <NavLink exact to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/" style={linkStyle}>MLB Teams</NavLink>
            <NavLink to="/" style={linkStyle}>All-Stars</NavLink>
            <NavLink to="/" style={linkStyle}>Add Team</NavLink>
            <NavLink to="/" style={linkStyle}>Add Player</NavLink>
        </nav>
    );
}

export default NavBar;