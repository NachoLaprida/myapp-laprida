import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from '../../components/ItemDetail'
import Spinner from '../../components/Spinner'
import './item-detail-container.css'

function getItem(id) {
    const db = getFirestore()
    const itemRef = doc( db, 'Items', id)

    return getDoc(itemRef)
}

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const { id } = useParams()
    const [load, setLoad]= useState(true)

    useEffect(() => {
        
        getItem(id)
            .then(snapshot => {
                setLoad(true)
                setItem({ ...snapshot.data(), id: snapshot.id})
                setLoad(false)
            })
            .catch(err => {
                alert('Ocurrio un error, revisar la consola')
            })
    }, [id])

    return (
        <>
            {load ? <Spinner /> :
                <div className='item-detail-container'>
                    <ItemDetail item={item}/>
                </div>
            }
        </>
        
    )
}

export default ItemDetailContainer