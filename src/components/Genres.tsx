import React from "react"
import { genre } from "../types"

const Genres = ({ titleGenres, genres }: { titleGenres: [id: number]; genres: [genre] } ) => {

    const filteredGenre = genres.filter( (genre) => titleGenres.includes(genre.id) )

    return (
        <div className="Genres" >
            {
                filteredGenre.map( (genre) => {
                    return (
                        <span key={ genre.id } > { genre.name } </span>
                    )
                })
            }
        </div>
    )
}

export default Genres