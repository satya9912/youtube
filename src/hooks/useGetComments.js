import { useEffect, useState } from "react"

export const useGetComments = () => {
    const [commentsData, setCommentsData] = useState([]);
    useEffect( () => {
        getComments();
    }, [])

    const getComments = async () => {
        const data = await fetch('https://dummyjson.com/comments');
        const json = await data.json();
        setCommentsData(json.comments)
    }
    return commentsData;
}