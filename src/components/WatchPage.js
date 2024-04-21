import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(closeMenu());
    }, []);
    
  return (
    <>
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
          <div className='mt-16'>
              <iframe width="1100" height="600" 
                      className='mx-5 py-9'
                      src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=Phq_t_C6n3V0YSU7`} 
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
              </iframe>
          </div>
          <div className='mr-1'> <LiveChat /> </div>
      </div>
        <div>
        <CommentsContainer />
        </div>
    </div>
    </>
  )
}

export default WatchPage