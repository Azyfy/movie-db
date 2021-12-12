import React from "react"
import { Link } from "react-router-dom"

import "./styles/Titles.css"
import Genres from "./Genres"

import { titlesProps } from "../types"
import PictureBackdrop from "./PictureBackdrop"

const Titles = ( props: titlesProps  ) => {

    if(props.titles.length < 1) {
        return (
            <div className="no-results" >
                No results
            </div>
        )
    }

    return (
        <div className="Titles" >
            <h2 className="secondary-title font-face-mfstrip" > { props.heading } </h2>
            <div className="titles-container" >
                {
                    props?.titles?.map( (title) => {
                        return(
                            <div className="title-container" key={ title.id }  >
                                <Link to={`${props.currentPath}/${title.id}`} key={ title.id } >
                                    <PictureBackdrop nameForClass="backdrop-poster" backdrop={  title.backdrop_path || title.poster_path } name={ ((title as any).name || (title as any).title) }  />

                                    <h3> { (title as any).name || (title as any).title } </h3>
                                    <p> { (title as any).release_date || (title as any).first_air_date } </p>
                                    <Genres titleGenres={title.genre_ids} genres={props.genres} />
                                    <p> { title.overview.slice(0, 100) } . . . </p>
                                    <span> { title.vote_average } </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Titles