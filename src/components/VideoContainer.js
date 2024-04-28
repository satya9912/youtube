import React from 'react';
import { useGetVideos } from '../hooks/useGetVideos';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import VideoContainerShimmer from '../shimmer/VideoContainerShimmer';

const VideoContainer = () => {
    useGetVideos();
    const showMenu = useSelector(store => store.app.showMenu);
    const videos = useSelector(store => store.video.videos);
    
    if (videos.length === 0) {
        return <VideoContainerShimmer />;
    } else {
        return (
            <>
                <div className={showMenu ? 'grid grid-cols-4 gap-3 p-4' : 'grid grid-cols-5 gap-4 p-4'}>
                    {videos?.map((video) => (
                        <Link to={`/watch?v=${video.id}`} key={video.id}>
                            <VideoCard info={video}/>
                        </Link>
                    ))}
                </div>
            </>
        );
    }
}

export default VideoContainer;
