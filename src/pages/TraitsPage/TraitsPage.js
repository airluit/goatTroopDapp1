import React, { useEffect } from 'react'
import goat1 from '../../assets/images/24.jpeg'
import goat2 from '../../assets/images/10.jpeg'
import './TraitsPageStyles.css'

const rarList = [
  { name: 'Backgounds', number: 12 },
  { name: 'Furs', number: 16 },
  { name: 'Clothing', number: 24 },
  { name: 'Mouths', number: 18 },
  { name: 'Face Traits', number: 12 },
  { name: 'Eyes', number: 13 },
  { name: 'Piercings', number: 12 },
  { name: 'Eyewear', number: 12 },
  { name: 'Horns', number: 12 },
  { name: 'Headwear', number: 22 },
]

function TraitsPage() {
  return (
    <div className="">
      <div className="header-text">Traits</div>

      <div className="traitContent">
        <div div className="imageContainerRel">
          <div className="imageContainer">
            <img className="traitImage1" src={goat1} />
            <img className="traitImage2" src={goat2} />
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
