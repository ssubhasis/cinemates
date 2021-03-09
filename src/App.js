import React, { Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';  
import Header from "./Components/Header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highestrated: [],
      names: [],
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  // async handleSubmit(event) {
  //   event.preventDefault();
  //   this.setState({
  //     loading: true,
  //   })
  //   await fetch('/getnames/' + this.state.name, {
  //     method: 'POST'
  //   });
  //   this.getNames()
  // }


  getNames() {
    fetch('http://18.206.168.148:5000/movies/highestrated ')
      .then(response => response.json())
      .then(response => {
        this.setState({
          highestrated: response
        })
        console.log(this.state)
      })
  }

  componentDidMount() {
    this.getNames();
  }

  render() {
    return (
      <div className="App">
        <div>
        <Header></Header>
        <Homepage></Homepage>
        </div>
        {this.state.highestrated.map((movie, index) => (
        <div key={movie._id}>
          <h1>{movie.primaryTitle}!</h1>
          <p>Rated {movie.avgRating} by {movie.numOfVotes} viewers.</p>
        </div>
    ))}
      </div>
    );
  }
}

export default App;