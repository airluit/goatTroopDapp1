import React, { useEffect } from 'react'
import MintHerePic from '../../assets/images/MintHere.png'
import './BuyPageStyles.css'

function BuyPage() {
  return (
    <div className="buy-page">
      <div className="header-text">What's in store</div>
      <div className="marchAdds">
        <h1>Features</h1>
        <p>
        <ul>
            <li>Stats: HP, ATK, DEF </li>
            <li>Toxic Waste Spill Storyline with Airdrop </li>
            <li> Armory Unlocked Weapons with Airdrop Merchandise </li>
        </ul>
        </p>
      </div>

      <div className="marchAdds">
        <h1>Community DOA</h1>
        <p> With the retirement of General Harold Ransom. The Goat Troops are left to decide the next best course of action. 
            Holders of Goat Troop Infantry decide their own fate:
        <ul>
            <li>Civil War</li>
            <li>Battle of the Bulging Idiot  </li>
            <li>Factions! </li>
        </ul>
        </p>
      </div>
    </div>
  )
}

export default BuyPage
