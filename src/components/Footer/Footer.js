import React from 'react'
import { useState, useEffect } from 'react'
import infantryLogoGray from '../../assets/images/troopIfantryGray.jpeg'
import discordIcon from '../../assets/images/discord.jpg'
import twitterIcon from '../../assets/images/twitterIcon.png'
import openIcon from '../../assets/images/open.png'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'
import './FooterStyles.css'

const links = [
    { link: 'https://www.google.com', icon: discordIcon },
    { link: 'https://www.google.com', icon: twitterIcon },
    { link: 'https://www.google.com', icon: openIcon },
  ]

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="terms">Goat Troops Infantry</div>
      <div>
        <img className="infantry-icon" src={infantryLogoGray} />
      </div>
      <div className="terms-icons">
        {links.map((link) => (
          <img
            key={link.icon}
            src={link.icon}
            className="header-social-icon"
            onClick={() => {
              window.location.href = link.link
              return null
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Footer