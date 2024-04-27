import React from 'react'

const VideoCard = ({info}) => {
  if(!info) return null;
  const {snippet, statistics} = info;
  const {title, channelTitle, thumbnails} = snippet;
  const {viewCount, likeCount} = statistics
  return (
    <div className='w-72 border-2 border-black m-2'>
      <img className='rounded-md mb-2' src={thumbnails.medium.url}/>
      <h3 className='font-semibold mb-[2px]'>{title}</h3>
      <p className= 'text-[#AAAAAA] mb-[1px]'>{channelTitle}</p>

      { viewCount > 1000000 ? <span className= 'text-[#AAAAAA] mb-[1px]'>{Math.floor(viewCount/1000000)}M views</span> :
            <span className= 'text-[#AAAAAA] mb-[1px]'>{Math.floor(viewCount/1000)}K views</span> }

      { likeCount > 1000000 ? <span className= 'text-[#AAAAAA] mb-[1px] ml-2'>{Math.floor(likeCount/1000000)}M likes</span> :
      <span className= 'text-[#AAAAAA] mb-[1px] ml-2'>{Math.floor(likeCount/1000)}K likes</span> }
    </div>
  )
}

export default VideoCard