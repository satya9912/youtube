import React from 'react'
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const Body = () => {
    const showMenu = useSelector(store => store.app.showMenu);
  return (
    <div className='flex'>
        {showMenu ? <Sidebar /> : null}
        <MainContainer />
    </div>
  )
}

export default Body