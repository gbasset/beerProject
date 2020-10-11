import React, { useContext, useEffect, } from 'react'

import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import './FavoritesContainer.css'
export default function FavoritesContainer() {
    const {
        favorites,
        putFavoriteItem,
        redirect,
        addAProductToList,
        setRedirect
    } = useContext(Context)
    useEffect(() => {
        setRedirect(false)
    }, [])
    return (
        <>
            <h1 className="title_favorite">My Favorites</h1>
            <div className="favorites_container" >
                <div className="contain_list_favorites">

                    {
                        favorites && favorites.map((fav, i) =>
                            <div className="favorite_item" key={i}>
                                <img src={fav.picture} alt="beer" />
                                <div>
                                    <h1>{fav.name}</h1>
                                </div>
                                <div>
                                    <div className="price">{fav.price} €</div>
                                    <div className="btnCarte" onClick={(e) => addAProductToList(fav)}>Ajouter</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
