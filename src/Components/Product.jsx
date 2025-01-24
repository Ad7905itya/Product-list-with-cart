import { useState } from 'react';
import useProductsData from '../Hook/useProductsData'

const Product = ({
    image,
    name,
    rating,
    cuisine,
    ingredients
}) => {
    const { isProductAvailable, setCartItem, getCartItem, incrementQuantity, decrementQuantity } = useProductsData();
    const [onFocus, setonFocus] = useState(false);
    const onClick = () => {
        setCartItem(prevState => [...prevState, {
            thumbnail: image,
            name: name,
            price: rating,
            quantity: 1
        }])
    }
    return (
        <div className='relative px-5 w-full'>
            <div className='rounded-xl w-full overflow-hidden'>
                <div
                    onMouseEnter={() => setonFocus(true)}
                    onMouseLeave={() => setonFocus(false)}>
                    <img
                        className={`${onFocus ? 'opacity-10' : ''} w-full`}
                        loading='lazy'
                        src={image}
                        alt="" />
                    {onFocus &&
                        <div
                            className='top-16 left-1/2 absolute flex flex-col justify-center items-center px-12 py-3 w-full text-sky-900 text-sm -translate-x-1/2 -translate-y-1/2'>
                            <p>
                                <span className='font-bold'>ingredients :&nbsp;</span>
                                {ingredients.filter((ingredient, index) => index < 3)
                                .map((item, index) => <span key={index}>{item}, </span>)}
                            </p>
                        </div>}
                </div>
                {!isProductAvailable(name) ? (
                    <button className='left-1/2 absolute flex justify-center items-center gap-2 border-[--Rose-300] border-[1px] hover:border-[--Red] bg-white md:px-3 py-3 rounded-3xl w-[70%] font-semibold text-[--Rose-900] text-sm hover:text-[--Red] -translate-x-1/2 -translate-y-1/2' onClick={onClick}><img src="assets/images/icon-add-to-cart.svg" alt="cart image" loading='lazy' />Add to Cart</button>
                ) : (
                    <div className='left-1/2 absolute flex justify-around items-center gap-2 bg-[--Red] md:px-3 py-3 border-none rounded-3xl w-[70%] font-semibold text-[--Rose-900] text-sm -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex justify-center items-center border-[--Rose-100] border-[1px] hover:bg-[--Rose-300] rounded-full w-6 h-6' onClick={() => decrementQuantity(name)}>
                            <img src="assets/images/icon-decrement-quantity.svg" alt="decrementIcon" loading='lazy' />
                        </div>
                        <p className='text-[--Rose-100]'>{getCartItem(name)}</p>
                        <div className='flex justify-center items-center border-[--Rose-100] border-[1px] hover:bg-[--Rose-300] rounded-full w-6 h-6' onClick={() => incrementQuantity(name)}>
                            <img src="assets/images/icon-increment-quantity.svg" alt="incrementIcon" loading='lazy' />
                        </div>
                    </div>
                )}
            </div>
            <p className='mt-8 text-[--Rose-500]'>{cuisine}</p>
            <h1 className='font-semibold text-[--Rose-900] text-lg'>{name}</h1>
            <p className='text-[--Red]'>${rating.toFixed(2)}</p>
        </div>
    )
}

export default Product