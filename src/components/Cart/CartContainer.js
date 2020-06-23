import React, { useState, useEffect, useContext } from 'react';
import Form from './Form';
import TablesBody from './TablesBody';
import TableTotal from './TableTotal';
import TableHead from './TableHead';
import { Context } from '../../Context/Context'
import ConfirmModal from './../ConfirmModal';
import './CartContainer.css'

function CartContainer() {
    const {
        oppenCloseModale,
        changeTotalCart,
        deleteProp,
        addAProductToList,
        chooseQuantity,
        productList,
        toggleModales,
        setToggleModales,
        totalCart,
        seeCart
    } = useContext(Context)

    //https://punkapi.com/documentation/v2

    return (
        <div className="cartContainer" onMouseLeave={() => seeCart()}>
            <div className="headerCart">
                <h1>Mon Panier</h1>

            </div>
            <div className="bodyCart">
                <table >
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody >
                        <TablesBody
                            items={productList}
                            chooseQuantity={chooseQuantity}
                            deleteProp={deleteProp}
                            oppenCloseModale={oppenCloseModale}
                            toggleModales={toggleModales}
                        />
                    </tbody>
                    <tfoot>
                        <TableTotal
                            total={totalCart}
                        />
                    </tfoot>
                </table>
            </div>
            <div className="footerCart">
                <div className="btn">commander </div>
            </div>

            {
                toggleModales &&
                <ConfirmModal

                />
            }

        </div>
    );
}

export default CartContainer;
