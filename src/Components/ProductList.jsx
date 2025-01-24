import Product from './Product'
import useProductsData from '../Hook/useProductsData'
import { BiFilter } from 'react-icons/bi';
import Data from '../Data/data.json'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const ProductList = () => {
    const { Products } = useProductsData();
    const [OpenPopup, setOpenPopup] = useState(false);
    const [FilterValue, setFilterValue] = useState('All');

    const onHandler = (e) => {
        e.stopPropagation();
        setOpenPopup(!OpenPopup);
    }

    useEffect(() => {

    }, [Products]);

    document.addEventListener('click', () => {
        setOpenPopup(false);
    })

    return (
        <div className='m-auto md:mx-5 md:mb-0 w-full'>
            <div className='relative flex justify-end items-center mb-10'>
                <span className='mr-3 font-bold text-[--Rose-900] text-stone-600'>{FilterValue}</span>
                <div onClick={onHandler} className='flex items-center bg-slate-300 hover:bg-lime-100 rounded-xl cursor-pointer'>
                    <span className='px-3 py-2 font-medium text-[--Rose-900] text-xl'>Filter</span>
                    <BiFilter size={25} className='px-2 w-full' />
                </div>
                {OpenPopup && <div className='top-10 right-2 z-10 absolute bg-white shadow-2xl p-3 rounded-xl w-52 h-72 overflow-auto'>
                    {
                        Data.map((item, index) =>
                            <option onClick={() => setFilterValue(item.name)} className='hover:bg-slate-300 px-3 py-1 rounded-xl cursor-pointer' key={index} value={item.name}>{item.name}</option>)
                    }
                </div>}
            </div>
            <div className='gap-10 grid sm:grid-cols-2 lg:grid-cols-3 m-auto w-full'>
                {Products.length === 0 ?
                    Array(6).fill('').map((_, idx) => <Shimmer key={idx} />) :
                    Products.filter((product) => product.cuisine === FilterValue || FilterValue === 'All').map((product, index) =>
                        <Product key={index} {...product} />
                    )}
            </div>
        </div>
    )
}

export default ProductList