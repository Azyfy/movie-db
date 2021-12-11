import React from "react"

const PictureBackdrop = ({ backdrop, name, nameForClass }: { backdrop: string, name: string, nameForClass: string }) => {

    return (
        <div className="PictureBackdrop" >
            <picture>
                <source media="(min-width:1023px)" srcSet={`https://image.tmdb.org/t/p/w1280/${ backdrop }`} />
                <source media="(min-width:768px)" srcSet={`https://image.tmdb.org/t/p/w780/${ backdrop }`} />
                <img className={ nameForClass } src={`https://image.tmdb.org/t/p/w300/${ backdrop }`} alt={ `${name}` }/>
            </picture>
        </div>
    )
}

export default PictureBackdrop