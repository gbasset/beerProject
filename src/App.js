import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TablesBody from './components/TablesBody';
import TableTotal from './components/TableTotal';
import TableHead from './components/TableHead';
import axios from 'axios';



function App() {
  const [productList, setProductList] = useState([
    { id: 1, name: 'produit 1', price: 50, quantity: 1, },
    { id: 2, name: 'produit 2', price: 75, quantity: 2, },
    { id: 3, name: 'produit 3', price: 20, quantity: 5, }
  ])
  const [totalCart, setTotalCart] = useState(0)
  const [toggleModales, setToggleModales] = useState(false)
  const chooseQuantity = (event, index) => {
    const newProductList = productList
    if (typeof newProductList[index].quantity === isNaN) {
      return
    }
    else {
      if (event.target.value < 1 || event.target.value.length === 0) {
        setToggleModales(true)
      }
      else {
        newProductList[index].quantity = parseInt(event.target.value)
        newProductList[index].total = parseInt(newProductList[index].quantity * newProductList[index].price)
        setProductList([...newProductList])
      }
    }
  }
  const addAProductToList = (element) => {
    setProductList([...productList, element])
  }

  const deleteProp = (x, close) => {
    console.log(x);
    let array = productList
    array = array.filter(element => element.id !== x)
    console.log('array', array);
    setProductList(array)
    if (close) {
      close()
    }
  }

  const changeTotalCart = (array) => {
    let total = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    array.forEach(x =>
      total.push(x.quantity * x.price))
    console.log("total reduce", total.reduce(reducer));
    console.log("total", total);
    setTotalCart(total.reduce(reducer))
  }
  useEffect(() => {
    changeTotalCart(productList)
  }, [productList])


  const oppenCloseModale = (e) => {
    setToggleModales(!toggleModales)
  }
  //https://punkapi.com/documentation/v2

  useEffect(() => {
    const getBeer = async () => {
      const beers = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
      console.log(beers);
    }
    getBeer()
  })
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

    </div>
  );
}

export default App;
