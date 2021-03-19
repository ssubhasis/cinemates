import React, { Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';  
import Header from "./Components/Header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highestrated: [],
   
      trending:[] 
    };

    
  }

  // getNames() {
  //   fetch('http://18.206.168.148:5000/movies/highestrated ')
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         highestrated: response
  //       })
  //       console.log(this.state)
  //     })
  // }


  // getTrending() {
  //   fetch('http://18.206.168.148:5000/movies/trending ')
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         trending: response
  //       })
  //       console.log(this.state)
  //     })
  // }



  // componentDidMount() {
  //   this.getNames();
  //   this.getTrending(); 
  // }

  render() {
    return (
      <div className="App">
        <div>
        <Header></Header>
       
        {/* {this.state.trending.map((movie, index) => (
        <div key={movie.titleId}>
          <h1>{movie.primaryTitle}!</h1>
          <p>Rated {movie.avgRating} by {movie.numOfVotes} viewers.</p>
        </div>
    ))} */}

        <Homepage></Homepage>
        </div>
        {/* {this.state.highestrated.map((movie, index) => (
        <div key={movie._id}>
          <h1>{movie.primaryTitle}</h1>
          <p>Rated {movie.avgRating} by {movie.numOfVotes} viewers.</p>
        </div>
    ))} */}
      </div>
    );
  }
}

export default App;