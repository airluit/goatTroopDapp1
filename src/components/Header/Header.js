import React from 'react'
import './HeaderStyles.css'
import infantryLogo from '../../assets/images/troopsIfantry.png'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'

function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo"><img src={infantryLogo}/></div>
      <nav className="nav-container">
        <Link className="menu-option" to="/goatTroopDapp1">
          Home
        </Link>
        <Link className="menu-option" to="/goatTroopDapp1?page=buy">
          Buy a Goat
        </Link>
        <Link className="menu-option" to="/goatTroopDapp1?page=map">
          Roadmap
        </Link>
        <Link className="menu-option" to="/goatTroopDapp1?page=team">
          Team
        </Link>
        <Link className="menu-option" to="/goatTroopDapp1?page=phase2">
          Phase II
        </Link>
        <Link className="menu-option" to="/goatTroopDapp1?page=gallery">
          Gallery
        </Link>
        <Link className="menu-option" to="/goatTroopDapp1?page=terms">
          {'Terms & Conditions'}
        </Link>
        <Link className="menu-option" to="/goatTroopDapp1?page=donations">
          Donations
        </Link>
        <div className="social-icons">social icons</div>
      </nav>
    </div>
  )
}

export default Header
