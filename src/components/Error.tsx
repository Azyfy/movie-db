import React from "react"
import "./styles/Error.css"

const Error = ({ message }: { message: string | undefined }) => {

    return (
        <div className="Error" >

            <p> Error </p>
            <p>  { message } </p>

        </div>
    )
}

export default Error