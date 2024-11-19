import React, { useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = ({ totalItemCount }) => {
    const [HoverCount, setHoverCount] = useState(false)
    return (
        <header className='border-b-2'>
            <div className='max-w-[1440px] px-8 py-3 backdrop-blur-lg m-auto flex items-center justify-between'>
                <h1 className='text-[40px] text-[--Rose-900] font-bold '>Desserts</h1>
                <Link onMouseEnter={()=> setHoverCount(true)} onMouseLeave={()=> setHoverCount(false)} to={'/Cart-Box'} title='Cart' className='relative'>
                        <p className={`bg-[--Red] w-5 h-5 left-4 -top-3 ${HoverCount? 'flex': 'hidden'} items-center justify-center rounded-full absolute text-white p-2`}>{totalItemCount}</p>
                        <MdOutlineShoppingCart size={28} className='cursor-pointer' />
                </Link>
            </div>
        </header>
    )
}

export default Navbar