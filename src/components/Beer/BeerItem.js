import React from 'react'
import './BeerItem.css'
export default function BeerItem({ beer }) {
    return (
        <div>
            <div className="cartesGames" >
                <div className="containerImgBeer">
                    <img src={beer.image_url} alt="Package Beer" className="imgCarte" />
                </div>
                <div className="cardBodyGames">
                    <h5 className="titleBeer"> {beer.name}   </h5>
                    <legend>  {beer.tagline}</legend>

                    <p className="tipsBeer">{beer.brewers_tips}</p>
                    {/* <Link className='lien'
                                to={{
                                    pathname: "game/" + game.name,
                                    state: {
                                        gameID: game.id
                                    }
                                }}>
                                <div className="btnCarte"> Regarder {game.name}</div>
                            </Link> */}
                </div>
            </div>
        </div>
    )
}
