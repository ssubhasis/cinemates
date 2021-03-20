import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from '../Components/Suggestions'

// const { API_KEY } = process.env
const API_URL = 'https://teampolaris.web.illinois.edu/search-movies'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}/${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }


  render() {
    return (
      <form>
        <input list="browsers" name="browser" id="browser"
            style={
                {
                    marginTop: "10px",
                    width: "88%"
                }
            }
            size="lg"
            bg="white"
            placeholder="Search for Movies..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} /><br/>
        <input type="submit"></input>
      </form>
    )

  }
}

export default Search