import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs';

import { Context } from '../../Context/Context'
import './FavoritesContainer.css'
export default function FavoritesContainer() {
    const {
        favorites,
        putFavoriteItem,
        redirect,
        addAProductToList,
        setRedirect,
        productSelect
    } = useContext(Context)
    useEffect(() => {
        setRedirect(false)
    }, [])

    const [favoriteArray, setFavoriteArray] = useState([])
    useEffect(() => {
        let array = []
        if (favorites && productSelect) {
            favorites.forEach(x => {
                if (x.name === productSelect.name) {
                    array.push(x.name)
                }
                return array
            })
            setFavoriteArray([...array])
        }

    }, [favorites])
    return (
        <>
            <h1 className="title_favorite">My Favorites</h1>
            <div className="favorites_container" >
                <div className="contain_list_favorites">

                    {
                        favorites && favorites.map((fav, i) =>
                            <div className="favorite_item" key={i}>
                                <div className="trash_item"
                                    onClick={(e) => putFavoriteItem(fav)} >
                                    <BsFillTrashFill />
                                </div>
                                <img src={fav.picture} alt="beer" />

                                <div className="titleBeerFav">
                                    <Link className='lien' style={{ color: 'black' }}
                                        to={{
                                            pathname: `beer/${fav && fav.id}${fav.price}`,
                                            state: {
                                                Beer: fav.Beer,
                                                item: fav
                                            }
                                        }}>

                                        <h1>{fav.name}</h1>
                                    </Link>
                                </div>
                                <div>
                                    <div className="price">{fav.price} €</div>
                                    <div className="btnCarte" onClick={(e) => addAProductToList(fav)}>Add</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
