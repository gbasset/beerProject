import React, { useContext } from 'react'
import './BeerItemContainer.css'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Context } from '../../Context/Context'
export default function BeerItemContainer({ match }) {
    const {
        chargProduct,
        productSelect
    } = useContext(Context)
    let { slug } = useParams()
    const test = useLocation()
    console.log(match.params.price);

    console.log('productSelect', productSelect);

    return (
        <div className="beerItemContainer2">

            <div className="contain">
                {productSelect &&
                    <>
                        <div className="headerBeerItem">
                            <div className="containerImg">
                                <img src={productSelect.image_url} alt="beer " className="pictureBeerItem" />
                            </div>
                            <div className="descriptionBeer">
                                <h1>{productSelect.name}</h1>
                                <h5>{productSelect.tagline}</h5>
                                {productSelect.ingredients.yeast}
                                <div className="bodyBeer">
                                    <h3>Malt</h3>
                                    <ul>{productSelect.ingredients.malt.map(
                                        (x, index) => <li key={index} >{x.name} - {x.amount.value}  {x.amount.unit} </li>
                                    )}</ul>
                                    <h3>Hops</h3>
                                    <ul>{productSelect.ingredients.hops.map(
                                        (x, index) => <li key={index}>{x.name} - {x.amount.value}  {x.amount.unit} </li>
                                    )}</ul>
                                    <div className="price">{match.params.price} €</div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>


        </div>
    )
}
