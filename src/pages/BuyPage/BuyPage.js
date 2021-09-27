import React, { useEffect } from 'react'
import MintHerePic from '../../assets/images/MintHere.png'
import './BuyPageStyles.css'

function BuyPage() {
  return (
    <div className="buy-page">
      <div className="header-text">Buy a Goat</div>
      <p>
        When going through our mint proces, people will connect to their own
        MetaMask wallet then will click a button that says “Mint Here.” After
        doing so, they will then choose how many they want to mint at a time.
        After each of the 13,000 (12,870 actually, giveaway 130) images get
        minted, we would like to have some sort of a tracker to let people know
        how many are left. For example, when project ‘Based Fish Mafia’ did
        their mint, they stated how many were left as people were buying them.
      </p>
      <img src={MintHerePic} />
    </div>
  )
}

export default BuyPage
