import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const MainNav = () => {
    const [onMouse, setOnMouse] = useState(false);

    const handleMouseMove = () => {
        onMouse ? setOnMouse(false) : setOnMouse(true);
    };
    return (
        <section className='main-nav'>
            <div>
                <nav className='main-nav__box'>
                    <li>
                        <a href='/'>HOME</a>
                    </li>
                    <li>
                        <a href='/about-rarelee'>ABOUT RARELEE</a>
                    </li>
                    <li
                        className={onMouse ? 'enter' : 'leave'}
                        onMouseEnter={handleMouseMove}
                        onMouseLeave={handleMouseMove}
                    >
                        <a href='#'>
                            CONSULTING신청{' '}
                            <FontAwesomeIcon icon={faCaretDown} />
                        </a>

                        <ul>
                            <li>
                                <a href='/'>컨설팅 분류</a>
                            </li>
                            <li>
                                <a href='/'>이미지컨설팅(1:1)</a>
                            </li>
                            <li>
                                <a href='/'>RARELEE 컨설팅</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href='/'>NOTICE</a>
                    </li>
                    <li>
                        <a href='/'>FAQ</a>
                    </li>
                    <li>
                        <a href='/'>MY PAGE</a>
                    </li>
                </nav>
            </div>
        </section>
    );
};

export default MainNav;
