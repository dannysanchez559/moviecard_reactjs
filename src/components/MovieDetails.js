const MovieDetails = (props) => {

    return(
        <div className = 'container'>
            <div className = 'moviePoster'>
                <img src={props.posterUrl}></img>
            </div>

            <div className = 'movieDetails'>

                <div className = 'titleDiv'>
                    <h2>{props.title}</h2>
                    <h2 className='ratings'>{props.ratings}</h2>
                </div>
                <div className = 'movieSpecs'>
                    <p>{props.rated}</p>
                    <p>{props.runtime}</p>
                    <p>{props.genre}</p>
                </div>
                <div className = 'movieInfo'>
                    <h4>Plot</h4>
                    <p>{props.plot}</p>
                    <h4>Actors</h4>
                    <p>{props.actors}</p>

                </div>
                
                

            </div>
        </div>
    )
        
}

export default MovieDetails