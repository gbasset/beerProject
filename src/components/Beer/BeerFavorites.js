import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import './BeerFavorites.css'
export default function BeerFavorites() {
    const {
        cartIsOppen,
        seeCart,
        favorites
    } = useContext(Context)
    const favArray = {

    }

    return (
        <div className="itemFavortiteContainer" >
            {favorites.map(item =>
                <div className="itemFavorite" key={item.id} >
                    <img className="imgFavoriteItem" src={item.image_url} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            )
            }
        </div >
    )
}
