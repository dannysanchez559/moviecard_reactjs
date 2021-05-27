import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';

const url = "http://www.omdbapi.com/?apikey=1f80de17&i=tt3896198";

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize first state
    this.state = {
      posterUrl: "",
      title: "",
      ratings: "",
      runtime: "",
      genre: "",
      plot: "",
      actors: "",
      rated: ""
    }
  }

  // need to use componentDidMount to fetch data
  componentDidMount() {
    
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // this.setState only can accept one argument at a time
        this.setState({posterUrl: res.Poster});
        this.setState({title: res.Title});
        this.setState({ratings: res.imdbRating});
        this.setState({runtime: res.Runtime});
        this.setState({genre: res.Genre});
        this.setState({plot: res.Plot});
        this.setState({actors: res.Actors});
        this.setState({rated: res.Rated});
                
      })
      .catch(err => console.log("error", err))
  }

  render(){
    return (
        <div className="App">
          {/* pass in props in MovieCard OR MovieDetails tag */}

        {/* <MovieCard title={this.state.title} posterUrl={this.state.posterUrl} type={this.state.type} /> */}
        <MovieDetails 
          posterUrl={this.state.posterUrl}
          title={this.state.title}
          ratings={this.state.ratings}
          runtime={this.state.runtime}
          genre={this.state.genre}
          plot={this.state.plot}
          actors={this.state.actors}
          rated={this.state.rated}
          />
        </div>
      );

    }
  
}

export default App;
