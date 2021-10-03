import React, { useEffect } from 'react'
import AirGoat from '../../assets/images/teamGoats/air.jpeg'
import VinGoat from '../../assets/images/teamGoats/vin.jpeg'
import './TraitsPageStyles.css'

const rarList = [
  { name: 'Backgounds', number: 0 },
  { name: 'Furs', number: 0 },
  { name: 'Clothing', number: 0 },
  { name: 'Mouths', number: 0 },
  { name: 'Face Traits', number: 0 },
  { name: 'Eyes', number: 0 },
  { name: 'Piercings', number: 0 },
  { name: 'Eyewear', number: 0 },
  { name: 'Horns', number: 0 },
  { name: 'Headwear', number: 0 },
]

function TraitsPage() {
  return (
    <div className="">
      <div className="header-text">Check doc for whats coming here</div>

      <div className="traitContent">
        <div div className="imageContainerRel">
          <div className="imageContainer">
            <img className="traitImage1" src={AirGoat} />
            <img className="traitImage2" src={VinGoat} />
          </div>
        </div>
        <div className="traitContainer">
          <div className="traitHeader">Rarity</div>
          {rarList.map((trait) => (
            <div className="traitRow">
              <div>{trait.number}</div>
              <div className="traitName">{trait.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TraitsPage
