import React, { useEffect, useState, useContext, useRef, useLayoutEffect } from 'react'
import axios from 'axios';
import BeerItem from './BeerItem';
import { Context } from '../../Context/Context'
import CartContainer from '../Cart/CartContainer'
import { GrCart } from 'react-icons/gr';
import { AiFillUpCircle } from 'react-icons/ai';

import Header from './../Header/Header';
export default function BeerContainer(effect, deps, element, useWindow, wait) {
    const {
        oppenCloseModale,
        changeTotalCart,
        cartIsOppen,
        beerList,
        setBeerList,
        DataFiltered
    } = useContext(Context)
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    // const [beerList, setBeerList] = useState([])

    // const [cartIsOppen, setCartIsOppen] = useState(false)

    // const seeCart = () => {
    //     setCartIsOppen(!cartIsOppen)
    // }

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
        const getBeer3 = async () => {
            const beers3 = await axios.get(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
            const beerNew = beers3.data
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
        getBeer3()
    }, [])
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    //https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

    return (
        <>
            {/* <Header /> */}
            {/* <button className='btn-cart' onClick={seeCart}><GrCart /></button> */}
            <div className="flexAccueil" ref={myRef}>
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
                <div onClick={executeScroll} className="scrollUpBtn">
                    <AiFillUpCircle />
                </div>


            </div>
        </>
    )
}
