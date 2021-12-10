

const Error = ({ message }: { message: string | undefined }) => {
    console.log("MESSAGE", message)
    return (
        <div className="Error" >

            <p> Error </p>
            <p>  { message } </p>

        </div>
    )
}

export default Error