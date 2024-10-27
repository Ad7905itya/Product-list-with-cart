import { useContext } from "react";
import { ProductList } from "../context/ProductContext";

export default function useProductsData() {
    const Context = useContext(ProductList);

    if(!Context) throw new Error('App Context must be Add')

    return Context
}
