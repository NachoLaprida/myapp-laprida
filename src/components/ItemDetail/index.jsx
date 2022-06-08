import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import CartContext from '../../store/CartContextProvider';
import ItemCount from '../ItemCount'
import './item-detail.css'



function ItemDetail({item}) {
    const [quantityOfProducts] = useState(null);
    const cartContextUse = useContext(CartContext)
    
    function addHandler(quantityToAdd) {
        cartContextUse.addProduct( item, quantityToAdd)
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
                    <h3 className='titlePrice'>Precio: ${item?.price}</h3>
                    <div className="count-container butns">
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler}/>
                        {cartContextUse.products.length > 0 &&
                            <Link to='/cart'><button onClick={() => console.log(cartContextUse)} className='btn btn-muted positive p-2'>Finalizar compra { quantityOfProducts } productos</button></Link>
                        }
                    </div>
                </div>
                <div className='d-flex butns justify-content-around p-5 '>
                    <button className='btn btn-muted negative' onClick={() => console.log(cartContextUse.isInCart(item.id))} >¿Esta en el Carrito?</button>
                </div>
                
            </div>
        </div>
    )
}
export default ItemDetail