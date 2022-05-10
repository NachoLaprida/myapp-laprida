import './item-list-container.css'
import ItemList from '../../components/ItemList'
/* import getData from '../../services/getData' */
import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import data from '../../services/getData';

function getProducts(category) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = data

        const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
            setTimeout(() => {
                resolve(productsFiltered);
            }, 2000);
        });
    return myPromise;
}

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        getProducts(categoryId)
            .then(res => {
                setProducts(res);
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