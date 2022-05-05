import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

function Item ({item}) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }} >
                <img src={item.imageUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">{item.size}</p>
                    <Link to={'/item/' + item.id}><button className='btn btn-secondary'>Ver Detalle</button></Link>
                    {/* ARREGLAR ESTE LINK PORQUE ME TRAE UN UNDEFINED Y SIEMPRE TRAE EL MISMO PRODUCT */}
                </div>
            </div>           
        </>
    )
}


export default Item