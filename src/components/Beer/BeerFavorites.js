import React from 'react'
import { Context } from '../../Context/Context'
export default function BeerFavorites() {
    const {
        cartIsOppen,
        seeCart,
        favorites
    } = useContext(Context)
    const favArray = {

    }
    const arrayOfFavorites = favorites.map(
        <div>


        </div>

    )
    return (
        <div>
            {arrayOfFavorites}
        </div>
    )
}
