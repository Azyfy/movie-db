import { useState, useEffect, ChangeEvent } from "react"
import { useDispatch } from "react-redux"

import { initializeSearchResults, clearSearchResults } from "../store/reducers"


const useTimedValue = (value: string, time: number) => {
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
    const [ searchInput, setSearchInput ] = useState<string>("")
    const timedValue = useTimedValue(searchInput, 1000)
    const dispatch = useDispatch()

    useEffect( () => {

        if(timedValue.length > 3) {
            console.log("HIGHER", timedValue.split(" ").join("+"))
            let searchTerm = timedValue.split(" ").join("+")

            const fetch = async () => {    
                dispatch(initializeSearchResults(type, searchTerm))
              }
            
              fetch()

        }
        else {
            console.log("LOWER", timedValue)
            dispatch(clearSearchResults())
        }
    }, [timedValue, dispatch, type])
   
    const searchForTitles = (e: ChangeEvent) => {

        let inputValue: string = (e.target as HTMLInputElement).value
        setSearchInput(inputValue)    
    }

    return (
        <div className="Search" >

            <input value={searchInput} onChange={searchForTitles} placeholder="Search" />

        </div>
    )
}

export default Search