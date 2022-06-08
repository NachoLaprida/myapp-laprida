import React, { useContext } from 'react'

import cart from './../../images/shopping-cart.png'
import CartContext from '../../store/CartContextProvider'
import './cart-widget.css'

const CartWidget = () => {
    const cartContextUse = useContext(CartContext)
    
    return (
        <div className='cartWidget'>
            {cartContextUse.totalCount() !== 0 ? <span  className='count'>{cartContextUse.totalCount()}</span> : ' '}
            <img src={cart} className="cart-image" alt="cart" />
        </div>
        
    )
}

export default CartWidget
