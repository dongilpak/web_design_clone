import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faSearch,
    faShoppingCart,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import title from '../../assets/title.png';
import HeaderNav from './HeaderNav';
import MainNav from './MainNav';
import Cart from './Cart';

const Header = () => {
    const [barActive, setBarActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);

    const handleHeaderNav = () => {
        barActive ? setBarActive(false) : setBarActive(true);
    };

    const handleCartVisible = () => {
        cartActive ? setCartActive(false) : setCartActive(true);
    };

    const handleSearchVisible = () => {
        searchActive ? setSearchActive(false) : setSearchActive(true);
    };

    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__nav' onClick={handleHeaderNav}>
                    {barActive ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </div>
                <h1 className='header__title'>
                    <a href='/'>
                        <img src={title} alt='title' />
                    </a>
                </h1>
                <div className='header__gnb'>
                    <div className='header__gnb__cart'>
                        <div className='cart__icon'>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                onClick={handleCartVisible}
                            />
                        </div>
                        <div
                            className={`cart ${cartActive ? 'show' : 'hidden'}`}
                        >
                            <Cart onClickCart={handleCartVisible} />
                        </div>
                    </div>
                    <div className='header__gnb__search'>
                        <div className='search__icon'>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            {barActive ? (
                <HeaderNav active='active' />
            ) : (
                <HeaderNav active='inactive' />
            )}

            <MainNav />
        </header>
    );
};

export default Header;
