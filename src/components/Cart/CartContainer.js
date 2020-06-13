import React, { useState, useEffect, useContext } from 'react';
import Form from './Form';
import TablesBody from './TablesBody';
import TableTotal from './TableTotal';
import TableHead from './TableHead';
import { Context } from '../../Context/Context'
import ConfirmModal from './../ConfirmModal';


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
        totalCart
    } = useContext(Context)

    // const [productList, setProductList] = useState([
    //     { id: 1, name: 'produit 1', price: 50, quantity: 1, },
    //     { id: 2, name: 'produit 2', price: 75, quantity: 2, },
    //     { id: 3, name: 'produit 3', price: 20, quantity: 5, }
    // ])
    // const [totalCart, setTotalCart] = useState(0)
    // const [toggleModales, setToggleModales] = useState(false)

    // const chooseQuantity = (event, index) => {
    //     const newProductList = productList
    //     if (typeof newProductList[index].quantity === isNaN) {
    //         return
    //     }
    //     else {
    //         if (event.target.value < 1 || event.target.value.length === 0) {
    //             setToggleModales(true)
    //         }
    //         else {
    //             newProductList[index].quantity = parseInt(event.target.value)
    //             newProductList[index].total = parseInt(newProductList[index].quantity * newProductList[index].price)
    //             setProductList([...newProductList])
    //         }
    //     }
    // }
    // const addAProductToList = (element) => {
    //     setProductList([...productList, element])
    // }

    // const deleteProp = (x, close) => {
    //     console.log('item', x);
    //     let array = productList.filter(element => element.id !== x)
    //     setProductList([...array])
    //     if (close) {
    //         close()
    //     }
    // }

    // const changeTotalCart = (array) => {
    //     let total = []
    //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //     array.forEach(x =>
    //         total.push(x.quantity * x.price))
    //     setTotalCart(total.reduce(reducer))
    // }
    // useEffect(() => {
    //     changeTotalCart(productList)
    // }, [productList])


    // const oppenCloseModale = (e) => {
    //     setToggleModales(!toggleModales)
    // }
    //https://punkapi.com/documentation/v2

    return (
        <div className='App'>
            <h1>Ma commande</h1>
            <table >
                <thead>
                    <TableHead />
                </thead>
                <tbody>
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
            <Form
                addAProductToList={addAProductToList}
                length={productList.length}
            />
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
