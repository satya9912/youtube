import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-48 p-4 mt-20 fixed overflow-y-auto' style={{ maxHeight: 'calc(100vh - 80px)', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
        <div className='mb-3'>
            <ul>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Home
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Shorts
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Live
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Free Fire
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Watch
                </li>
            </ul>
        </div>

        <div className='mb-3'>
            <h1 className='font-bold mb-2'>Subscriptions</h1>
            <ul>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Code for interview
                 </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Off-Campus Jobs
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Learn React
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Free Fire
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Javascript
                </li>
            </ul>
        </div>

        <div className='mb-3'>
            <h1 className='font-bold mb-2'>Explore</h1>
            <ul>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Trending
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Shopping
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Films
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Music
                </li>
                <li className='hover:bg-gray-500 py-2 active:opacity-45 cursor-pointer rounded-md pl-[10%]'> Gaming
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar