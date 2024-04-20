import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(closeMenu());
    }, [])
  return (
    <>
    <div className='flex flex-col'>
        <div className='mt-16'>
            <iframe width="1000" height="500" 
                    className='px-20 py-9'
                    src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=Phq_t_C6n3V0YSU7`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
        <div>
        <CommentsContainer />
        </div>
    </div>
    </>
  )
}

export default WatchPage