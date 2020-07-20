import React, { useContext, useEffect, useState } from 'react'
import './BeerItem.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';


export default function BeerItem({ beer }) {
    const {
        chargProduct,
        productSelect,
        addAProductToList,
        favorites,
        putFavoriteItem

    } = useContext(Context)
    const [favoriteArray, setFavoriteArray] = useState([])
    const [price, setPrice] = useState(0)
    const [item, setItem] = useState({ id: beer.id, name: beer.name, price: price, picture: beer.image_url, quantity: 1, total: 0 })
    const getPrice = () => {
        let newPrice = parseInt(Math.floor(Math.random() * Math.floor(5)));
        if (newPrice === 0) {
            getPrice()
        } else {
            setPrice(newPrice)
            setItem(prevState => ({ ...prevState, price: newPrice }))
        }
    }

    useEffect(() => {
        getPrice()
    }, [])
    useEffect(() => {
        let array = []
        favorites.forEach(x => {
            if (x.name === beer.name) {
                array.push(x.name)
            }
            return array
        })
        setFavoriteArray([...array])

    }, [favorites])
    return (
        <div>
            <div className="cartesGames" onClick={(e) => chargProduct(beer)} >
                <div
                    className={favoriteArray.includes(beer.name) ? 'heartFavContain' : 'heartFav'}
                    onClick={(e) => putFavoriteItem(beer)} >
                    {favoriteArray.includes(beer.name) ?
                        <FaHeart />
                        :
                        <FiHeart />
                    }
                </div>

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
                <div className="cardBodyGames" >
                    <Link className='lien' style={{ color: 'black' }}
                        to={{
                            pathname: `beer/${beer.id}${price}`,
                            state: {
                                Beer: beer,
                                item: item
                            }
                        }}>
                        <h5 className="titleBeer" onClick={(e) => chargProduct(beer)} > {beer.name}   </h5>
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
