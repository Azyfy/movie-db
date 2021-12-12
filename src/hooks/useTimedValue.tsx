import { useState, useEffect } from "react"

const useTimedValue = (value: any, time: number) => {
    const [ timedValue, setTimedValue ] = useState(value)

    useEffect( () => {
        const searchTimer = setTimeout( () => {
            setTimedValue(value)
        }, time )

        return () => {
            clearTimeout(searchTimer)
          }
    }, [timedValue, value, time])

    return timedValue
}

export default useTimedValue