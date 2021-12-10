import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getTitle } from "../services/moviedb"
import Loader from "./Loader"

import { movieTitles, showTitles } from "../types"

const SingleTitle = ({ type }: { type:string }) => {
    const [ title, setTitle ] = useState<movieTitles | showTitles | null | undefined>(null)
    let params = useParams()

    useEffect( () => {

        async function fetch() {

            let id:string|undefined = params.id
            const singleTitle = await getTitle(id, type)

            setTitle(singleTitle)
          }
        
        fetch()

    }, [params.id, type])

    if(!title) {
        return (
            <Loader />
        )
    }

    return (
        <div className="SingleTitle" >
            <div className="single-title-container" key={ title.id } >
                <img src={`https://image.tmdb.org/t/p/w300/${title.backdrop_path || title.poster_path}`} alt={`image for ` + ((title as any).name || (title as any).title) }/>
                <h3> { (title as any).name || (title as any).title } </h3>
                <p> { (title as any).release_date || (title as any).first_air_date } </p>
                
                <p> { title.overview } </p>
                <span> { title.vote_average } </span>
            </div>
        </div>
    )
}

export default SingleTitle