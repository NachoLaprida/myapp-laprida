import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import './item-detail-container.css'

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productList = [
        {
            id: 1, 
            title: "Alimento Eukanuba para perro Adulto Raza Grande", 
            price: 7400, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/160816-1000-1000/10134637.jpg?v=636827358548130000"
        },
        {
            id: 2, 
            title: "Alimento Eukanuba para perro Adulto Raza Mediana", 
            price: 7400, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://puppis.vteximg.com.br/arquivos/ids/161972-1000-1000/Adulto-Medium-Breed-3Kg.jpg?v=636469526958730000"
        },
        {
            id: 3,
            title: "Alimento Eukanuba para perro Adulto Raza Pequeña", 
            price: 7400, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/162376-1000-1000/Sin-titulo.jpg?v=637217746819830000"
        },
        {
            id: 4, 
            title: "Alimento Eukanuba para perro Senior Raza Grande", 
            price: 8000, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/165529-1000-1000/7797453001106_00.jpg?v=637472640782400000"
        },
        {
            id: 5, 
            title: "Alimento Eukanuba para perro Senior Raza Mediana", 
            price: 8000, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/165528-1000-1000/7797453001083_00.jpg?v=637472639837530000"
        },
        {
            id: 6, 
            title: "Alimento Eukanuba para perro Senior Raza Pequeña", 
            price: 8000, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/160853-1000-1000/10144082.jpg?v=636827420488070000"
        },
        {
            id: 7, 
            title: "Alimento Eukanuba para perro Cachorro Raza Grande", 
            price: 8100, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/158372-569-569/10134660.jpg?v=636645814278200000"
        },
        {
            id: 8, 
            title: "Alimento Eukanuba para perro Cachorro Raza Mediana", 
            price: 8100, 
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/158507-1000-1000/10134659.jpg?v=636645815008730000"
        },
        {
            id: 9, 
            title: "Alimento Eukanuba para perro Cachorro Raza Pequeña", 
            price: 8100,
            stock: 10, 
            size: "15kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/160837-1000-1000/10134630.jpg?v=636827410355670000"
        },
        {
            id: 10, 
            title: "Alimento Eukanuba para perro Adulto Raza Grande", 
            price: 2100, 
            stock: 10, 
            size: "3kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/160816-1000-1000/10134637.jpg?v=636827358548130000"
        },
        {
            id: 11, 
            title: "Alimento Eukanuba para perro Adulto Raza Mediana", 
            price: 2100, 
            stock: 10, 
            size: "3kg", 
            imageUrl: "https://puppis.vteximg.com.br/arquivos/ids/161972-1000-1000/Adulto-Medium-Breed-3Kg.jpg?v=636469526958730000"
        },
        {
            id: 12, 
            title: "Alimento Eukanuba para perro Adulto Raza Pequeña", 
            price: 2100, 
            stock: 10, 
            size: "3kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/162376-1000-1000/Sin-titulo.jpg?v=637217746819830000"
        },
        {
            id: 13, 
            title: "Alimento Eukanuba para perro Senior Raza Grande", 
            price: 2300, 
            stock: 10, 
            size: "3kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/165529-1000-1000/7797453001106_00.jpg?v=637472640782400000"
        },
        {
            id: 14, 
            title: "Alimento Eukanuba para perro Senior Raza Mediana", 
            price: 2300, 
            stock: 10, 
            size: "3kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/165528-1000-1000/7797453001083_00.jpg?v=637472639837530000"
        },
        {
            id: 15, 
            title: "Alimento Eukanuba para perro Senior Raza Pequeña", 
            price: 2300, 
            stock: 10, 
            size: "3kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/160853-1000-1000/10144082.jpg?v=636827420488070000"
        },
        {
            id: 16, 
            title: "Alimento Eukanuba para perro Cachorro Raza Grande",
            price: 2350, 
            stock: 10, 
            size: "3kg", 
            imageUrl: "https://nanolog.vteximg.com.br/arquivos/ids/158372-569-569/10134660.jpg?v=636645814278200000"
        }
    ]
    const item = productList.filter(item => item.id === parseInt(id))
        setTimeout(() => {
            resolve(item[0])   
        }, 2000)
    })
    return myPromise
}

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const { id } = useParams()
    useEffect(() => {
        
        getItem(id)
            .then(res => {
                setItem(res)
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