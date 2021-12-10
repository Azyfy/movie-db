import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import "./styles/SingleTitle.css"
import { getTitle } from "../services/moviedb"
import { dispatchError } from "../store/reducers"
import Loader from "./Loader"

import { movieTitles, showTitles } from "../types"

const SingleTitle = ({ type }: { type:string }) => {
    const [ title, setTitle ] = useState<movieTitles | showTitles | null | undefined>(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let params = useParams()

    useEffect( () => {

        async function fetch() {

            let id:string|undefined = params.id

            try {
                const singleTitle = await getTitle(id, type)

                setTitle(singleTitle)
            }
            catch (err: any) {
                dispatch(dispatchError(err.message))
            }

          }
        
        fetch()

    }, [params.id, type, dispatch])

    if(!title) {
        return (
            <Loader />
        )
    }

    return (
        <div className="SingleTitle" >
            <button id="back-btn" onClick={ () => navigate(-1) } > Back </button>
            <div className="single-title-container" key={ title.id } >
                <picture>
                    <source media="(min-width:1023px)" srcSet={`https://image.tmdb.org/t/p/w1280/${ title.backdrop_path || title.poster_path}`} />
                    <source media="(min-width:768px)" srcSet={`https://image.tmdb.org/t/p/w780/${title.backdrop_path || title.poster_path}`} />
                    <img className="single-backdrop-poster" src={`https://image.tmdb.org/t/p/w300/${title.backdrop_path || title.poster_path}`} alt={`image for ` + ((title as any).name || (title as any).title) }/>
                </picture> 
                <h3 className="title-heading font-face-undeveloped" > { (title as any).name || (title as any).title } </h3>
                <p> { (title as any).release_date || (title as any).first_air_date } </p>
                
                <p> { title.overview } </p>
                <span> { title.vote_average } </span>
            </div>
        </div>
    )
}

export default SingleTitle