import React from 'react'
import { useSelector } from 'react-redux';

const VideoContainerShimmer = () => {
    const showMenu = useSelector(store => store.app.showMenu);
    const videosArray = Array(20).fill(0);
  return (
    showMenu ? (
        <div className='grid grid-cols-4 gap-2 p-2 mt-2'>
        {videosArray.map( (e,index) => (
            <div className='w-72 h-72 bg-black' key={index}>
                <div className='w-[90%] h-1/2 p-1 bg-gray-500 ml-3 mt-2 rounded-md'> </div>
                <div className='w-[80%] h-4 p-1 bg-gray-500 ml-3 mt-3 rounded-sm'></div>
                <div className='w-[80%] h-4 p-1 bg-gray-500 ml-3 mt-3 rounded-sm'></div>
                <div className='w-[80%] h-4 p-1 bg-gray-500 ml-3 mt-3 rounded-sm'></div>
                <div className='w-[60%] h-4 p-1 bg-gray-500 ml-3 mt-3 rounded-sm'></div>
            </div>    
        ))}
    </div>
    ) : (
        <div className='grid grid-cols-5 gap-2 p-2 mt-2'>
        {videosArray.map( (e,index) => (
            <div className='w-72 h-72 bg-gray-700' key={index}>
                <div className='w-[90%] h-1/2 p-1 bg-gray-500 ml-3 mt-2 rounded-md'> </div>
                <div className='w-[80%] h-4 p-1 bg-gray-500 ml-3 mt-3'></div>
                <div className='w-[80%] h-4 p-1 bg-gray-500 ml-3 mt-3'></div>
                <div className='w-[80%] h-4 p-1 bg-gray-500 ml-3 mt-3'></div>
                <div className='w-[60%] h-4 p-1 bg-gray-500 ml-3 mt-3'></div>
            </div>    
        ))}
       </div>
    )
    
  )
}

export default VideoContainerShimmer;