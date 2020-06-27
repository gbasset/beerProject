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
        productSelect
    } = useContext(Context)
    let { slug } = useParams()
    const test = useLocation()
    console.log(match.params.price);

    console.log('productSelect', productSelect);
    const [columnDefs, setColumnDefs] = useState([{
        headerName: "Make", field: "make", sortable: true, filter: true, width: 300,
    }, {
        headerName: "Model", field: "model", sortable: true, filter: true, width: 300,
    }, {
        headerName: "Price", field: "price", sortable: true, filter: true, width: 300,
    },


    ])

    const [rowData, setRowData] = useState([{
        make: "Toyota", model: "Celica", price: 35000
    }, {
        make: "Ford", model: "Mondeo", price: 32000
    },
    {
        make: "Porsche", model: "Boxter", price: 72000
    },
    {
        make: "Deudeuche", model: "zizi", price: 72000
    },
    {
        make: "Cuic", model: "COINCOIN", price: 728700
    }

    ])

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
                            <div className="price">{match.params.price} €</div>
                        </div>
                    </div>
                    <div className="tableau">
                        <div
                            className="ag-theme-alpine"
                            style={{
                                height: '450px',
                                // maxHeight: '800px',
                                width: '900px'
                            }}
                        >
                            <AgGridReact
                                columnDefs={columnDefs}
                                rowData={rowData}

                            >
                            </AgGridReact>
                        </div>
                    </div>

                </>
            }
        </div>



    )
}
