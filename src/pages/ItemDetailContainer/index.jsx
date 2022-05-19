import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
/* import data from '../../services/getData' */
import './item-detail-container.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function getItem(id) {
    /* const myPromise = new Promise((resolve, reject) => {
        const productList = data
    const item = productList.filter(item => item.id === parseInt(id))
        setTimeout(() => {
            resolve(item[0])   
        }, 2000)
    })
    return myPromise */
    const db = getFirestore()

    const itemRef = doc( db, 'Items', id)

    return getDoc(itemRef)
}

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const { id } = useParams()
    useEffect(() => {
        
        getItem(id)
            .then(snapshot => {
                setItem({ ...snapshot.data(), id: snapshot.id})
            })
            .catch(err => {
                alert('Ocurrio un error, revisar la consola')
            })
    }, [id])

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer