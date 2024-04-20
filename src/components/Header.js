import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cachedResults } from '../utils/searchSlice';

const Header = () => {

     const dispatch = useDispatch();
     const searchCache = useSelector(store => store.search);
     const [searchQuery, setSearchQuery] = useState("");
     const [suggestions, setSuggestions] = useState([]);
     const [showSuggestions, setShowSuggestions] = useState(false);

     useEffect( () => {
          const timer = setTimeout( () => {
               if(searchCache[searchQuery]){
                    setSuggestions(searchCache[searchQuery]);
               } else{
                    getSearchData();
               }
          }, 200)

          return () => {
               clearInterval(timer);
          }
     }, [searchQuery]);

     const getSearchData = async () => {
          const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
          const json = await data.json();
          setSuggestions(json[1]);
          dispatch(cachedResults({[searchQuery]: json[1]}))
     }

  return (
     <div className='fixed top-0 right-0 left-0 border-2 z-50 bg-white'>
     <div className='flex items-center justify-between'>
        <div className='flex items-center mr-8'>
            <img alt='menu-icon' 
                 src='https://cdn-icons-png.flaticon.com/128/2516/2516745.png'
                 className='w-8 h-8 mx-4 cursor-pointer'
                 onClick={() => dispatch(toggleMenu())}
            />

            <a href='/'>
            <img alt='youtube-logo' 
                 src='https://tse4.mm.bing.net/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&pid=Api&P=0&h=180'
                 className='w-32'
            />
            </a>
        </div>

        <div className='flex items-center'>
            <input type='search' 
                   className='w-[450px] h-11 border-2 p-2'
                   placeholder='search'
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)} 
                   onFocus={() => setShowSuggestions(true)}
                   onBlur={() => setShowSuggestions(false)}
            />
            <button className='w-10 h-11 border-2 -ml-[2px] bg-gray'>
            <img alt='search-icon' 
                 src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
                 className='w-8 p-1 text-white'
            />
            </button>
        </div>

        <div className='flex items-center'>
            <img alt='create-icon' 
                 src='https://supersimple.dev/public/img/exercises/youtube/icons/upload.svg'
                 className='w-26 h-10 mx-2'
            />
            <img alt='apps-icon' 
                 src='https://supersimple.dev/public/img/exercises/youtube/icons/youtube-apps.svg'
                 className='w-26 h-10 mx-2'
            />
            <img alt='notifications-icon' 
                 src='https://supersimple.dev/public/img/exercises/youtube/icons/notifications.svg'
                 className='w-26 h-10 mx-2'
            />
            <img alt='user-icon' 
                 src='https://cdn-icons-png.flaticon.com/128/149/149071.png'
                 className='w-26 h-10'
            />
        </div>
    </div>

    <div>
          {suggestions.length > 0 && showSuggestions && (
               <ul className="fixed left-[32.8rem] bg-white w-[450px] -mt-3 border-2 py-2 px-2 border-gray-100">
                    {suggestions.map((suggestion, index) => (
                         <li key={index} className="flex items-center text-lg cursor-pointer">
                              <img
                              src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
                              alt="search-icon"
                              className="w-4 object-contain mr-2"
                              />
                              {suggestion}
                         </li>
                    ))}
               </ul>
          )}
    </div>
 </div>
  )
}

export default Header