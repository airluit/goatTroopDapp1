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
                  <p>Born in the Cleveland Mafia. A retired snitch. Unable to keep a secret .</p>
                </div>
            </div>

            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>AirLuit</h1>
                  <p>BS in CS with an upstairs office. Flies like he stole the plane</p>
                </div>
            </div>

            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>Michelob Ultras</h1>
                  <p>Previously an AA member, joined the military for a tight knit group.</p>
                </div>
            </div>

            <div class="gallery">
                <a>
                <img src={goat1}/>
                </a>
               <div class="desc">
                  <h1>Bulging Idiot</h1>
                  <p>our accomplished off the grid artist </p>
                </div>
            </div>

            
    </div>
  )
}

export default TeamPage
