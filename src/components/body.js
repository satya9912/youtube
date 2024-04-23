import React from 'react'
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    const showMenu = useSelector(store => store.app.showMenu);
  return (
    <div className='flex bg-black text-white'>
        {showMenu ? <Sidebar /> : null}
        <Outlet />
    </div>
  )
}

export default Body