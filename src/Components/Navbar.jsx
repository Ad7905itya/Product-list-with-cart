import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { SiShopee } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Navbar = ({ totalItemCount }) => {
    return (
        <header className='border-b-2'>
            <div className='flex justify-between items-center backdrop-blur-lg m-auto px-8 py-6 max-w-[1440px]'>
                <h1 className='flex items-center gap-3 font-bold text-[--Rose-900] text-3xl'>
                    <SiShopee size={30} />
                    <span>FoodShop</span>
                </h1>
                <Link to={'/Cart-Box'} title='Cart' className='relative'>
                    <p className={`bg-[--Red] w-5 h-5 left-4 -top-3 flex items-center justify-center rounded-full absolute text-white p-2`}>{totalItemCount}</p>
                    <MdOutlineShoppingCart size={28} className='cursor-pointer' />
                </Link>
            </div>
        </header>
    )
}

export default Navbar