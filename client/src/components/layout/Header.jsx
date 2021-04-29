import React from "react"

const Header = () => {
  return (
    <nav className="navbar bg-dark">
      <a href="dashboard.html">
        <i className="fas fa-code"></i>
        A3CON
      </a>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
        <li className="initials">
          <a href="login.html">N</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
