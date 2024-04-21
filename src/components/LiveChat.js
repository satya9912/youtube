import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { commentsData } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");
    const chatMessages = useSelector(store => store.chat.messages);

    const getComment = () => {
     const randomIndex = Math.floor(Math.random() * commentsData.length);
     return commentsData[randomIndex];
    }

    useEffect( () => {
        const interval = setInterval( () => {
               const comment = getComment();
                dispatch(addMessage({
                    name: comment.user.username,
                    message: comment.body,
                    imageURL: comment.user.iconUrl
                }))
        }, 1500)

        return () => clearInterval(interval);
    }, [])

  return (
    <>
    <div className='border-2 mt-[100px] w-full h-[530px] bg-slate-100 ml-2 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
            {chatMessages.map( (comment, index) => (
                <ChatMessage name={comment.name} 
                            message={comment.message} 
                            imageURL={comment.imageURL}
                            key={index}
                />
            ))}
        </div>
    </div>
    <form className='mt-2 border-2 py-3 px-1'
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
                name: "current user",
                message: liveMessage,
                imageURL: "https://cdn-icons-png.flaticon.com/128/149/149071.png"
            }))
            setLiveMessage("");
        }}>
        <input type='text'
            className='border-2 px-4 py-2 mx-3 rounded-md'
            placeholder='enter your message...'
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)} />
        <button className='bg-red-700 text-white px-4 py-2 rounded-md'>Submit</button>
    </form>
    </>
  )
}

export default LiveChat