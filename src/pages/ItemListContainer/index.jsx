import './item-list-container.css'
import ItemList from '../../components/ItemList'
/* import getData from '../../services/getData' */
import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
/* import data from '../../services/getData'; */
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function getProducts(category) {
    const db = getFirestore()

    const itemsCollection = collection(db, 'Items')

    const q = category && query(
        itemsCollection,
        where('category', '==', category)
        /* where es como un filtro
        limit(1)
        trae la cantidad de elementos que le pedis en limit, pasados por el filtro de where
        importar query y where para que funcione y en getDocs pasarle la variable q */
    )

    return getDocs(q || itemsCollection)
/*     const myPromise = new Promise((resolve, reject) => {
        const productsList = data

        const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
            setTimeout(() => {
                resolve(productsFiltered);
            }, 2000);
        });
    return myPromise;
    CON FIREBASE DEJE DE USAR SERVICES */
}

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
/*         getDocs(itemsCollection)
            .then(snapshot => {
                console.log(snapshot.docs.map(doc => { 
                    return { ...doc.data(), id: doc.id }
                }))
            })
            .catch(
                err => console.log(err)
            ) */
        
        getProducts(categoryId)
            .then(snapshot => {
                setProducts(snapshot.docs.map( doc => {
                    return { ...doc.data(), id: doc.id }
                }));
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [categoryId]);

    return (
        <div className='list-item-container'>
            <ItemList items={products} />
        </div>
    )
}
export default ItemListContainer