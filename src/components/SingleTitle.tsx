import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import "./styles/SingleTitle.css"
import { getTitle } from "../services/moviedb"
import { dispatchError } from "../store/reducers"
import Loader from "./Loader"
import Title from "./Title"

import { singleMovieTitle, singleShowTitle } from "../types"

const SingleTitle = ({ type }: { type:string }) => {
    const [ title, setTitle ] = useState<singleMovieTitle | singleShowTitle | null | undefined>(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    useEffect( () => {

        async function fetch() {

            const id:string|undefined = params.id

            try {
                const singleTitle = await getTitle(id, type)
                setTitle(singleTitle)
            }// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <section>
            <div className="SingleTitle" >
                <button id="back-btn" onClick={ () => navigate(-1) } > <span> { "<" } </span> </button>
                <Title title={ title } />
            </div>
        </section>
    )
}

export default SingleTitle