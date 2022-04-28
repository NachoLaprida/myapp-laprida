import React from 'react'
import Item from '../Item'
import './item-list.css'

const ItemList = ( {products} ) => {
    return (
        <div className='products'>
            {products.map((product => {

                return(
                    <Item product key= {product.id} title={product.name} price={product.price} image={product.img} size={product.size}/>
                )
            }))}
        </div>
    )
}

export default ItemList