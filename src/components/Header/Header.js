import React from 'react'
import './HeaderStyles.css'

function Header() {
  return (
    <div className="header-wrapper">
      <nav className="nav-container">
          <a className="menu-option" href="troops1/"> Home </a>
          <a className="menu-option" href="troops1/about"> About </a>
          <a className="menu-option" href="troops1/roadmap"> Roadmap </a>
          <a className="menu-option" href="troops1/about"> change </a>
      </nav>
    </div>
  )
}

export default Header
