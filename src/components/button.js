import React from 'react'

const Button = ({name}) => {
  return (
    <div >
        <button className='bg-[#3F3F3F] py-2 px-4 m-1 rounded-lg text-white font-semibold'>{name}</button>
    </div>
  )
}

export default Button