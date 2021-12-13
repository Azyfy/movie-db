import React from "react"
import { videos } from "../types"

const VideoFrame = ({ videos }: { videos: videos }) => {

    return (
        <div className="VideoFrame" >
            {
                ( videos.results[0].site === "YouTube" ) ?
                <iframe width="100%" sandbox="allow-scripts allow-same-origin allow-presentation" className="video" src={ `https://www.youtube.com/embed/${ videos.results[0].key }` } title={ videos.results[0].name } allow="fullscreen;" ></iframe>
                : <iframe width="100%" className="video" src={ `https://vimeo.com/${ videos.results[0].id }` } title={ videos.results[0].name } allow="fullscreen;" ></iframe>
            }
        </div>
    )
}

export default VideoFrame