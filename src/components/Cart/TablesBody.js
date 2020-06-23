import React, { useState, Fragment } from 'react'
import ConfirmModal from '../ConfirmModal';
export default function TablesBody({ items, chooseQuantity, deleteProp, toggleModales, oppenCloseModale }) {

    return (
        <>
            {
                items.map((item, i) =>
                    (
                        <Fragment key={i}>
                            <tr >
                                <td onClick={(e) => oppenCloseModale(item.id)}>  <img src={item.picture} width="10px" alt="" /> {item.name} <span className="delete">X</span></td>
                                <td>{item.price} €</td>
                                <td>
                                    <input
                                        type="number"
                                        name='quantity'
                                        onChange={(event) => chooseQuantity(event, i, item.id)}
                                        value={item.quantity > 0 ? item.quantity : ''}
                                        className="qteInput"
                                    />
                                </td>
                                <td>{item.quantity > 0 ? item.price * item.quantity : 0}€</td>
                            </tr>

                        </Fragment>
                    )
                )
            }

        </>
    )
}
