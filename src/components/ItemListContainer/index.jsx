import './item-list-container.css'
import ItemCount from '../ItemCount'

import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className='body'>{greeting}</div>
            <ItemCount stock={10} initial={1} />
        </>
        
    )
}

export default ItemListContainer