import React from "react"
import { Link } from "react-router-dom"

import "./styles/Titles.css"
import Genres from "./Genres"

import { titlesProps, showTitles, movieTitles } from "../types"
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
                            <section>
                                <div className="title-container" key={ title.id }  >
                                    <Link to={`${props.currentPath}/${title.id}`} key={ title.id } >
                                        <PictureBackdrop nameForClass="backdrop-poster" backdrop={  title.backdrop_path  } name={ ((title as showTitles).name || (title as movieTitles).title) }  />

                                        <h3 className="titles-heading" > { (title as showTitles).name || (title as movieTitles).title } </h3>
                                        <p> { (title as movieTitles).release_date || (title as showTitles).first_air_date } </p>
                                        <Genres titleGenres={title.genre_ids} genres={props.genres} />
                                        <p> { title.overview.slice(0, 100) } . . . </p>
                                        <span> { title.vote_average } </span>
                                    </Link>
                                </div>
                            </section>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Titles