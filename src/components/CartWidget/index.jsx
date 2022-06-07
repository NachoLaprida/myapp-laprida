import React, { useContext } from 'react'
import './cart-widget.css'
import cart from './../../images/shopping-cart.png'
import CartContext from '../../store/CartContextProvider'

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
