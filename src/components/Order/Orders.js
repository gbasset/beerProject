import React, { useState, useContext, } from 'react'
import './Orders.css'
import FormOrderBilling from './FormOrderBilling';
import { Context } from '../../Context/Context'

import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs';
export default function Orders() {
    const {

        changeTotalCart,
        deleteProp,
        chooseQuantity,
        productList,
        putFavoriteItem,
        addAProductToList,
        totalCart,
        seeCart
    } = useContext(Context)
    console.log("productList", productList);
    return (

        <div className="container_order">

            <div className="container_order_box">
                <h1>Your Order</h1>
                <div className="contain_list_favorites">

                    {
                        productList && productList.map((fav, i) =>
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
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <button> Order now</button>
                </div>
                <FormOrderBilling />
            </div>
        </div>
    )
}
