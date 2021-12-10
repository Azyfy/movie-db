import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

import Search from "./Search"

const NavMenu = () => {
    let location = useLocation()
    const [navPath, setNahPath] = useState( (location.pathname.slice(1, 6) === "top-m" ) ?
                                                "movie" : "tv" )

    const handleClick = (value: string) => {
        setNahPath(value)
    }

    if(location.pathname !== "/top-movies" && location.pathname !== "/top-shows" ) {
        return null
    }

    return (
        <div className="NavMenu" >

            <nav>
                <Link to="/top-movies" onClick={ () => handleClick("movie") }  > Movies </Link>
                <Link to="/top-shows" onClick={ () => handleClick("tv") }  > TV Shows </Link>
            </nav>

            <Search type={navPath} />
            
        </div>
    )
}

export default NavMenu