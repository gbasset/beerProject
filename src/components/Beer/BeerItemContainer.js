import React, { useContext, useState, useEffect } from 'react'
import './BeerItemContainer.css'
import { useParams, useLocation, Link, Redirect } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { AgGridReact } from 'ag-grid-react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
export default function BeerItemContainer({ match }) {
    const {
        chargProduct,
        productSelect,
        addAProductToList,
        favorites,
        putFavoriteItem
    } = useContext(Context)

    let { slug } = useParams()
    const item = useLocation()
    const [favoriteArray, setFavoriteArray] = useState([])
    const [redirectToHome, setRedirectToHome] = useState(false)
    useEffect(() => {
        let array = []
        favorites.forEach(x => {
            if (productSelect && x.name === productSelect.name) {
                array.push(x.name)
            }
            return array
        })
        setFavoriteArray([...array])

    }, [favorites])
    useEffect(() => {
        if (!item.state) {
            setRedirectToHome(true)
        }
    }, [])
    if (redirectToHome) {
        return <Redirect push to="/home" />
    }
    return (
        <>
            <div className="beerItemContainer2">

                {productSelect &&
                    <>

                        <div className="containerImg">
                            <img src={productSelect.image_url} alt="beer " className="pictureBeerItem" />
                        </div>

                        <div className="descriptionBeer">
                            <div
                                className={favoriteArray.includes(productSelect.name) ? 'heartFavContain' : 'heartFav'}
                                onClick={(e) => putFavoriteItem({ productSelect, ...item.state.item })} >
                                {favoriteArray.includes(productSelect.name) ?
                                    <FaHeart />
                                    :
                                    <FiHeart />
                                }
                            </div>
                            <h2>{productSelect.name}</h2>
                            <h2>{productSelect.ingredients.yeast}</h2>
                            <h4>{productSelect.tagline}</h4>
                            <div className="bodyBeer">
                                <h3>Malt</h3>
                                <ul>{productSelect.ingredients.malt.map(
                                    (x, index) => <li key={index} >{x.name} - {x.amount.value}  {x.amount.unit} </li>
                                )}</ul>
                                <h5>{productSelect.abv}° Alcool By Volume </h5>
                                <div className="price">{item.state && item.state.item.price} €</div>
                                <div className="btnCarte" onClick={(e) => addAProductToList(item.state.item)}>Add</div>
                            </div>
                        </div>
                    </>
                }
            </div>
            <div className="tableau">
                <div>

                    {productSelect &&
                        <>
                            <h3>Hops</h3>
                            <ul>{productSelect.ingredients.hops.map(
                                (x, index) => <li key={index}>{x.name} - {x.amount.value}  {x.amount.unit} </li>
                            )}</ul>
                        </>
                    }
                </div>
                <div>
                    {productSelect &&
                        <>
                            <h2>Description </h2>
                            <p>{productSelect.description}</p>
                            <h3>Goes perfectly with</h3>
                            <ul>{productSelect.food_pairing.map(
                                (x, index) => <li key={index}>{x}</li>
                            )}</ul>
                        </>
                    }
                </div>

            </div>
        </>



    )
}
