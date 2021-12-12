import React from "react"
import { render } from "@testing-library/react"
import Genres from "../Genres"

test("renders gender name", () => {
    const titleGenres = [ 0, 3 ]
    const genres = [ { id: 0, name: "TEST" } ]
    const component = render(<Genres titleGenres={ titleGenres } genres={genres} />)

    expect(component.container).toHaveTextContent("TEST")

})