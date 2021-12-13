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
                    : <PictureBackdrop nameForClass="single-backdrop-poster" backdrop={ title.backdrop_path }  name={ (title as singleShowTitle).name || ((title as singleMovieTitle).title) } />
                }
                <h3 className="title-heading font-face-undeveloped" > { (title as singleShowTitle).name || (title as singleMovieTitle).title } </h3>

                <div className="details-container" >
                    <div className="details" >
                        <p id="tagline" > { title.tagline } </p>
                        <div>
                            <p> <span className="desc-t" > Status</span>: { title.status } </p>
                        </div>
                        <div>
                            {
                                ((title as singleMovieTitle ).runtime) ?
                                (
                                    <p> <span className="desc-t" >Runtime</span>: { (title as singleMovieTitle).runtime } </p>
                                ) : null
                            }
                            {
                                ((title as singleShowTitle).number_of_seasons) ?
                                (
                                    <p> <span className="desc-t" >Season/Episodes</span>: { (title as singleShowTitle).number_of_seasons }/{ (title as singleShowTitle).number_of_episodes } </p>
                                ) : null
                            }
                        </div>
                        <div>
                            <span className="desc-t" > Year </span>
                            <p> { (title as singleMovieTitle).release_date || (title as singleShowTitle).first_air_date } </p>
                        </div>
                        <div>
                            <span className="desc-t" > Overview </span>
                            <p> { title.overview } </p>
                        </div>
                        <div>
                            <span> Vote average: { title.vote_average } </span>
                        </div>
                    </div>
                    {
                        (title.poster_path) ?
                        <PictureBackdrop nameForClass="single-poster" backdrop={  title.poster_path }  name={ (title as singleShowTitle).name || ((title as singleMovieTitle).title) } />
                        : null
                    }
                </div>
            </div>

        </div>
    )
}

export default Title