import React from 'react'
import Product from './Product'
import useProductsData from '../Hook/useProductsData'

const ProductList = () => {
    const {Products} = useProductsData()
    return (
        <div className='w-full m-auto md:m-5'>
        <div className='w-full m-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3 '>
            {Products.map((product,index)=> <Product key={index} ProductList={product}/>)}
        </div>
        </div>
    )
}

export default ProductList