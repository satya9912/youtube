import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Cricket", "Coding", "Google", "Artificial Intelligence"]
  return (
    <div className='flex'>
        {list.map( (name, index) => (
            <Button name={name} key={index}/>
        ))}
    </div>
  )
}

export default ButtonList