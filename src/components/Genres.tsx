

const Genres = ({ titleGenres, genres }: { titleGenres: any; genres: any } ) => {
    const filteredGenre = genres.filter( (genre:any) => titleGenres.includes(genre.id) )

    return (
        <div className="Genres" >
            {
                filteredGenre.map( (genre:any) => {
                    return (
                        <span key={ genre.id } > { genre.name } </span>
                    )
                })
            }     
        </div>
    )
}

export default Genres