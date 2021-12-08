import { Link } from "react-router-dom"

import Search from "./Search"

const NavMenu = () => {

    return (
        <div className="NavMenu" >

            <nav>
                <Link to="/top-movies"  > Movies </Link>
                <Link to="/top-shows"  > TV Shows </Link>
            </nav>

            <Search />
            
        </div>
    )
}

export default NavMenu