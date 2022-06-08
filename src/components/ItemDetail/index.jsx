import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import CartContext from '../../store/CartContextProvider';
import ItemCount from '../ItemCount'
import './item-detail.css'



function ItemDetail({item}) {
    const [quantityOfProducts] = useState(null);
    const cartContextUse = useContext(CartContext)
    
    function addHandler(quantityToAdd) {
        cartContextUse.addProduct({quantity: quantityToAdd, ...item})
    }
    
        return (
        <div className='item-detail' >
            <div className='left'>
                <div className="img-detail-container">
                    <img src={item?.imageUrl} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="info-container">
                    <h2>{item?.title}</h2>
                    <div className="desc">
                        <p className='description'>{item?.desc}</p>
                    </div>
                    <h3 className='text-danger'>Precio: ${item?.price}</h3>
                    <div className="count-container">
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler}/>
                        {cartContextUse.products.length > 0 &&
                            <Link to='/cart'><button onClick={() => console.log(cartContextUse)} className='btn btn-secondary p-2'>Finalizar compra { quantityOfProducts } productos</button></Link>
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-around p-5 '>
                    {/* <button className='btn btn-success' onClick={() => console.log(cartContextUse.products)} >Imprimir carrito</button> */}
                    <button className='btn btn-secondary' onClick={() => console.log(cartContextUse.isInCart(item.id))} >¿Esta en el Carrito?</button>
                    {/* <button className='btn btn-success' onClick={() => cartContextUse.deleteById(item.id)} >Remove Item By Id</button> */}
                </div>
                
            </div>
        </div>
    )
}
export default ItemDetail