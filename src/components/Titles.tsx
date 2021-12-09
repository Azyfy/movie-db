import "./Titles.css"
import Genres from "./Genres"

const Titles = ( props:any ) => {

    return (
        <div className="Titles" >
            
            <div className="titles-container" >
                {
                    props.titles.map( (title: any) => {
                        return(
                            <div className="title-container" key={ title.id } >
                                <img src={`https://image.tmdb.org/t/p/w300/${title.backdrop_path || title.poster_path}`} alt={`image for ` + (title.name || title.title) }/>
                                <h3> { title.name || title.title } </h3>
                                <p> { title.release_date || title.first_air_date } </p>
                                <Genres titleGenres={title.genre_ids} genres={props.genres} />
                                <p> { title.overview.slice(0, 100) } . . . </p>
                                <span> { title.vote_average } </span>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Titles