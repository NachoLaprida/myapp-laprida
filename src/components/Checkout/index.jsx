import React, { useContext, useState } from 'react'
import CartContext from '../../store/CartContextProvider'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'
import './checkout.css'




const Checkout = () => {

    const cartContextUse = useContext(CartContext)

    const [ load, setLoad ] = useState(false)

    const [ orderID, setOrderID] = useState()

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
        setLoad(true) 
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderID(order.id)
            cartContextUse.emptyCart()
            console.log(order.id)
            setLoad(false) 
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
        <div className='parte-final'>
            <h1 className='title-checkout'>Finalizando Compra</h1>
            <hr />
            <div className='fomulario'>
                { load ? <Spinner /> :
                    (!orderID && 
                        <div className='container formContainer'>
                            <h4>Completá tus Datos</h4>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name='Nombre' placeholder='Nombre'
                                value={Nombre}
                                onChange={handleInputChange}
                                required />
                                <input type="email" name='Email' placeholder='Email'
                                value={Email}
                                onChange={handleInputChange}
                                required />
                                <input type="number" name='Telefono' placeholder='Telefono'
                                value={Telefono}
                                onChange={handleInputChange}
                                required />
                                <input type="submit" value="Finalizar Compra" className='btn btn-secondary'/>
                            </form>
                        </div>)
                }
            </div>
            <div className='order-id'>
                {
                    orderID && 
                    (
                        <div className='end'>
                            <h4 className='s'>Compra finalizada con Éxito</h4>
                            <h4 className='s'>{`Tú código de compra es: ${orderID}`}</h4>
                            <div className='gif s'>
                                
                            </div>
                            <div className='s'>
                                <Link to="/"><button className='btn btn-primary'>Realizar otra compra</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
            
            
        </div>
    )
}

export default Checkout