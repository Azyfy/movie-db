import React from "react"

import "./styles/Title.css"
import PictureBackdrop from "./PictureBackdrop"
import VideoFrame from "./VideoFrame"

import { singleMovieTitle, singleShowTitle } from "../types"

const Title = ({ title }: { title: singleMovieTitle | singleShowTitle }) => {


    return (
        <div className="Title" >
            <div className="single-title-container" key={ title.id } >
                {
                    (title.videos.results.length > 0) ?
                    <VideoFrame videos={ title.videos } />
                    : <PictureBackdrop nameForClass="single-backdrop-poster" backdrop={ title.backdrop_path || title.poster_path }  name={ (title as any).name || ((title as any).title) } />
                }

                <h3 className="title-heading font-face-undeveloped" > { (title as any).name || (title as any).title } </h3>
                <p> { (title as any).release_date || (title as any).first_air_date } </p>
                <p> { title.overview } </p>
                <span> { title.vote_average } </span>
            </div>

        </div>
    )
}

export default Title