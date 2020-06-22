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
    let price
    if (beer.abv < 5) {
        price = 5
    }
    else if (beer.abv > 5) {
        price = 10
    }
    const item = { id: beer.id, name: beer.name, price: price, picture: beer.image_url, quantity: 1, total: 0 }
    return (
        <div>
            <div className="cartesGames" onClick={(e) => chargProduct(beer)} >
                <Link className='lien'
                    to={{
                        pathname: `beer/${beer.id}${price}`,
                        state: {
                            Beer: beer,
                            item: item
                        }
                    }}>
                    <div className="containerImgBeer">
                        <img src={beer.image_url} alt="Package Beer" className="imgCarte" />
                    </div>
                </Link>
                <div className="cardBodyGames">
                    <Link style={{ textDecoration: 'none', color: 'black' }}
                        to={{
                            pathname: `beer/${beer.id}/${price}`,

                            state: {
                                Beer: beer,
                                item: item
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
