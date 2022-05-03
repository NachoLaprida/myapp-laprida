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
        <div className='item-count justify-content-center m-3 p-3'>
            <div className='d-flex justify-content-around p-3 border'>
                <button className="btn btn-secondary btn-lg btn-block" onClick={onDecrease}>-</button>
                <h3 className='px-3 mx-3 '>{count} </h3>
                <button className='btn btn-secondary' onClick={onIncrease}>+</button>
            </div>
            <div className='d-flex justify-content-center p-2'>
                <button className='btn btn-primary btn-lg btn-block' onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount