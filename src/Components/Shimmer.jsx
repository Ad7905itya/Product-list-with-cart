import React from 'react'

const Shimmer = () => {
    return (
        <div className='flex flex-col gap-3 w-full h-full'>
            <div className='bg-slate-300 rounded-2xl h-40 animate-pulse'>
            </div>
            <div className='bg-slate-200 rounded-2xl h-6 animate-pulse'>
            </div>
            <div className='bg-slate-200 rounded-2xl w-7/12 h-6 animate-pulse'>
            </div>
        </div>
    )
}

export default Shimmer