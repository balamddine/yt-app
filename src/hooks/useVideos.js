import { useState, useEffect } from "react";
import youtube from "../apis/youtube";
// this is a custom hook to fetch videos 
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]); // run it only one time 
                            //just like component did mount function

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    }

    return [videos, search];
};

export default useVideos;