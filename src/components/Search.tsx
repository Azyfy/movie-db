import React from "react"
import { useEffect, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import "./styles/Search.css"
import { setSearchTerm } from "../store/reducers"
import { initializeSearchResults, clearSearchResults } from "../store/reducers"
import useTimedValue from "../hooks/useTimedValue"

import { state } from "../types"

const Search = ({ type }: { type:string }) => {
    const searchTerm = useSelector( (state:state) => state.searchTerm)
    const timedValue = useTimedValue( searchTerm , 1000)
    const dispatch = useDispatch()

    useEffect( () => {

        if(timedValue.length >= 3) {
            console.log("HIGHER", timedValue.split(" ").join("+"))
            const joinedSearchTerm = timedValue.split(" ").join("+")

            const fetch = async () => {
                dispatch(initializeSearchResults(type, joinedSearchTerm))
              }

            fetch()

        }
        else {
            console.log("LOWER", timedValue)
            dispatch(clearSearchResults())
        }
    }, [timedValue, dispatch, type])

    const handleChange = (e: ChangeEvent) => {

        const inputValue: string = (e.target as HTMLInputElement).value
        dispatch(setSearchTerm(inputValue))
    }

    return (
        <div className="Search" >

            <input value={searchTerm} onChange={handleChange} placeholder="Search" />

        </div>
    )
}

export default Search