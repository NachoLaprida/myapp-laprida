import React from 'react'
import './item.css'

const Item = ({title, price, image, size}) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }} >
                <img src={image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                    <p className="card-text">{size}</p>
                </div>
            </div>           
        </>
    )
}

export default Item