import React, { useContext } from 'react'
import CartContext from '../../store/CartContextProvider'


const Cart = () => {
    const cartContextUse = useContext(CartContext)
    return (
        <div>
            <h1>Precio Total: ${cartContextUse.totalPrice()} </h1>
            <h1>Total count {cartContextUse.totalCount()}</h1>

            <button className='btn btn-danger' onClick={() => cartContextUse.emptyCart()} >Clear</button>
        </div>
    )
}

export default Cart