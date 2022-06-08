import React, { useContext } from 'react'

import CartContext from '../../store/CartContextProvider'
import './cartItem.css'

const CartItem = ({item}) => {
    const cartContextUse = useContext(CartContext)
    
    return (
        <tr className='menu'>
            <td className="imagen">
                <img src={ item.imageUrl} alt="" />
            </td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.price * item.quantity}</td>
            <td className='butns'>
                <button className='btn btn-muted positive' onClick={() => cartContextUse.addProduct(item)} >+</button> 
            </td>
            <td className='butns'>
                <button className='btn btn-muted negative' onClick={() => cartContextUse.removeProduct(item.id)} >-</button>
            </td>
        </tr>
        
    )
}

export default CartItem