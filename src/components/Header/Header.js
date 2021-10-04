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
  { link: '', text: 'Buy a Goat' },
  { link: '?page=map', text: 'Road Map' },
  { link: '?page=marching', text: ' Marching Orders ' },
  { link: '?page=team', text: 'Team' },
  { link: '?page=story', text: 'Story' },
  { link: '?page=traits', text: 'Traits' },
  { link: '?page=donations', text: 'Donations' },
]

const links = [
  { link: 'https://discord.gg/RXVF6gW8', icon: discordIcon },
  { link: 'https://twitter.com/GoattroopsNFT?s=20', icon: twitterIcon },
  /*{ link: 'https://www.google.com', icon: openIcon }, */
]

function Header() {
  const size = useWindowSize()

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="header-wrapper">
      <div className="logo">
        <Link className="logo" to="/">
          <img src={infantryLogoGray} />
        </Link>
      </div>
      {size.width > 1000 ? (
        <nav className="nav-container">
          {tabs.map((tab) => (
            <Link key={tab.text} className="menu-option" to={tab.link}>
              {tab.text}
            </Link>
          ))}
          <div className="social-icons">
            {links.map((link, ind) => (
              <img
                key={ind}
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
                  <Link key={tab.text} className="menu-option" to={tab.link}>
                    {tab.text}
                  </Link>
                </div>
              ))}
              <div className="social-icons">
                {links.map((link, ind) => (
                  <img
                    key={ind + 's'}
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
