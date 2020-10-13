import React, { useState, useEffect, useContext } from 'react';
import logo from '../../Asset/beer-311090.svg'
import search from './Search.svg'
import menuIco from './Menuico.svg'
import croix from './Croix.svg'
import { Link, NavLink, Redirect, useLocation } from 'react-router-dom';
import './Header.css'
import { GrCart } from 'react-icons/gr';
import CartContainer from '../Cart/CartContainer'
import { Context } from '../../Context/Context'
import { FiHeart } from 'react-icons/fi';
import BeerFavorites from './../Beer/BeerFavorites';
export default function Header() {
    const {
        cartIsOppen,
        seeCart,
        handleChange,
        searchBarValue,
        productList,
        favorites,
        setFavorites,
        favoritesIsOppen,
        setFavoritesIsOppen,
        redirect,
        setRedirect,
        redirectCart,
        setRedirectCart,
        setProductList
    } = useContext(Context)

    const [menu, showMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearch] = useState('');
    const [cartLocal, setCartLocal] = useState();
    const [localFav, setLocalFav] = useState();

    const item = useLocation()

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        // addlistener c'est comme addeventlisterner pour les medias queries en JS
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }

    })
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cartBeer'))
        const fav = JSON.parse(localStorage.getItem('favBeer'))
        if (cart.length > 0) {
            setCartLocal(cart)
        }
        if (fav) {
            setLocalFav(fav)
        }
    }, [])

    useEffect(() => {
        if (cartLocal) {
            setProductList(cartLocal)
        }
    }, [cartLocal])
    useEffect(() => {
        if (localFav) {
            setFavorites(localFav)
        }
    }, [localFav])
    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }

    const toggleNavRes = () => {
        showMenu(!menu);
    }

    const hideMenu = () => {
        if (menu === true) {
            showMenu(!menu);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        setSearch(e.target.value);
    }

    if (redirect && item.pathname !== '/favorites') {
        return <Redirect push to="/favorites" />
    }

    if (redirectCart && item.pathname !== '/order') {
        return <Redirect push to="/order" />
    }

    return (
        <>
            <nav className="headerTop">
                <h1>In Beer We Trust</h1>
                {(menu || !smallScreen) && (

                    <ul className="listeMenu">

                        <li onClick={hideMenu} className="lienNav" title='Accueil'>
                            <NavLink activeStyle={{ color: "#7bed9f" }} className="lien" exact to="/home">
                                <img src={logo} onClick={hideMenu} alt="logo beer" className="logo" />

                            </NavLink>
                        </li>

                        <li className="lienNav">
                            {item.pathname == "/home" &&
                                <form className="formSubmit" onSubmit={handleSubmit}>
                                    <input required value={searchBarValue} onChange={handleChange} type="text" className="inputRecherche" />

                                    {/* <Link
                                    className="lien"
                                    to={{
                                        pathname: `/resultats/${searchInput}`
                                    }}
                                > */}
                                    <button type="submit" onClick={hideMenu}>
                                        <img src={search} alt="icone loupe" className="logoLoupe" />
                                    </button>
                                    {/* </Link> */}
                                </form>}
                        </li>



                        <li className="lienNav" onClick={() => { setRedirect(true); hideMenu() }} >

                            <div className="favoritesCount">
                                <FiHeart />
                                <div>{favorites.length}</div>
                            </div>

                        </li>
                        <li className="lienNav">
                            <div
                                className='btn-cart'
                                onClick={seeCart}
                                // onMouseEnter={() => seeCart()}
                                onClick={() => { setRedirectCart(true); hideMenu() }}
                            >
                                <GrCart />Cart
                                </div>
                            <div className="containCartItem">
                                <div className="totalCartItem">{productList ? productList.length : 0}</div>
                            </div>
                        </li>
                    </ul>

                )}
                {cartIsOppen &&
                    <CartContainer

                    />
                }
                {/* {
                    favoritesIsOppen &&
                    < BeerFavorites />
                } */}
            </nav>

            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco" />
            </div>

        </>
    )
}

