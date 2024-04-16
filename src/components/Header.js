import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {

     const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center mr-8'>
            <img alt='menu-icon' 
                 src='https://cdn-icons-png.flaticon.com/128/2516/2516745.png'
                 className='w-8 h-8 mx-4 cursor-pointer'
                 onClick={() => dispatch(toggleMenu())}
            />

            <a href='/'>
            <img alt='youtube-logo' 
                 src='https://tse4.mm.bing.net/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&pid=Api&P=0&h=180'
                 className='w-32'
            />
            </a>
        </div>

        <div className='flex items-center'>
            <input type='search' 
                   className='w-[450px] h-11 border-2 p-2'
                   placeholder='search' 
            />
            <button className='w-10 h-11 border-2 -ml-[2px] bg-gray'>
            <img alt='search-icon' 
                 src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
                 className='w-8 p-1 text-white'
            />
            </button>
        </div>

        <div className='flex items-center'>
            <img alt='create-icon' 
                 src='https://supersimple.dev/public/img/exercises/youtube/icons/upload.svg'
                 className='w-26 h-10 mx-2'
            />
            <img alt='apps-icon' 
                 src='https://supersimple.dev/public/img/exercises/youtube/icons/youtube-apps.svg'
                 className='w-26 h-10 mx-2'
            />
            <img alt='notifications-icon' 
                 src='https://supersimple.dev/public/img/exercises/youtube/icons/notifications.svg'
                 className='w-26 h-10 mx-2'
            />
            <img alt='user-icon' 
                 src='https://cdn-icons-png.flaticon.com/128/149/149071.png'
                 className='w-26 h-10'
            />
        </div>
    </div>
  )
}

export default Header