import { Link } from "react-router-dom"

import "./Titles.css"
import Genres from "./Genres"

import { titlesProps } from "../types"

const Titles = ( props: titlesProps  ) => {
 

    return (
        <div className="Titles" >
            
            <div className="titles-container" >
                {
                    props?.titles?.map( (title) => {
                        return(
                            <Link to={`${props.currentPath}/${title.id}`} key={ title.id } >
                                <div className="title-container"  >
                                    <img src={`https://image.tmdb.org/t/p/w300/${title.backdrop_path || title.poster_path}`} alt={`image for ` + ((title as any).name || (title as any).title) }/>
                                    <h3> { (title as any).name || (title as any).title } </h3>
                                    <p> { (title as any).release_date || (title as any).first_air_date } </p>
                                    <Genres titleGenres={title.genre_ids} genres={props.genres} />
                                    <p> { title.overview.slice(0, 100) } . . . </p>
                                    <span> { title.vote_average } </span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Titles