import React from 'react'
import './cart-widget.css'
import cart from './../../images/shopping-cart.png'

const CartWidget = () => {
    return (
        <img src={cart}  className="cart-image" alt="cart" />
    )
}

export default CartWidget