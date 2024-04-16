import React from 'react'

const VideoCard = ({info}) => {
  if(!info) return null;
  const {snippet, statistics} = info;
  const {title, channelTitle, thumbnails} = snippet;
  const {viewCount, likeCount} = statistics
  return (
    <div className='w-72 border-2 m-2'>
      <img src={thumbnails.medium.url}/>
      <h3 className='font-semibold mb-[2px]'>{title}</h3>
      <p className='text-gray-400 mb-[1px]'>{channelTitle}</p>
      <p>{viewCount} views</p>
      <p>{likeCount} likes</p>
    </div>
  )
}

export default VideoCard