import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Cricket", "Coding", "Google", "Artificial Intelligence", "IPL 2024", "Telugu Cinema", "Mixes", "News", "T-20 Worldcup 2024", "International"]
  return (
    <div className='flex'>
        {list.map( (name, index) => (
            <Button name={name} key={index}/>
        ))}
    </div>
  )
}

export default ButtonList