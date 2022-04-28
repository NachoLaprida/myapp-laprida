import './item-list-container.css'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import getData from '../../services/getData'
import React, { useState, useEffect } from 'react'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getData
            .then((response) => setProducts(response))
            .catch((error) => console.log("Error: ", error))
    }, [])

    return (
        <>
            <div className='body'>{greeting}</div>
            <ItemCount stock={10} initial={1} />
            <ItemList products={products} />
        </>        
    )
}

export default ItemListContainer