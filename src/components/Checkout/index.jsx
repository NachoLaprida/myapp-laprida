import React, { useContext, useState } from 'react'
import CartContext from '../../store/CartContextProvider'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'




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
        <>
            <h1>Finalizando compra</h1>
            <br />
            { load ? <Spinner /> :
                (!orderID && <div>
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
                </div>)
            }

            <div>
                {
                    orderID &&(
                        <div>
                            <h4>Compra finalizada con Exito</h4>
                            <h4>{`Su código de compra es: ${orderID}`}</h4>
                            <Link to="/"><h5>Realizar otra compra</h5></Link>
                        </div>
                    )
                }
            </div>
            
            
        </>
    )
}

export default Checkout