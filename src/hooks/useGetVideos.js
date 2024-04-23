import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { addVideos } from "../utils/videoSlice";

export const useGetVideos = () => {
    const dispatch = useDispatch();
    // const [videos, setVideos] = useState([]);
    useEffect( () => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        dispatch(addVideos(json.items));
        // setVideos(json.items);
    }
    // return videos;
}