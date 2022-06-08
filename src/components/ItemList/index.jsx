import React from 'react'
import Item from '../Item'
import './item-list.css'


function ItemList({ items }) {
    return (
        <div className='products'>
            {items.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList