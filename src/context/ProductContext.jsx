import { createContext, useState } from "react";

import data from '../../data.json'
export const ProductList = createContext();

const ProductContext = ({ children }) => {
    const [Products, setProducts] = useState(data);
    const [CartItem, setCartItem] = useState([]);
    const [Quantity, setQuantity] = useState(1);

    const isProductAvailable = (ProductName) => {
        return CartItem.findIndex((item) => item.name === ProductName) !== -1;
    }

    const decrementQuantity = (ProductName) => {
        return CartItem.map((item) => {
            if (item.name === ProductName && item.quantity > 1) {
                item.quantity--;
                setQuantity(Quantity - 1)
            }
            return item.quantity;
        });
    }

    const incrementQuantity = (ProductName) => {
        return CartItem.map((item) => {
            if(item.name === ProductName)  {
                item.quantity++ ;
                setQuantity(Quantity + 1)
            }
        })
    }

    const getCartItem = (ProductName) => CartItem.map((item) => {
        if (item.name === ProductName) {
            return item.quantity
        }
    })

    const removeIcon = (ProductName) => {
        return CartItem.filter((item) => item.name !== ProductName);
    }

    const totalItemCount = () => {
        return CartItem.reduce((acc, curr) => acc + curr.quantity, 0)
    }

    const totalPriceCount = () => {
        return CartItem.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
    }

    return (
        <ProductList.Provider value={{
            Products,
            CartItem,
            totalItemCount,
            totalPriceCount,
            setCartItem,
            isProductAvailable,
            decrementQuantity,
            incrementQuantity,
            getCartItem,
            removeIcon
        }}>
            {children}
        </ProductList.Provider>
    )
}

export default ProductContext