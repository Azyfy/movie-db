import React from "react"
import "./styles/Header.css"

const Header = () => {

    return (
        <header className="Header" >
            <picture>
                <source media="(max-width:768px)" srcSet="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" />
                <img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="tmdb lgo" />
            </picture>

            <h1 className="main-title font-face-acfilmstrip" > Movie and TV Show DB </h1>

            <div className="ld-mode" >
            </div>

        </header>
    )
}

export default Header