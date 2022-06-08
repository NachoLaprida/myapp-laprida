import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import CartItem from '../../components/CartItem'
import CartContext from '../../store/CartContextProvider'
import './cart.css'


const Cart = () => {
    const cartContextUse = useContext(CartContext)
    return (
        <div className='Cart'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Unidades</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Agregar</th>
                        <th scope="col">Quitar</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {cartContextUse.products.map(p => <CartItem item={p} key={p.id}/>)}
                    
                </tbody>
            </table>
            


            {cartContextUse.products.length !== 0 ?
                <div >
                    
                    {/* <p>Producto: {cartContextUse.p}</p> */}
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='montoFinal'>Precio Total: ${cartContextUse.totalPrice()}</th>
                            </tr>
                        </thead>
                        
                    </table>
                    
                    {/* <h2>Total de Unidades en el Carrito: {cartContextUse.totalCount()}</h2> */}
                    {/* <button className='btn btn-danger' onClick={() => cartContextUse.removeProduct(item.id)}>Quitar</button> */}
                    <div className='botones butns'>
                        <div className='nac'>
                            {<button className='btn btn-muted negative' onClick={() => cartContextUse.emptyCart()}>Vaciar carrito</button>}
                        </div>
                        <div className='nac'>
                            <Link to='/checkout'>
                                {<button className='btn btn-muted positive' to='/checkout'>Finalizar compra</button>}
                            </Link>{/* chequear si el problema es esto */}
                        </div>
                        
                    </div>
                    
                </div> :
                    <div style={{height: "100vh"}} className='butns'>
                        <h2>No hay productos en el carrito</h2>
                        <Link to='/'><button className='btn btn-muted positive'>Ir al inicio</button></Link>
                    </div>
            }
            
            
        </div>
    )
}

export default Cart