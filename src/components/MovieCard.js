const MovieCard = (props) => {

    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.posterUrl}></img>
            <h2>{props.type}</h2>
            
        </div>
    )
        
}

export default MovieCard