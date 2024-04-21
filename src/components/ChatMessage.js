import React from 'react'

const ChatMessage = ({name, message, imageURL}) => {
  return (
    <div className='flex items-center p-2 shadow-lg'>
        <img alt='user-icon' 
             src={imageURL}
             className='w-12 mr-2 rounded-[50%]'/>
        <span className='font-bold mr-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage