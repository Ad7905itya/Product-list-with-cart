import React from 'react'
import useProductsData from '../Hook/useProductsData'

const CartItemBox = ({CartItem}) => {
    const {removeIcon, setCartItem} = useProductsData()
    return (
        <div className='flex items-center justify-between border-b-[1px] pb-2'>
            <div className='mt-5'>
                <h2>{CartItem.name}</h2>
                <div className='flex gap-2'>
                    <p className='text-[--Red]'>{CartItem.quantity}x</p>
                    <p className='text-[--Rose-300]'>@ ${CartItem.price.toFixed(2)}</p>
                    <p className='text-[--Rose-500]'>${(CartItem.quantity * CartItem.price).toFixed(2)}</p>
                </div>
            </div>
            <div className='w-5 h-5 rounded-full flex items-center justify-center cursor-pointer border-[1px] border-[--Rose-500]' onClick={()=> {
                setCartItem(removeIcon(CartItem.name));
            }}>
                <img src="assets/images/icon-remove-item.svg" alt="removeIcon" loading='lazy' />
            </div>
        </div>
    )
}

export default CartItemBox