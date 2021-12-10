import { Link } from "react-router-dom"

import "./styles/Titles.css"
import Genres from "./Genres"

import { titlesProps } from "../types"

const Titles = ( props: titlesProps  ) => {
 
    if(props.titles.length < 1) {
        return (
            <div>
                Nothing found
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
                                    <picture>
                                        <source media="(min-width:1023px)" srcSet={`https://image.tmdb.org/t/p/w1280/${ title.backdrop_path || title.poster_path}`} />
                                        <source media="(min-width: 768px)" srcSet={`https://image.tmdb.org/t/p/w780/${title.backdrop_path || title.poster_path}`} />
                                        <img className="backdrop-poster" src={`https://image.tmdb.org/t/p/w300/${title.backdrop_path || title.poster_path}`} alt={`image for ` + ((title as any).name || (title as any).title) }/>
                                    </picture> 

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