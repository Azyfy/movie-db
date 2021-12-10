import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

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
            <button onClick={ () => navigate(-1) } > Back </button>
            <div className="single-title-container" key={ title.id } >
                <img src={`https://image.tmdb.org/t/p/w300/${title.backdrop_path || title.poster_path}`} alt={`image for ` + ((title as any).name || (title as any).title) }/>
                <h3 className="font-face-undeveloped" > { (title as any).name || (title as any).title } </h3>
                <p> { (title as any).release_date || (title as any).first_air_date } </p>
                
                <p> { title.overview } </p>
                <span> { title.vote_average } </span>
            </div>
        </div>
    )
}

export default SingleTitle