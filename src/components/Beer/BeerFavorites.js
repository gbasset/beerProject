import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
export default function BeerFavorites() {
    const {
        cartIsOppen,
        seeCart,
        favorites
    } = useContext(Context)
    const favArray = {

    }
    const arrayOfFavorites = favorites.map(item =>

        <div className="" key={item.id}>
            {/* <img src={item.image_url} alt="" /> */}

        </div >

    )
    return (
        <div>
            {arrayOfFavorites}
        </div>
    )
}
