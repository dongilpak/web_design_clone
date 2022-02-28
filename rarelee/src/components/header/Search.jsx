import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';

const Search = ({ onClickSearch, searchActive }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (searchActive) inputRef.current.focus();
    });

    return (
        <section className='search__box'>
            <form action='POST' className='search__form'>
                <input
                    type='search'
                    placeholder='Search...'
                    className='search__input'
                    ref={inputRef}
                />
                <div className='search__close'>
                    <FontAwesomeIcon icon={faTimes} onClick={onClickSearch} />
                </div>
            </form>
        </section>
    );
};

export default Search;
