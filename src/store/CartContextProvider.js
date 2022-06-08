import { createContext, useState } from "react";
import swal from "sweetalert";



const CartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    isInCart: () => {},
    emptyCart: () => {},
    totalCount: () => {},
    totalPrice: () => {}
})

export const CartContextProvider = ({ children }) => {
    const [productsList, setProductList] = useState([])
    
    const addProduct = (product, quantity = 1) => {
        const cartItemPush = productsList.findIndex(item => item.id === product.id)
        if(cartItemPush !== -1) {
            setProductList(productsList.map(p => p.id === product.id ? {...p, quantity: p.quantity + quantity} : p))
        } else{        
            setProductList([...productsList, {...product, quantity: product.quantity || 1}  ])
        }
    }

    const removeProduct = (id) => {
        const indexToRemove = productsList.findIndex(item => item.id === id);
        if (productsList[indexToRemove].quantity === 1) {
            setProductList(productsList.filter(i => i.id !== id))
        } else {
            setProductList(productsList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
        }
    }
    const isInCart = (id) => {
        let isInCart = productsList.some((item) => item.id === id)
        if(isInCart) {
            swal({
                title: "Está en el carrito",
                icon:"success",
                button:"Aceptar"
        })
        } else {
            swal({
                title:"No está en el carrito",
                icon:"error",
                button:"Aceptar"
            })
        }
        return isInCart
    }
    
    const emptyCart = () => {
        setProductList([])
    }

    const totalCount = () => {
        return productsList.reduce((total, item) => total + item.quantity, 0)
    }

    const totalPrice = () => {
        return productsList.reduce((total, item) => total + (item.quantity * item.price), 0)
    }
    


    return (
        <CartContext.Provider value={{
            products: productsList,
            addProduct: addProduct,
            removeProduct: removeProduct,
            isInCart: isInCart,
            emptyCart: emptyCart,
            totalCount: totalCount,
            totalPrice: totalPrice

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext



