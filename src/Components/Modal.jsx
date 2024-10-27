import useProductsData from "../Hook/useProductsData"
import ModalItem from "./ModalItem"

const Modal = ({IsModalOpen,setIsModalOpen}) => {
    const {CartItem,totalPriceCount,setCartItem} = useProductsData();
    const onClick = () => {
        setCartItem([]);
        setIsModalOpen(false);
    }
    return (
        <div className={`w-full min-h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 absolute ${IsModalOpen? '': 'hidden'} overflow-y-scroll`}>
            <div className="w-full sm:w-1/2 flex flex-col justify-between min-h-96 z-20 bg-white top-14 left-1/2 -translate-x-1/2 px-5 py-2 absolute rounded-xl">
            <p className="mt-5"><img src="assets/images/icon-order-confirmed.svg" alt="" /></p>
            <h1 className="mt-2 text-2xl md:text-3xl font-bold">Order Confirmed</h1>
            <p className="text-[--Rose-300] md:text-base text-sm font-semibold">we Hope you enjoy your food!</p>
            <div className="p-5 mt-6 pb-2 bg-[--Rose-50] rounded-xl">
                {CartItem.map((item,i)=> <ModalItem key={i} product={item} />)}
                <div className="flex justify-between items-center py-3 px-2">
                    <p className="font-bold text-[--Rose-500]">Order Total</p>
                    <h1 className="text-2xl font-bold">${totalPriceCount().toFixed(2)}</h1>
                </div>
            </div>
            <button className="w-full mb-5 mt-3 bg-[--Red] py-2 font-medium text-white text-lg rounded-3xl" onClick={onClick}>Start New Order</button>
            </div>
        </div>
    )
}

export default Modal