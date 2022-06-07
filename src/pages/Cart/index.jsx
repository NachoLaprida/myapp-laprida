import React, { useContext } from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'
import CartContext from '../../store/CartContextProvider'


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
                        <th scope="col">Precio</th>
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
                    <div className='botones'>
                        <div className='nac'>
                            {<button className='btn btn-secondary' onClick={() => cartContextUse.emptyCart()}>Vaciar carrito</button>}
                        </div>
                        <div className='nac'>
                            <Link to='/checkout'>
                                {<button className='btn btn-secondary' to='/checkout'>Finalizar compra</button>}
                            </Link>{/* chequear si el problema es esto */}
                        </div>
                        
                    </div>
                    
                </div> :
                    <div style={{height: "100vh"}}>
                        <h2>No hay productos en el carrito</h2>
                        <Link to='/'><button className='btn btn-secondary'>Ir al inicio</button></Link>
                    </div>
            }
            
            
        </div>
    )
}

export default Cart