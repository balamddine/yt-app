import axios from 'axios'

const KEY = 'AIzaSyCTU46nWyvlWaTIQYK8DVWEFc76FQLCnfs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        type: 'video',
        key: KEY
    }
});
