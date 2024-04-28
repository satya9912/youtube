import React from 'react'

const WatchPageShimmer = () => {
    const chatArray = Array(10).fill(0)
  return (
    <div className='flex flex-col w-full bg=[#0F0F0F] spa'>
       <div className='flex w-full'>
          <div className='mt-24 ml-3 w-[1100px] h-[550px] bg-gray-400'>
          </div>
          <div className='ml-3 mt-24 h-[550px] w-[380px] bg-black'>
                {chatArray.map( (e, index) => (
                    <div className='flex mt-2'>
                    <div className='w-12 h-12 bg-gray-400 rounded-[50%] mr-2'></div>
                    <div className='w-[90%] h-10 bg-gray-400 rounded-lg'></div>
                    </div>
                ))}
          </div>
        </div>
    </div>
  )
}

export default WatchPageShimmer;