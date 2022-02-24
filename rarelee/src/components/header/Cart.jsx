import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({ onClickCart }) => {
    return (
        <section className='cart__box'>
            <div className='cart__box__close'>
                <FontAwesomeIcon icon={faTimes} onClick={onClickCart} />{' '}
            </div>
            <div className='cart__box__message'>
                <div className='message'>No products in the cart.</div>
            </div>
        </section>
    );
};

export default Cart;
