import React, { useState, Fragment } from 'react'
import ConfirmModal from './ConfirmModal';
export default function TablesBody({ items, chooseQuantity, deleteProp, toggleModales, oppenCloseModale }) {

    console.log(items.map(x => x));


    // const deleteTheProp = (e) => {
    //     deleteProp(e)
    // }
    const stopPropa = (e) => {
        e.stopPropagation()
    }
    return (
        <>
            {
                items.map((item, i) =>
                    (
                        <Fragment key={i}>
                            {
                                !toggleModales ?
                                    <tr key={i}>
                                        <td onClick={() => oppenCloseModale()}>{item.name} <span className="delete">X</span></td>
                                        <td>{item.price}</td>
                                        <td>
                                            <input type="number"
                                                name='quantity'
                                                onChange={(event) => chooseQuantity(event, i)}
                                                value={item.quantity > 0 ? item.quantity : ''}
                                            />
                                        </td>
                                        <td>{item.quantity > 0 ? item.price * item.quantity : 0}€</td>
                                    </tr>
                                    :
                                    <>
                                        <ConfirmModal
                                            key={i}
                                            close={oppenCloseModale}
                                            stopPropa={stopPropa}
                                            deleted={deleteProp}
                                            id={item.id}
                                        />
                                    </>
                            }
                        </Fragment>
                    )
                )
            }

        </>
    )
}
