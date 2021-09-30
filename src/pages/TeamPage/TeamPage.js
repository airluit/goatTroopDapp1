import React, { useEffect } from 'react'
import goat1 from '../../assets/images/goatTeaser.png'
import discordIcon from '../../assets/images/discord.jpg'
import twitterIcon from '../../assets/images/twitterIcon.png'
import './TeamPageStyles.css'

function TeamPage() {
  return (
    <div className="">
      <div className="header-text">Team</div>
      <div className="gallery">
        <a>
          <img src={goat1} className="goat-image" />
        </a>
        <div className="desc">
          <h1>Vinny Gorgeous</h1>
          <p>
            Born in the Cleveland Mafia,
            <br />a retired snitch who is unable to keep a secret decided to
            join the military.
          </p>

          <div className="bottom-socials">
          <div className="social-container">
            <img className="discord-icon" src={discordIcon} />
            <div className="social-name">Discord Name</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name">Twitter Name</div>
          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={goat1} className="goat-image" />
        </a>
        <div className="desc">
          <h1>AirLuit</h1>
          <p>
            Busy piloting the Code Force high in the clouds,
            <br />
            spends his days getting into dog fights
            <br />
          </p>
          <div className="bottom-socials">
          <div className="social-container">
            <img className="discord-icon" src={discordIcon} />
            <div className="social-name">Discord Name</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name">Twitter Name</div>
          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={goat1} className="goat-image" />
        </a>
        <div className="michelobsBox desc">
          <h1>Michelob Ultras</h1>
          <p>
            Previously an AA member,
            <br />
            joined the military
            <br />
            for a more tight knit group.
          </p>
          <div className="bottom-socials">
          <div className="social-container">
            <img className="discord-icon" src={discordIcon} />
            <div className="social-name">Discord Name</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name">Twitter Name</div>
          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={goat1} className="goat-image" />
        </a>
        <div className="bulgingBox desc">
          <h1>Bulging Idiot</h1>
          <p>
            First in command in the Department of Art,
            <br />
            showing no mercy towards sleep.
          </p>
          <div className="bottom-socials">
          <div className="social-container">
            <img className="discord-icon" src={discordIcon} />
            <div className="social-name">Discord Name</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name">Twitter Name</div>
          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={goat1} className="goat-image" />
        </a>
        <div className="desc">
          <h1>NFTjoe</h1>
          <p>
            Joined the military because
            <br />
            he heard there was free pizza.
          </p>
          <div className="bottom-socials">
          <div className="social-container">
            <img className="discord-icon" src={discordIcon} />
            <div className="social-name">Discord Name</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name">Twitter Name</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
