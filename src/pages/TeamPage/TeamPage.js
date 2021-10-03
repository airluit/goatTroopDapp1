import React, { useEffect } from 'react'
import goat1 from '../../assets/images/goatTeaser.png'
import discordIcon from '../../assets/images/discord.jpg'
import twitterIcon from '../../assets/images/twitterIcon.png'


import AirGoat from '../../assets/images/teamGoats/air.jpeg'
import VinGoat from '../../assets/images/teamGoats/vin.jpeg'
import BulGoat from '../../assets/images/teamGoats/bul.jpg'
import MicGoat from '../../assets/images/teamGoats/mic.jpg'
import TinGoat from '../../assets/images/teamGoats/tin.jpg'
import JoeGoat from '../../assets/images/teamGoats/joe.jpg'



import './TeamPageStyles.css'

function TeamPage() {
  return (
    <div className="teampage">
      <div className="header-text">Team</div>
      <div className="gallery">
        <a>
          <img src={VinGoat} className="goat-image" />
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
            <div className="social-name">VinnyGorgeous#2108</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name"><a href="https://twitter.com/GoattroopsNFT?s=20">Twitter </a></div>
          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={AirGoat} className="goat-image" />
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
            <div className="social-name">AirLuit#5452</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name"><a href="https://twitter.com/airluit">@airluit </a></div>
          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={MicGoat} className="goat-image" />
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
            <div className="social-name">MichelobUltras#2492</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name"><a href="https://twitter.com/MichelobUltras?s=20">@MichelobUltras</a></div>

          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={BulGoat} className="goat-image" />
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
            <div className="social-name">Bulging Idiot#8623</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name"><a href="https://twitter.com/bulgingidiot?s=20">@bulgingidiot</a></div>
          </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <a>
          <img src={JoeGoat} className="goat-image" />
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
            <div className="social-name">NFTjoe#6274</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name"> <a href=" https://twitter.com/NFTjoe?s=20"> @NFTJoe</a></div>
           

          </div>
          </div>
        </div>
      </div>


      <div className="gallery">
        <a>
          <img src={TinGoat} className="goat-image" />
        </a>
        <div className="desc">
          <h1>CrimsonTian</h1>
          <p style={{'color' : 'black'}}>
            lvl. 6 wizard. Joined the military for more experience in the field.
          </p>
          <div className="bottom-socials">
          <div className="social-container">
            <img className="discord-icon" src={discordIcon} />
            <div className="social-name">Discord Name</div>
            <img className="discord-icon" src={twitterIcon} />
            <div className="social-name"> <a href="https://twitter.com/GoattroopsNFT?s=20">Twitter </a></div>

            
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
