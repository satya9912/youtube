import React from 'react'
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const showMenu = useSelector(store => store.app.showMenu)
  return (
    <div className={showMenu ? 'mt-20 ml-40' : 'mt-20'}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer