import React, { useContext, useState } from 'react'
import './BeerItemContainer.css'
import { useParams, useLocation, Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
export default function BeerItemContainer({ match }) {
    const {
        chargProduct,
        productSelect,

    } = useContext(Context)

    let { slug } = useParams()
    const item = useLocation()
    console.log(item);

    console.log('productSelect', productSelect);


    return (
        <div className="beerItemContainer2">

            {productSelect &&
                <>
                    <div className="containerImg">
                        <img src={productSelect.image_url} alt="beer " className="pictureBeerItem" />
                    </div>

                    <div className="descriptionBeer">
                        <h2>{productSelect.name}</h2>
                        <h2>{productSelect.ingredients.yeast}</h2>
                        <h4>{productSelect.tagline}</h4>
                        <div className="bodyBeer">
                            <h3>Malt</h3>
                            <ul>{productSelect.ingredients.malt.map(
                                (x, index) => <li key={index} >{x.name} - {x.amount.value}  {x.amount.unit} </li>
                            )}</ul>
                            <h3>Hops</h3>
                            <ul>{productSelect.ingredients.hops.map(
                                (x, index) => <li key={index}>{x.name} - {x.amount.value}  {x.amount.unit} </li>
                            )}</ul>
                            <div className="price">{item.state.item.price} €</div>
                        </div>
                    </div>
                    <div className="tableau">

                    </div>

                </>
            }
        </div>



    )
}
