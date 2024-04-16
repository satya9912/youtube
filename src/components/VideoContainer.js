import React from 'react'
import { useGetVideos } from '../hooks/useGetVideos'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
    const showMenu = useSelector(store => store.app.showMenu);
  const videos = useGetVideos();
  if(videos === null) return null;

  return (
    <div className= {showMenu ? 'grid grid-cols-4 gap-3 p-4 ' : 'grid grid-cols-5 gap-4 p-4 ' }>
        {videos?.map( (video) => (
            <VideoCard info={video} />
        ))}
    </div>
  )
}

export default VideoContainer