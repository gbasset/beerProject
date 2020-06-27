import React, { useEffect, useState, useContext, useRef, useLayoutEffect } from 'react'
import axios from 'axios';
import BeerItem from './BeerItem';
import { Context } from '../../Context/Context'

import { AiFillUpCircle } from 'react-icons/ai';
import Slide from '../Slide'

export default function BeerContainer() {
    const {
        oppenCloseModale,
        changeTotalCart,
        cartIsOppen,
        beerList,
        setBeerList,
        DataFiltered
    } = useContext(Context)
    const [isScroll, setIsScroll] = useState(false)
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    const scrollToRef = (ref) => {
        window.scrollTo(0, 0
            // ref.current.offsetTop
        )
        setIsScroll(false)
    }

    function handleScroll() {
        if (document.documentElement.scrollTop >= 1300) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
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


    //https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

    return (
        <>
            <Slide />
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
                {
                    isScroll &&
                    <div onClick={executeScroll} className="scrollUpBtn">
                        <AiFillUpCircle />
                    </div>
                }

            </div>
        </>
    )
}
