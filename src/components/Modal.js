import React, {Component} from "react";
import MovieDetails from "./MovieDetails";

class Modal extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(

            this.props.isOpen && (
                <div className='Modal'>
                    <MovieDetails 
                        title={this.props.title}
                        posterUrl={this.props.posterUrl}
                        ratings={this.props.ratings}
                        runtime={this.props.runtime}
                        genre={this.props.genre}
                        plot={this.props.plot}
                        actors={this.props.actors}
                        rated={this.props.rated}
                    />

                    <button onClick={this.props.closeModal}>Close</button>

                </div>
                
            )
            
        )
    }
}

export default Modal;