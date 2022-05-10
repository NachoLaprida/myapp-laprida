import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount'
import './item-detail.css'



function ItemDetail({item}) {
    const [quantityOfProducts, setQuantityOfProducts] = useState(null);
    function addHandler(quantityToAdd) {
        setQuantityOfProducts(quantityToAdd);
        
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
                    <p className='text-danger'>Precio: ${item?.price}</p>
                    <div className="count-container">
                        {quantityOfProducts ?
                            <Link to='/cart'><button className='btn btn-primary p-2'>Finalizar compra { quantityOfProducts } productos</button></Link> :
                            <ItemCount initial={1} stock={item.stock} onAdd={addHandler}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail


