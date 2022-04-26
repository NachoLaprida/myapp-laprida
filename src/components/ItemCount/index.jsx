import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)
    const onIncrease = () => {
            const newValue = count + 1
            if(newValue <= stock) {
                setCount(newValue)
            }
        }
        const onDecrease = () => {
            const newValue = count - 1
            if(newValue >= initial) {
                setCount(newValue)
            }
        }
    const onAdd = () => {
        const message = `Agregaste ${count} producto`
        if(count === 1) {
            alert(message)
        } else {
            alert(`${message}s`)
        }
    }
    return (
        <div>ItemCount
            <div className='d-flex mt3'>
                <button className="btn btn-danger" onClick={onDecrease}>-</button>
                <h3 className='px-3 mx-3'>{count}</h3>
                <button className='btn btn-primary' onClick={onIncrease}>+</button>
            </div>
            <div>
                <button className='btn btn-primary' onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount