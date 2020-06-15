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
        <div className="cartContainer">
            <div className="headerCart">
                <h1>Ma commande</h1>
                <button id="btn" class="btn" onClick={seeCart}>Fermer</button>
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
                <div className="btn">commander {totalCart} €</div>
            </div>
            {/* <Form
                addAProductToList={addAProductToList}
                length={productList.length}
            /> */}
            {
                toggleModales &&
                <>
                    <ConfirmModal
                    //key={i}
                    // close={oppenCloseModale}
                    // stopPropa={stopPropa}
                    // deleted={deleteProp}
                    // id={item.id}
                    />
                </>
            }

        </div>
    );
}

export default CartContainer;
