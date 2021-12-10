import { useState, useEffect, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setSearchTerm } from "../store/reducers"
import { initializeSearchResults, clearSearchResults } from "../store/reducers"

import { state } from "../types"


const useTimedValue = (value: any, time: number) => {
    const [ timedValue, setTimedValue ] = useState(value)

    useEffect( () => {
        const searchTimer = setTimeout( () => {
            setTimedValue(value)
            console.log("TIMEOUT", value, timedValue)
        }, time )

        return () => {
            clearTimeout(searchTimer)
          }
    }, [timedValue, value, time])

    return timedValue
}

const Search = ({ type }: { type:string }) => {
    const searchTerm = useSelector( (state:state) => state.searchTerm)
    const timedValue = useTimedValue( searchTerm , 1000)
    const dispatch = useDispatch()

    useEffect( () => {

        if(timedValue.length > 3) {
            console.log("HIGHER", timedValue.split(" ").join("+"))
            let joinedSearchTerm = timedValue.split(" ").join("+")

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

        let inputValue: string = (e.target as HTMLInputElement).value
        dispatch(setSearchTerm(inputValue)) 
    }

    return (
        <div className="Search" >

            <input value={searchTerm} onChange={handleChange} placeholder="Search" />

        </div>
    )
}

export default Search