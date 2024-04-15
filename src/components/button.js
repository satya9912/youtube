import React from 'react'

const Button = ({name}) => {
  return (
    <div >
        <button className='bg-gray-400 py-2 px-4 m-1 rounded-lg text-white font-semibold'>{name}</button>
    </div>
  )
}

export default Button