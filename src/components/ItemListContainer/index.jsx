import './item-list-container.css'

import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='body'>{greeting}</div>
    )
}

export default ItemListContainer