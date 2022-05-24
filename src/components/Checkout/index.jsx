import React, { useContext, useState } from 'react'
import CartContext from '../../store/CartContextProvider'
import { collection, addDoc, getFirestore } from 'firebase/firestore'




const Checkout = () => {

    const cartContextUse = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono} = buyer
    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value

        }))
    }
    const db = getFirestore()
    const generateOrder = async(data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log('order', order)
            console.log("order", order.id)
        } catch (error) {
            console.log(error)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const productList = cartContextUse.products
        const items = productList.map(e => {return { id:e.id, title:e.title, price:e.price, quantity: e.quantity  }})
        const total = cartContextUse.totalPrice()
        const data = {buyer, items, dia, total}

        console.log('data', data)
        generateOrder(data)

    }
    return (
        <>
            <h1>Finalizando compra</h1>
            <br />
            <h4>Completar Datos</h4>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" name='Nombre' placeholder='Nombre'
                value={Nombre}
                onChange={handleInputChange}
                required
                />
                <br />
                <input type="email" name='Email' placeholder='Email'
                value={Email}
                onChange={handleInputChange}
                required />
                
                <br />
                <input type="number" name='Telefono' placeholder='Telefono'
                value={Telefono}
                onChange={handleInputChange}
                required />
                <br />
                <input type="submit" value="Finalizar Compra" className='btn btn-success'
                />
            </form>
        </>
    )
}

export default Checkout