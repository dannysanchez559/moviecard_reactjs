import React from 'react';
import Modal from './Modal';

class MovieCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
  
        return(
                <div className='card'>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.posterUrl}></img>
                    <button onClick={this.openModal}>Details</button>
                    
                    <Modal 
                        isOpen={this.state.isOpen} 
                        closeModal={this.closeModal}
                        
                        // pass props for Movie Details
                        title={this.props.title}
                        posterUrl={this.props.posterUrl}
                        ratings={this.props.ratings}
                        runtime={this.props.runtime}
                        genre={this.props.genre}
                        plot={this.props.plot}
                        actors={this.props.actors}
                        rated={this.props.rated}
                    />
                </div>
                
                
            )

    }
    
    
}

export default MovieCard