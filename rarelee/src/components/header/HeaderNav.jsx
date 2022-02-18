import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const HeaderNav = ({ active }) => {
    console.log(active);
    const [onConsulting, setOnConsulting] = useState(false);

    const onClickTab = () => {
        onConsulting ? setOnConsulting(false) : setOnConsulting(true);
    };

    return (
        <div className={`header-nav ${active}`}>
            <ul className='header-nav__container'>
                <li>
                    <a href='/'>HOME</a>
                </li>
                <li>
                    <a href='/about-rarelee'>ABOUT RARELEE</a>
                </li>
                <li onClick={onClickTab}>
                    <a
                        href='#'
                        className={onConsulting ? 'clicked' : 'unClicked'}
                    >
                        CONSULTING신청 <FontAwesomeIcon icon={faCaretDown} />
                    </a>
                    {onConsulting ? (
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
                    ) : null}
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
            </ul>
        </div>
    );
};

export default HeaderNav;
