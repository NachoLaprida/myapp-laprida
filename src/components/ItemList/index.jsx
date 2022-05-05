import React from 'react'
import Item from '../Item'
import './item-list.css'

/* const ItemList = ( {items} ) => {
    return (
        <div className='products'>

            {items.map((item => {
                return(
                    <Item product key= {product.id} title={product.title} price={product.price} image={product.imageUrl} size={product.size}/>
                )
            }))}
        </div>
    )
} */
function ItemList({ items }) {
    return (
        <div className='products'>
            {items.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList