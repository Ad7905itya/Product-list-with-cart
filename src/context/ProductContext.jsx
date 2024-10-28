import { createContext, useEffect} from "react";

import data from '../../data.json'
import { useLocalStorageData } from "../Hook/useLocalStorageData";
export const ProductList = createContext();

const ProductContext = ({ children }) => {
    const [Products, setProducts] = useLocalStorageData('Data', data);
    const [CartItem, setCartItem] = useLocalStorageData('CartItem',[])
    const [Quantity, setQuantity] = useLocalStorageData('ProductQuantity', []);


    useEffect(()=> {
        localStorage.setItem('CartItem',JSON.stringify(CartItem));
    },[Quantity])

    const isProductAvailable = (ProductName) => {
        return CartItem.findIndex((item) => item.name === ProductName) !== -1;
    }

    const decrementQuantity = (ProductName) => {
        return CartItem.map((item) => {
            if (item.name === ProductName && item.quantity > 0) {
                item.quantity--;
                setCartItem(CartItem.filter((item) => item.quantity !== 0));
                setQuantity(CartItem.map((item) => item.quantity))
            }
            return item.quantity;
        });
    }

    const incrementQuantity = (ProductName) => {
        return CartItem.map((item) => {
            if (item.name === ProductName) {
                item.quantity++;
                setQuantity(CartItem.map((item) => item.quantity))
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
            removeIcon,
            Quantity
        }}>
            {children}
        </ProductList.Provider>
    )
}

export default ProductContext