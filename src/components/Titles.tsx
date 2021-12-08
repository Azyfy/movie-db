import "./Titles.css"

const Titles = ( props:any ) => {

    return (
        <div className="Titles" >

            {
                props.titles.map( (title: any) => {
                    return(
                        <div className="title-container" key={title.id} >
                            <p> {title.name || title.title} </p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Titles