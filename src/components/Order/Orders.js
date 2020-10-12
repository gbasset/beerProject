import React, { useState, useContext, useEffect } from 'react'
import './Orders.css'
import FormOrderBilling from './FormOrderBilling';
import { Context } from '../../Context/Context'

import { Link, Redirect } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs';
import { IoMdArrowRoundBack } from 'react-icons/io';
import ConfirmModal from './../ConfirmModal';
export default function Orders() {
    const {

        changeTotalCart,
        deleteProp,
        setToggleModales,
        toggleModales,
        chooseQuantity,
        productList,
        putFavoriteItem,
        addAProductToList,
        totalCart,
        seeCart,
        order,
        setRedirectCart
    } = useContext(Context)

    const [oppenTheForm, setOppenTheForm] = useState(false);
    const [oppenModal, setOppenModal] = useState(false);
    const [itemToPut, setItemToPut] = useState();
    const [theFormIsSent, setTheFormIsSent] = useState(false);
    useEffect(() => {
        setRedirectCart(false)
    }, [])
    return (

        <div className="container_order">
            {
                toggleModales &&
                <ConfirmModal

                />
            }
            {
                oppenModal &&
                <ConfirmModal
                    closeModal={() => setOppenModal(false)}
                    id={itemToPut}
                />
            }

            <div className="container_order_box">
                <h1>Your Order</h1>
                {
                    !oppenTheForm &&

                    <div className="contain_list_favorites">
                        {
                            productList && productList.map((fav, i) =>
                                <div className="favorite_item" key={i}>
                                    <div className="trash_item"
                                        onClick={(e) => { setOppenModal(true); setItemToPut(fav.id) }} >
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
                                        <input
                                            type="number"
                                            name='quantity'
                                            onChange={(event) => chooseQuantity(event, i, fav.id)}
                                            value={fav.quantity > 0 ? fav.quantity : ''}
                                            className="qteInput"
                                        />
                                        <div className="price">{fav.price} €</div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="price"> Total {totalCart} €</div>
                        <div className="btnUi btn_primary" onClick={() => setOppenTheForm(true)}> Order now</div>
                    </div>}
                <div>
                </div>
                {
                    oppenTheForm && !theFormIsSent &&
                    <>
                        <div className="return_btn" onClick={() => setOppenTheForm(false)}> <IoMdArrowRoundBack /></div>
                        <FormOrderBilling
                            setTheFormIsSent={(e) => setTheFormIsSent(true)}
                        />
                    </>
                }
                {
                    theFormIsSent &&
                    <>
                        <div className="order_message">
                            <p>Thank you for your order {order.first_name} {order.last_name} !</p>
                            <p>You will soon receive a summary of the order by email .</p>
                        </div>
                        <Link to="/" className="lien" >
                            <div
                                className="btnUi btn_primary"
                                style={{ marginTop: "34px" }}
                            >
                                Go to Home
                        </div>
                        </Link>
                    </>
                }
            </div>
        </div >
    )
}
