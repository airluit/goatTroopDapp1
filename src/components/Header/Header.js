import React from 'react'
import { useState, useEffect } from 'react'
import './HeaderStyles.css'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import discordIcon from '../../assets/images/discord.jpg'
import twitterIcon from '../../assets/images/twitterIcon.png'
import openIcon from '../../assets/images/open.png'
import infantryLogoGray from '../../assets/images/troopIfantryGray.jpeg'
import MenuIcon from '@mui/icons-material/Menu'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'

const tabs = [
  { link: '/goatTroopDapp1', text: 'Home' },
  { link: '/goatTroopDapp1?page=buy', text: 'Buy a Goat' },
  { link: '/goatTroopDapp1?page=map', text: 'Roadmap' },
  { link: '/goatTroopDapp1?page=team', text: 'Team' },
  { link: '/goatTroopDapp1?page=phase2', text: 'Story' },
  { link: '/goatTroopDapp1?page=gallery', text: 'Gallery' },
  { link: '/goatTroopDapp1?page=terms', text: 'Terms & Conditions' },
  { link: '/goatTroopDapp1?page=donations', text: 'Donations' },
]

const links = [
  { link: 'https://www.google.com', icon: discordIcon },
  { link: 'https://www.google.com', icon: twitterIcon },
  { link: 'https://www.google.com', icon: openIcon },
]

function Header() {
  const size = useWindowSize()

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={infantryLogoGray} />
      </div>
      {size.width > 1090 ? (
        <nav className="nav-container">
          {tabs.map((tab) => (
            <Link key={tab.text} className="menu-option" to={tab.link}>
              {tab.text}
            </Link>
          ))}
          <div className="social-icons">
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
        </nav>
      ) : (
        <div className="icon-button-container ">
          <IconButton
            className="icon-button"
            edge="start"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={'right'}
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className="drawer-mui">
              {tabs.map((tab) => (
                <div className="drawer-item">
                  <Link key={tab.text}  className="menu-option" to={tab.link}>
                    {tab.text}
                  </Link>
                </div>
              ))}
              <div className="social-icons">
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
          </Drawer>
        </div>
      )}
    </div>
  )
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export default Header
