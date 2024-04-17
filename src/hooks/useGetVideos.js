import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useEffect, useState } from "react";

export const useGetVideos = () => {
    const [videos, setVideos] = useState([])
    useEffect( () => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }
    return videos;
}