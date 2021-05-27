import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard';

const url = "http://www.omdbapi.com/?apikey=1f80de17&i=tt3896198";
let title;
let posterUrl;
let type;

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize first state
    this.state = {
      title: "",
      posterUrl: "",
      type: ""
    }
  }

  // need to use componentDidMount to fetch data
  componentDidMount() {
    
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // this.setState only can accept one argument at a time
        this.setState({title: res.Title});
        this.setState({posterUrl: res.Poster});
        this.setState({type: res.Type});
                
      })
      .catch(err => console.log("error", err))
  }


  render(){

    return (
        <div className="App">
          {/* pass in props in MovieCard tag */}

        <MovieCard title={this.state.title} posterUrl={this.state.posterUrl} type={this.state.type} />

        </div>
      );

    }
  
}

export default App;
