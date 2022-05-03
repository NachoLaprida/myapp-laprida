import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail'
import './item-detail-container.css'

function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const item = {
            id: 1,
            title: 'Alimento Eukanuba para perro Adulto Raza Grande',
            price: 7400,
            stock: 7,
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/160816-1000-1000/10134637.jpg?v=636827358548130000"
        }
        setTimeout(() => {
            resolve(item)   
        }, 2000)
    })
    return myPromise
}

function ItemDetailContainer() {
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res)
            })
            .catch(err => {
                alert('Ocurrio un error, revisar la consola')
            })
    }, [])

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer