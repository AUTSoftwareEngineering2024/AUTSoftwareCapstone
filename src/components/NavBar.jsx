import { NavLink } from 'react-router-dom'
import React from 'react'
export default function NavBar() {
return (
<nav className="NavBar">
<ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/dash">Dashboard</NavLink></li>
<li><NavLink to="/about">About</NavLink></li>
<li><NavLink to="/form">Form</NavLink></li>
</ul> {/* ++ Add another page with route and component */}
</nav>
)
}