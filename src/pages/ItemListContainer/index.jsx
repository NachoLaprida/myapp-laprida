import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from '../../components/ItemList'
import Spinner from '../../components/Spinner'
import './item-list-container.css'


function getProducts(category) {
    const db = getFirestore()
    const itemsCollection = collection(db, 'Items')

    const q = category && query(
        itemsCollection,
        where('category', '==', category)
    )

    return getDocs(q || itemsCollection)
}

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [load, setLoad]= useState(true)
    const { categoryId } = useParams();
    useEffect(() => {       
        getProducts(categoryId)
            .then(snapshot => {
                setLoad(true)
                setProducts(snapshot.docs.map( doc => {
                    return { ...doc.data(), id: doc.id }
                    
                }));
                
                setLoad(false)
            })
            
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [categoryId]);

    return (
        <>
            
            {load ? <Spinner /> :
                <div className='list-item-container'>
                    <ItemList items={products} />
                </div>
            }
        </>
    )
}
export default ItemListContainer