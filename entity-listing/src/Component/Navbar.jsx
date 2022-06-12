import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    const activeStyle = { color: "red", textDecoration: "none" };

    return (
        <>

            <nav style={{ display: "flex", gap: "2rem", justifyContent: "center", margin: "20px" }}>


                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/" > Home </NavLink>




                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/movies" >Movies</NavLink>

                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/about" >About</NavLink>

            </nav>



        </>
    )
}

export default NavBar
