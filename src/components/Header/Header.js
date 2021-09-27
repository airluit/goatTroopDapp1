import React from 'react'
import './HeaderStyles.css'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";


function Header() {
  return (
    <div className="header-wrapper">
      <nav className="nav-container">
          <Link className="menu-option" to="/goatTroopDapp1">Home</Link>
          <Link className="menu-option" to="/goatTroopDapp1?page=about">About</Link>
          <Link className="menu-option" to="/goatTroopDapp1?page=map">Roadmap</Link>
      </nav>
    </div>
  )
}

export default Header
