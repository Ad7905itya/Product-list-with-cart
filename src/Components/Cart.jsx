import React from 'react'
import CartItemBox from './CartItemBox'
import useProductsData from '../Hook/useProductsData'

const Cart = ({setIsModalOpen}) => {
    const { CartItem, totalItemCount, totalPriceCount } = useProductsData();
    return (
        <div className='max-w-xs w-full m-auto lg:m-0 rounded-xl bg-white p-5'>
            <h1 className='text-2xl text-[--Red] font-bold'>Your Cart ({totalItemCount()})</h1>
            {
                !totalItemCount() ? (<div className='flex mt-10 gap-2 flex-col items-center justify-center'>
                    <img src="assets/images/illustration-empty-cart.svg" alt="emptyCartIcon" />
                    <p className='text-[--Rose-500] font-bold text-sm'>Your added items will appear here</p>
                </div>) : (
                    <>
                        {
                            CartItem.map((item, i) => <CartItemBox key={i} CartItem={item} />)
                        }
                        <div className='flex py-7 justify-between'>
                            <p className='text-gray-600'>Order Total</p>
                            <p className='font-bold text-2xl'>${totalPriceCount().toFixed(2)}</p>
                        </div>
                        <div className='flex py-3 justify-center gap-2 rounded-md items-center bg-gray-100'>
                            <img src="assets/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
                            <p className='text-sm'>This is a <b>Carbon-neutral</b> delivery</p>
                        </div>
                        <button className='w-full mt-5 bg-[--Red] py-2 font-medium text-white text-lg rounded-3xl' onClick={()=> setIsModalOpen(true)}>Confirm Order</button>
                    </>
                )
            }
        </div>
    )
}

export default Cart