import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import BeerItem from './BeerItem';
import { Context } from '../../Context/Context'
import CartContainer from '../Cart/CartContainer'
import { GrCart } from 'react-icons/gr';
import Header from './../Header/Header';
export default function BeerContainer() {
    const {
        oppenCloseModale,
        changeTotalCart,
        beerList,
        setBeerList,
        DataFiltered
    } = useContext(Context)

    // const [beerList, setBeerList] = useState([])

    const [cartIsOppen, setCartIsOppen] = useState(false)

    const seeCart = () => {
        setCartIsOppen(!cartIsOppen)
    }

    useEffect(() => {
        const getBeer = async () => {
            const beers = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
            setBeerList(beers.data)
        }
        const getBeer2 = async () => {
            const beers2 = await axios.get(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
            const beerNew = beers2.data
            setTimeout(() => {
                setBeerList(
                    prevValues => (
                        [...prevValues,
                        ...beerNew]
                    )
                )
            }, 1000)
        }
        getBeer()
        getBeer2()
    }, [])
    console.log("beerList", beerList);
    return (
        <>
            {/* <Header /> */}
            <button className='btn-cart' onClick={seeCart}><GrCart /></button>
            {cartIsOppen &&
                <>
                    <CartContainer />
                </>
            }
            <div className="flexAccueil">
                {!DataFiltered ?
                    beerList.map((beer, i) =>
                        <BeerItem key={i}
                            beer={beer} />
                    )
                    :
                    DataFiltered.map((beer, i) =>
                        <BeerItem key={i}
                            beer={beer} />
                    )

                }

            </div>
        </>
    )
}
