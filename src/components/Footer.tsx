import "./styles/Footer.css"

const Footer = () => {

    return (
        <footer className="Footer" >
            <picture>
                <source media="(min-width:768px)" srcSet="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" />
                <img className="logo-footer" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="tmdb logo" />
            </picture>
        </footer>
    )
}

export default Footer