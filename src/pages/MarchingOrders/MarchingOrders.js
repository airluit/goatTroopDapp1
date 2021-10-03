import React, { useEffect } from 'react'
import MintHerePic from '../../assets/images/MintHere.png'
import './MarchingOrdersStyles.css'

function MarchingOrders() {
  return (
    <div className="buy-page">
      <div className="header-text">Marching Orders</div>
      <div className="marchAdds">
        <h1>Features</h1>
        <p>
        <ul>
            <li>-Stats: Health (HP), Attack (ATK), Defense (DEF) </li>
            <li>-Toxic Waste Spill (Airdrop)</li>
            <li>-Military Arsenal Unlocked (Airdrop) </li>
            <li>-Big Announcement after both airdrops! </li>
            <li>-Merchandise </li>
        </ul>
        </p>
      </div>

      <div className="marchAdds">
        <h1>Community DOA</h1>
        <p> With the retirement of General Harold Ransom. The Goat Troops are left to decide the next best course of action. 
            Holders of Goat Troop Infantry decide their own fate:
        <ul>
            <li>-Civil War</li>
            <li>-Battle of the Bulging Idiot  </li>
            <li>-Factions! </li>
        </ul>
        </p>
      </div>
    </div>
  )
}

export default MarchingOrders
