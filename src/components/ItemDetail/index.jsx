import React from 'react'
import ItemCount from '../ItemCount'
import './item-detail.css'



function ItemDetail({item}) {
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
                    <p>Precio: ${item?.price}</p>
                    <div className="count-container">
                        <ItemCount initial={1} stock={item.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail


