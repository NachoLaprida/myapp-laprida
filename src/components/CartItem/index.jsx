import React, { useContext } from 'react'
import CartContext from '../../store/CartContextProvider'
import './cartItem.css'

const CartItem = ({item}) => {
    const cartContextUse = useContext(CartContext)
    return (
        <tr>
            <td className="imagen">
                <img src={ item.imageUrl} alt="" />
            </td>
            
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>Precio unitario ${item.price}</td>
            <td className='buttons'>
                <button className='btn btn-secondary' onClick={() => cartContextUse.addProduct({...item})} >+</button>
                <button className='btn btn-secondary' onClick={() => cartContextUse.removeProduct(item.id)} >-</button>
            </td>
            
        </tr>
        
    )
}

export default CartItem