import React from 'react'
import './HeaderStyles.css'

function Header() {
  return (
    <div className="header-wrapper">
      <nav className="nav-container">
          <a className="menu-option" href="/"> Home </a>
          <a className="menu-option" href="about"> About </a>
          <a className="menu-option" href="roadmap"> Roadmap </a>
          <a className="menu-option" href="about"> change </a>
      </nav>
    </div>
  )
}

export default Header
