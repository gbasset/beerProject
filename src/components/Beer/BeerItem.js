import React, { useContext } from 'react'
import './BeerItem.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
export default function BeerItem({ beer }) {
    const {
        chargProduct,
        productSelect,
        addAProductToList

    } = useContext(Context)
    const item = { id: beer.id, name: beer.name, price: 54, quantity: 1, total: 0 }
    return (
        <div>
            <div className="cartesGames" onClick={(e) => chargProduct(beer)} >
                <Link className='lien'
                    to={{
                        pathname: "beer/" + beer.id,
                        state: {
                            Beer: beer
                        }
                    }}>
                    <div className="containerImgBeer">
                        <img src={beer.image_url} alt="Package Beer" className="imgCarte" />
                    </div>
                </Link>
                <div className="cardBodyGames">
                    <Link style={{ textDecoration: 'none', color: 'black' }}
                        to={{
                            pathname: "beer/" + beer.id,
                            state: {
                                Beer: beer
                            }
                        }}>
                        <h5 className="titleBeer"> {beer.name}   </h5>
                    </Link>
                    <legend>  {beer.tagline}</legend>

                    <p className="tipsBeer">{beer.brewers_tips}</p>
                    {/* <Link className='lien'
                        to={{
                            pathname: "beer/" + beer.id,
                            state: {
                                Beer: beer
                            }
                        }}> */}
                    <div className="btnCarte" onClick={(e) => addAProductToList(item)}> Ajouter </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}
