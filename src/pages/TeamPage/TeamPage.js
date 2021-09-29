import React, { useEffect } from 'react'
import './TeamPageStyles.css'
import goat1 from '../../assets/images/goatTeaser.png'


function TeamPage() {
  return (
    <div className="">
        <div className="header-text">Team</div>
            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>Vinny Gorgeous</h1>
                  <p>Born in the Cleveland Mafia. A retired snitch. Unable to keep a secret.</p>
                </div>
            </div>

            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>AirLuit</h1>
                  <p>Piloting the Coding Force, Air Luit is often flying high in the clouds. 
                     His days are spent in dog fights leading his troops through the skies 
                     with brilliant success.</p>
                  <p><i class="fab fa-discord"> @AirLuit</i></p>
                    
                </div>
            </div>

            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>Michelob Ultras</h1>
                  <p>Previously an AA member, joined the military for a more tight knit group.</p>
                  
                </div>
            </div>

            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>Bulging Idiot</h1>
                  <p>First in command of the art department,<br/>
                    General Bulging Idiot shows no mercy towards sleep </p>
                </div>
            </div>

            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>NFTjoe</h1>
                  <p>Joined because we said there was free pizza.</p>
                  <p><i class="fab fa-discord"> @NFTjoe</i></p>
                    
                </div>
            </div>

            
    </div>
  )
}

export default TeamPage
