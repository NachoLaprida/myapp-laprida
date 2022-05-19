import React, { useContext } from 'react'
import CartContext from '../../store/CartContextProvider'
import './cartItem.css'

const CartItem = ({item}) => {
    const cartContextUse = useContext(CartContext)
    return (
        <div className='cartItem container'>
            <div className="imagen">
                <img src={ item.imageUrl} alt="" />
            </div>
            
            <p>Producto: {item.title}</p>
            <p>Unidades: {item.quantity}</p>
            <button className='btn btn-success' onClick={() => cartContextUse.addProduct({...item})} >Agregar</button>
            <button className='btn btn-danger' onClick={() => cartContextUse.removeProduct(item.id)} >Quitar</button>
        </div>
        
    )
}

export default CartItem