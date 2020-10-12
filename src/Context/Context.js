import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

const ContextProvider = (props) => {
    const [productList, setProductList] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const [beerList, setBeerList] = useState([])
    const [toggleModales, setToggleModales] = useState(false)
    const [id, setId] = useState(0)
    const [DataFiltered, setDataFiltered] = useState()
    const [noData, setNoData] = useState()
    const [searchBarValue, setSearchBarValue] = useState('')
    const [productSelect, setProductSelect] = useState()
    const [cartIsOppen, setCartIsOppen] = useState(false)
    const [favorites, setFavorites] = useState([])
    const [favoritesIsOppen, setFavoritesIsOppen] = useState(false)
    const [redirect, setRedirect] = useState(false);
    const [redirectCart, setRedirectCart] = useState(false);
    const [order, setOrder] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        adress: '',
        credit: '',

    });
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
        let test = false
        const newProduct = productList
        newProduct.forEach(x => {
            if (x.name === element.name) {
                test = true
                x.quantity += 1
            }
        })

        if (test === true) {
            setProductList([...newProduct])
        }
        else {
            setProductList([...productList, element])
        }
    }
    const deleteProp = (x, close) => {
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
        if (array.length) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            array.forEach(x =>
                total.push(x.quantity * x.price))
            setTotalCart(total.reduce(reducer))
        }
        else {
            setTotalCart(0)
        }
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
            let ingredients = table.filter(
                // on fait un filter et on met le résultat dans la variable result
                line =>
                    line.ingredients.yeast.toUpperCase().match(`.*${word.toUpperCase()}.*`) // on compare les deux chaine mises en majuscules(pour que l'on soit sur de toujours comparer des chaines de meme type)
            );
            let dataFinal = [
                ...resultName,
                ...ingredients
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

    const chargProduct = (e) => {
        setProductSelect(e)
    }


    const seeCart = () => {
        setCartIsOppen(!cartIsOppen)
    }
    const putFavoriteItem = (e) => {
        let arrayOfFavorites = [...favorites]
        let arrayOfFavoritesExistant = []
        arrayOfFavorites.forEach(item => {
            arrayOfFavoritesExistant.push(item.name)
        })

        if (arrayOfFavoritesExistant.includes(e.name)) {
            const newArray = arrayOfFavorites.filter(x => x.name !== e.name)
            setFavorites([...newArray])
            return
        }
        setFavorites([...arrayOfFavorites, e])
    }

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
            DataFiltered,
            chargProduct,
            setProductSelect,
            productSelect,
            cartIsOppen,
            seeCart,
            favorites,
            putFavoriteItem,
            favoritesIsOppen,
            setFavoritesIsOppen,
            redirect,
            setRedirect,
            order,
            setOrder,
            setTotalCart,
            setProductList,
            redirectCart,
            setRedirectCart
        }}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider