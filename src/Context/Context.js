import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

const ContextProvider = (props) => {
    const [productList, setProductList] = useState([
        { id: 1, name: 'produit 1', price: 50, quantity: 1, },
        { id: 2, name: 'produit 2', price: 75, quantity: 2, },
        { id: 3, name: 'produit 3', price: 20, quantity: 5, }
    ])
    const [totalCart, setTotalCart] = useState(0)

    const [beerList, setBeerList] = useState([])
    const [toggleModales, setToggleModales] = useState(false)
    const [id, setId] = useState(0)
    const [DataFiltered, setDataFiltered] = useState()
    const [noData, setNoData] = useState()
    const [searchBarValue, setSearchBarValue] = useState('')
    const chooseQuantity = (event, index, id) => {
        const newProductList = productList
        if (typeof newProductList[index].quantity === isNaN) {
            return
        }
        else {
            if (event.target.value < 1 || event.target.value.length === 0) {
                // setToggleModales(true)
                oppenCloseModale(id)
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
        console.log('item', x);
        let array = productList.filter(element => element.id !== x)
        setProductList([...array])
        if (close) {
            close()
        }
    }
    useEffect(() => {
        deleteProp()
    }, [])
    const changeTotalCart = (array) => {
        let total = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        array.forEach(x =>
            total.push(x.quantity * x.price))
        setTotalCart(total.reduce(reducer))
    }
    useEffect(() => {
        changeTotalCart(productList)
    }, [productList])


    const oppenCloseModale = (e) => {
        setToggleModales(!toggleModales)
        setId(e)
    }
    // fonction de recherche dans le tableau
    const search = (table, word) => {
        if (word.length > 0) {
            // si le mot recherché n'est pas une chaine vide
            setDataFiltered(); // on vide le tableau à afficher
            let resultName = table.filter(
                // on fait un filter et on met le résultat dans la variable result
                line =>
                    line.name.toUpperCase().match(`.*${word.toUpperCase()}.*`) // on compare les deux chaine mises en majuscules(pour que l'on soit sur de toujours comparer des chaines de meme type)
            );

            let dataFinal = [
                ...resultName,
            ]
            let uniq = [...new Set(dataFinal)];

            setDataFiltered(uniq); //on rempli le tableau avec le resultat du filter
            if (dataFinal.length === 0) {
                let result = "Il n'y a pas de résultats pour cette recherche"
                setNoData(result)
            }
            else {
                setNoData()
            }
        } else {
            setDataFiltered()
        }
    };
    const handleChange = (e) => {
        setSearchBarValue(e.target.value)
        search(beerList, e.target.value)
    }
    console.log("DataFiltered", DataFiltered);

    return (
        <Context.Provider value={{
            oppenCloseModale,
            changeTotalCart,
            deleteProp,
            addAProductToList,
            chooseQuantity,
            productList,
            toggleModales,
            setToggleModales,
            totalCart,
            id,
            handleChange,
            searchBarValue,
            setBeerList,
            beerList,
            DataFiltered

        }}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider