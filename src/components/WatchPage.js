import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false)
  const [subscribe, setSubscribe] = useState(false)

    useEffect( () => {
        dispatch(closeMenu());
    }, []);

    const id = searchParams.get('v');
    const dispatch = useDispatch();
    const videos = useSelector(store => store.video.videos);
    const videoIndex = videos?.findIndex((video) => video.id === id);
    const video = videos[videoIndex];
    const {channelTitle, description, title, publishedAt} = video.snippet;
    const {likeCount, viewCount} = video.statistics;
    
  return (
    <>
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
          <div className='mt-16'>
              <iframe width="1100" height="600" 
                      className='mx-5 pt-9'
                      src={`https://www.youtube.com/embed/${id}?si=Phq_t_C6n3V0YSU7`} 
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
              </iframe>
          </div>
          <div className='mr-1'> <LiveChat /> </div>
      </div>

      <div className='w-1/2 ml-5 mb-2 -mt-9'>
        <h3 className='font-semibold text-2xl'>{title}</h3>
      </div>

      <div className='flex ml-5 p-2 items-center w-[1100px] border-2 bg-[#272727] text-white'>
        <img src='https://tse1.mm.bing.net/th?id=OIP.gexU3lV6dn_QWA914ycDxAHaFj&pid=Api&P=0&h=180' 
             alt='channel-picture' 
            className='w-14 h-14 rounded-[50%] object-cover mx-2'/>
        <p className='mr-8 font-semibold text-lg'>{channelTitle}</p>  
        <button className='px-4 py-2 bg-red-700 text-white rounded-md mr-8'
                onClick={() => setSubscribe(!subscribe)}>
                {subscribe ? "Unsubscribe" : "Subscribe"}
        </button>

        <div className='flex mr-8 border-1 bg-gray-300  px-4 py-2 rounded-md cursor-pointer'>
          {liked ? (<img alt='like-icon' 
               src='https://cdn-icons-png.flaticon.com/128/535/535190.png'
               className='w-5 h-5 mr-1'
               onClick={() => {setLiked(!liked); setDisliked(false)}}/>) : 
               (<img alt='like-icon' 
               src='https://cdn-icons-png.flaticon.com/128/126/126473.png'
               className='w-5 h-5 mr-1'
               onClick={() => {setLiked(!liked); setDisliked(false) }}/>)
          }
          
          <p className='border-r-2 border-black mr-2 text-black font-semibold pr-1'>{Math.floor(likeCount / 1000)}K</p>  

          {disliked ? (<img alt='like-icon' 
               src='https://cdn-icons-png.flaticon.com/128/9849/9849295.png'
               className='w-5 h-5 mr-1 mt-2'
               onClick={() => {setDisliked(!disliked); setLiked(false)}}/>) : 
               (<img alt='like-icon' 
               src='https://cdn-icons-png.flaticon.com/128/126/126504.png'
               className='w-5 h-5 mr-1 mt-2'
               onClick={() => {setDisliked(!disliked); setLiked(false)}}/>)
          }
        </div> 

        <div className='flex items-center mr-4 border-2 bg-slate-100  px-4 py-2 rounded-md cursor-pointer hover:opacity-50'>
          <img alt='share-icon' 
              src='https://cdn-icons-png.flaticon.com/128/2958/2958791.png'
              className='w-6 h-6 text-white'/>
          <span className='font-semibold text-lg text-black pl-1'>Share</span>        
        </div>

      </div>

      <div className='border-2 w-[1100px] ml-5 p-3 mt-4 bg-[#272727] text-white'>
          <span className='font-semibold mr-2'>{viewCount} views</span>
          <span>uploaded on <span className='font-semibold'>{publishedAt.substring(0,10)}</span></span>
          <p className='mt-4'>{description}</p>
      </div>

      <div>
        <CommentsContainer />
      </div>
    </div>
    </>
  )
}

export default WatchPage