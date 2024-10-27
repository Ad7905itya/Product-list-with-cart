import useProductsData from '../Hook/useProductsData'

const Product = ({ ProductList }) => {
    const { isProductAvailable, setCartItem, getCartItem, incrementQuantity, decrementQuantity} = useProductsData();
    const onClick =() => {
        setCartItem(prevState => [...prevState,{
            thumbnail: ProductList.image.thumbnail,
            name: ProductList.name,
            price: ProductList.price,
            quantity: 1
        }])
    }
    return (
        <div className='max-w-72 relative'>
            <div className='w-full rounded-xl overflow-hidden'>
                <picture>
                    <source media='(min-width:768px)' srcSet={ProductList.image.tablet} />
                    <source media='(max-width:767px)' srcSet={ProductList.image.mobile} />
                    <img src={ProductList.image.thumbnail} alt="" />
                </picture>
                {!isProductAvailable(ProductList.name) ? (
                    <button className='flex py-2 md:px-3 w-[70%] text-sm items-center justify-center gap-2 rounded-3xl bg-white text-[--Rose-900] hover:border-[--Red] hover:text-[--Red] border-[1px] border-[--Rose-300] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold' onClick={onClick}><img src="assets/images/icon-add-to-cart.svg" alt="cart image" />Add to Cart</button>
                ) : (
                    <div className='flex py-2 md:px-3 w-[70%] text-sm items-center justify-around gap-2 rounded-3xl bg-[--Red] text-[--Rose-900]   border-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
                        <div className='w-6 h-6 hover:bg-[--Rose-300] rounded-full flex justify-center items-center border-[1px] border-[--Rose-100]' onClick={()=> decrementQuantity(ProductList.name)}>
                            <img src="assets/images/icon-decrement-quantity.svg" alt="decrementIcon" />
                        </div>
                        <p className='text-[--Rose-100]'>{getCartItem(ProductList.name)}</p>
                        <div className='w-6 h-6 hover:bg-[--Rose-300] rounded-full flex justify-center items-center border-[1px] border-[--Rose-100]' onClick={()=> incrementQuantity(ProductList.name)}>
                            <img src="assets/images/icon-increment-quantity.svg" alt="incrementIcon" />
                        </div>
                    </div>
                )}
            </div>
            <p className='text-[--Rose-500] mt-6'>{ProductList.category}</p>
            <h1 className='text-lg text-[--Rose-900] font-semibold'>{ProductList.name}</h1>
            <p className='text-[--Red]'>${ProductList.price.toFixed(2)}</p>
        </div>
    )
}

export default Product