import React, { useState, useEffect, useContext } from 'react';
import logo from '../../Asset/beer-311090.svg'
import search from './Search.svg'
import menuIco from './Menuico.svg'
import croix from './Croix.svg'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { GrCart } from 'react-icons/gr';
import CartContainer from '../Cart/CartContainer'
import { Context } from '../../Context/Context'
export default function Header() {
    const {
        cartIsOppen,
        seeCart,
        handleChange,
        searchBarValue,
        productList
    } = useContext(Context)

    const [menu, showMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearch] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        // addlistener c'est comme addeventlisterner pour les medias queries en JS
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }

    })

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


    return (
        <>
            <nav className="headerTop">
                <h1>In Beer We Trust</h1>
                {(menu || !smallScreen) && (


                    <ul className="listeMenu">

                        <li onClick={hideMenu} className="lienNav">
                            <NavLink activeStyle={{ color: "#7bed9f" }} className="lien" exact to="/">
                                <img src={logo} alt="logo beer" className="logo" />

                            </NavLink>
                        </li>


                        <li className="lienNav">
                            <form className="formSubmit" onSubmit={handleSubmit}>

                                <input required value={searchBarValue} onChange={handleChange} type="text" className="inputRecherche" />

                                {/* <Link
                                    className="lien"
                                    to={{
                                        pathname: `/resultats/${searchInput}`
                                    }}
                                > */}
                                <button type="submit">
                                    <img src={search} alt="icone loupe" className="logoLoupe" />
                                </button>
                                {/* </Link> */}
                            </form>
                        </li>
                        <li className="lienNav">

                            <div className='btn-cart' onClick={seeCart}><GrCart />Panier</div>
                            <div className="containCartItem">
                                <div className="totalCartItem">{productList.length}</div>
                            </div>
                        </li>
                    </ul>

                )}
                {cartIsOppen &&
                    <>
                        <CartContainer />
                    </>
                }
            </nav>

            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco" />
            </div>

        </>
    )
}

