import React, { useEffect, useState } from 'react'
import CartItem from '../CartItem'


const Loading = () => {
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {loading ? <h2>Cargando..</h2> : <CartItem />
            }
        </>
    )
}

export default Loading