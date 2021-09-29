import React, {useEffect} from 'react'
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
                    <h1>
                        Vinny Gorgeous</h1>
                    <p>
                        Born in the Cleveland Mafia,<br/>
                        a retired snitch who is unable to keep
                                              a secret decided to join the military.
                    </p>
                </div>
            </div>

            <div class="gallery">
                <a>
                    <img src={goat1}/>
                </a>
                <div class="desc">
                    <h1>AirLuit</h1>
                    <p>Busy piloting the Code Force high in the clouds,
                        <br/>
                        spends his days getting into dog fights<br/>
                    </p>


                </div>
            </div>

            <div class="gallery">
                <a>
                    <img src={goat1}/>
                </a>
                <div class="michelobsBox">
                    <h1>Michelob Ultras</h1>
                    <p>Previously an AA member,
                        <br/>
                        joined the military<br/>
                        for a more tight knit group.
                    </p>


                </div>
            </div>

            <div class="gallery">
                <a>
                    <img src={goat1}/>
                </a>
                <div class="bulgingBox">
                    <h1>Bulging Idiot</h1>
                    <p>First in command in the Department of Art,<br/>
                       showing no mercy towards sleep.
                       
                    </p>
                </div>
            </div>

            <div class="gallery">
                <a>
                    <img src={goat1}/>
                </a>
                <div class="desc">
                    <h1>NFTjoe</h1>
                    <p>Joined the military because<br/> 
                    he heard there was free pizza.</p>
                    <p></p>

                </div>
            </div>


        </div>
    )
}

export default TeamPage
