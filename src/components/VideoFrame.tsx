import React from "react"
import { videos } from "../types"

const VideoFrame = ({ videos }: { videos: videos }) => {

    return (
        <div className="VideoFrame" >
            {
                ( videos.results[0].site === "YouTube" ) ?
                <iframe className="video" src={ `https://www.youtube.com/watch?v=${ videos.results[0].key }>` } title={ videos.results[0].name } ></iframe>
                : <iframe className="video" src={ `https://vimeo.com/${ videos.results[0].id }` } title={ videos.results[0].name } ></iframe>
            }
        </div>
    )
}

export default VideoFrame