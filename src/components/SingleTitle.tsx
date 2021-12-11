import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import "./styles/SingleTitle.css"
import { getTitle } from "../services/moviedb"
import { dispatchError } from "../store/reducers"
import Loader from "./Loader"
import PictureBackdrop from "./PictureBackdrop"
import VideoFrame from "./VideoFrame"

import { singleMovieTitle, singleShowTitle } from "../types"

const SingleTitle = ({ type }: { type:string }) => {
    const [ title, setTitle ] = useState<singleMovieTitle | singleShowTitle | null | undefined>(null)
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
    console.log("SINGLE TITLE", title)
    console.log("SINGLE TITLE VIDEOS", title.videos.results)
    return (
        <div className="SingleTitle" >
            <button id="back-btn" onClick={ () => navigate(-1) } > Back </button>
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

export default SingleTitle