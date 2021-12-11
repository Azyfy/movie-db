import { videos } from "../types" 

const VideoFrame = ({ videos }: { videos: videos }) => {

    return (
        <div className="VideoFrame" >
            <iframe className="video" src={ `https://www.youtube.com/watch?v=${ videos.results[0].key }>` } title={ videos.results[0].name } ></iframe> 
        </div>
    )
}

export default VideoFrame