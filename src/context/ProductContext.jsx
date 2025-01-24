import { createContext, useEffect, useState } from "react";
import { useLocalStorageData } from "../Hook/useLocalStorageData";

export const ProductList = createContext();

async function Product() {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    return data
}


const ProductContext = ({ children }) => {
    const [Products, setProducts] = useState([]);
    const [CartItem, setCartItem] = useLocalStorageData('CartItem', [])
    const [Quantity, setQuantity] = useLocalStorageData('ProductQuantity', []);

    const ProductData = Product();

    ProductData.then((data) => {
        setProducts(data.recipes)
    })

    useEffect(() => {
        localStorage.setItem('CartItem', JSON.stringify(CartItem));
    }, [Quantity])

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