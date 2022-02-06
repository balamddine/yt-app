import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
const App = () => {
    const [selectedVideo, setselectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings'); // we are using the custom hook
                                                    // That we created in the hook folder

    useEffect(() => {
        setselectedVideo(videos[0]);
    },[videos])

    return (
        <div className='ui container' >
            <SearchBar onFormSubmit={search} />
            I have {videos.length} videos.
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={videos}
                            onVideoSelect={setselectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App