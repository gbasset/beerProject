import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../../Context/Context'
export default function FormOrderBilling({ setTheFormIsSent }) {
    const {
        order,
        setOrder,
        setTotalCart,
        setProductSelect,
        setProductList
    } = useContext(Context)

    const changeFormValue = (e) => {
        let oldOrder = { ...order }
        oldOrder[e.target.name] = e.target.value
        setOrder(oldOrder)
    }
    const submitTheForm = (e) => {
        e.preventDefault()
        setTheFormIsSent(true)
        setTotalCart(0)
        setProductSelect()
        setProductList([])
        localStorage.setItem('cartBeer', JSON.stringify([]))
    }

    return (
        <form >
            <h2>Billing information</h2>
            <div className="input-goupe-zone">
                <label htmlFor="first_name"> First Name</label>
                <input
                    className="input-text-name-zone"
                    id="first_name"
                    name="first_name"
                    type="text"
                    required
                    value={order.first_name ? order.first_name : ''}
                    onChange={(e) => changeFormValue(e)}
                />
            </div>
            <div className="input-goupe-zone">
                <label htmlFor="last_name">Last Name</label>
                <input
                    className="input-text-name-zone"
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    value={order.last_name ? order.last_name : ''}
                    onChange={(e) => changeFormValue(e)}
                />
            </div>
            <div className="input-goupe-zone">
                <label htmlFor="adress">Your adress</label>
                <input
                    className="input-text-name-zone"
                    id="adress"
                    name="adress"
                    type="text"
                    required
                    value={order.adress ? order.adress : ''}
                    onChange={(e) => changeFormValue(e)}
                />
            </div>
            <div className="input-goupe-zone">
                <label htmlFor="phone">Your Phone number</label>
                <input
                    className="input-text-name-zone"
                    id="phone"
                    name="phone"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                    value={order.phone ? order.phone : ''}
                    onChange={(e) => changeFormValue(e)}
                />
            </div>
            <div className="input-goupe-zone">
                <label htmlFor="name">Your Credit Card</label>
                <input
                    className="input-text-name-zone"
                    id="credit"
                    name="credit"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                //   value={zone.name ? zone.name : ''}
                //     onChange={(e) => handleChange(e, zone.zoneId)}
                />
            </div>
            <button type="submit" className="btnUi btn_primary" onClick={(e) => submitTheForm(e)}>submit</button>
        </form>
    )
}
