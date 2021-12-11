import React from "react"
import { render } from "@testing-library/react"
import Error from "../Error"

test("renders error message", () => {
    const message = "TEST"
    const component = render(<Error message={ message } />)

    expect(component.container).toHaveTextContent("TEST")

})