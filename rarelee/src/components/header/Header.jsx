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

const Header = () => {
    const [barActive, setBarActive] = useState(false);

    const handleHeaderNav = () => {
        barActive ? setBarActive(false) : setBarActive(true);
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
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>

            {barActive ? (
                <HeaderNav active='active' />
            ) : (
                <HeaderNav active='inactive' />
            )}
        </header>
    );
};

export default Header;
