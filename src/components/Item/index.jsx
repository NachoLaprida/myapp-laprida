import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../store/CartContextProvider'
import './item.css'

function Item ({item}) {
    const cartContextUse = useContext(CartContext)
    console.log(item.quantity)
    return (
        <>
            <div className="card" style={{ width: "18rem" }} >
                <img src={item.imageUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">{item.size}</p>
                    <div className="butns d-flex justify-content-around">
                        <button className='btn btn-secondary' onClick={() => cartContextUse.addProduct({...item})} >Agregar</button>
                        <Link to={'/item/' + item.id}><button className='btn btn-secondary'>Ver Detalle</button></Link>
                    </div>
                    
                </div>
            </div>           
        </>
    )
}


export default Item