import { createContext, useState } from "react";


const CartContext = createContext({
    products: [],
    addProduct: () => {},
    isInCart: () => {},
    emptyCart: () => {},
    deleteById: () => {},
    /* unitPerProducts: () => {},
    removeOneUnite: () => {}, */
    totalCount: () => {},
    totalPrice: () => {}
})

export const CartContextProvider = ({ children }) => {
    const [productsList, setProductList] = useState([])
    
    const addProduct = (product) => {
            setProductList([product, ...productsList])
        
    }
    const isInCart = (id) => {
        return productsList.some((item) => item.id === id)
    }
    const emptyCart = () => {
        setProductList([])
    }
    const deleteById = (id) => {
        setProductList(productsList.filter((item) => item.id !== id))
    }
    /* const unitsPerProduct = (id) => {
        const foundInCart = productsList.find((item) => item.id === id)
        return foundInCart ? foundInCart.quantity : 0
    }

    const removeOneUnite = (id) => {
        if (unitsPerProduct(id) === 1) {
            return deleteById(id);
        }
        setProductList(
            productsList.map((product) =>
            product.id === id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            )
        )
    } */
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
            isInCart: isInCart,
            emptyCart: emptyCart,
            deleteById: deleteById,
            /* unitPerProducts: unitsPerProduct,
            removeOneUnite: removeOneUnite, */
            totalCount: totalCount,
            totalPrice: totalPrice

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext



