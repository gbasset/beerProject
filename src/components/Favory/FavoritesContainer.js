import React, { useContext, useEffect, } from 'react'

import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import './FavoritesContainer.css'
export default function FavoritesContainer() {
    const {
        favorites,
        putFavoriteItem,
        redirect,
        setRedirect
    } = useContext(Context)
    console.log("favorites", favorites);
    useEffect(() => {
        setRedirect(false)
    }, [])
    return (
        <div className="favorites_container" >
            {
                favorites && favorites.map((fav, i) =>
                    <div className="favorite_item" key={i}>
                        <img src={fav.image_url} alt="beer" />
                        <div>
                            <h1>{fav.name}</h1>

                        </div>
                    </div>
                )
            }
        </div>
    )
}
