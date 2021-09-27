import React from 'react'
import './HeaderStyles.css'

function Header() {
  return (
    <div className="header-wrapper">
      <nav className="nav-container">
          <a className="menu-option" href="goatTroopDapp1/"> Home </a>
          <a className="menu-option" href="goatTroopDapp1/about"> About </a>
          <a className="menu-option" href="goatTroopDapp1/road"> Roadmap </a>
      </nav>
    </div>
  )
}

export default Header
