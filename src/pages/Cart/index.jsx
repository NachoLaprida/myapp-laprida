import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'
import CartContext from '../../store/CartContextProvider'


const Cart = () => {
    const cartContextUse = useContext(CartContext)
    return (
        <div>
            {cartContextUse.products.map(p => <CartItem item={p} key={p.id}/>)}
            {cartContextUse.products.length !== 0 ?
                <div>
                    
                    {/* <p>Producto: {cartContextUse.p}</p> */}
                    <p>Precio Total: ${cartContextUse.totalPrice()}</p>
                    <p>Total de Unidades en el Carrito: {cartContextUse.totalCount()}</p>
                    {/* <button className='btn btn-danger' onClick={() => cartContextUse.removeProduct(item.id)}>Quitar</button> */}
                    {<button className='btn btn-danger' onClick={() => cartContextUse.emptyCart()}>Vaciar carrito</button>}
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to='/checkout'>
                        {<button className='btn btn-info' to='/checkout'>Finalizar compra</button>}
                    </Link>{/* chequear si el problema es esto */}
                    
                </div> :
                    <>
                        <h2>No hay productos en el carrito</h2>
                        <Link to='/'><button className='btn btn-primary'>Ir al inicio</button></Link>
                    </>
            }
            
            
        </div>
    )
}

export default Cart