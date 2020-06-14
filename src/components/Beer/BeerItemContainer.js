import React, { useContext } from 'react'
import './BeerItemContainer.css'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Context } from '../../Context/Context'
export default function BeerItemContainer() {
    const {
        chargProduct,
        productSelect
    } = useContext(Context)
    let { slug } = useParams()
    const test = useLocation()
    console.log("slug", slug);
    console.log("test", test.state);
    console.log(productSelect);

    const [beer, setBeer] = useState()

    // useEffect(() => {
    //     setBeer(test.state)
    //     console.log('heere');

    // }, [])
    // console.log("beer", beer);

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
                                    <p></p>

                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>


        </div>
    )
}
