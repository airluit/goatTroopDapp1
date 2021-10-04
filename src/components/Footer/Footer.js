import React from 'react'
import { useState, useEffect } from 'react'
import infantryLogoGray from '../../assets/images/troopIfantryGray.jpeg'
import discordIcon from '../../assets/images/discord.jpg'
import twitterIcon from '../../assets/images/twitterIcon.png'
import openIcon from '../../assets/images/open.png'
import calIcon from '../../assets/images/nft-calendar-transparent.png'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'
import './FooterStyles.css'

const links = [
  { link: 'https://discord.gg/RXVF6gW8', icon: discordIcon },
  { link: 'https://twitter.com/GoattroopsNFT?s=20', icon: twitterIcon },
  { link: 'https://nftcalendar.io/event/goat-troops-infantry/', icon: calIcon}
]
  /*{ link: 'https://www.google.com', icon: openIcon }, */

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="terms">Goat Troops Infantry</div>
      <div>
        <img className="infantry-icon" src={infantryLogoGray} />
        
        <img className="nft-icon" src={calIcon} /> 
        <div className="nft-icon"><a style={{'color' : 'white'}} href="https://nftcalendar.io/event/goat-troops-infantry/">NFT calendar</a></div>
        <div className="terms-footer-wrapper">
          <div className="terms-footer">
            By purchasing a Goat Troop you will hold all commercial rights to
            your # Goat Troop.
          </div>
        </div>
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
