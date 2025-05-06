import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <h2 className='navbar-logo'>TechVerse</h2>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
