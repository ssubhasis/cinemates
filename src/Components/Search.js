import React, { Component } from 'react'
import {Button, ButtonGroup} from "@chakra-ui/react"
import axios from 'axios'
import Suggestions from '../Components/Suggestions'

// const { API_KEY } = process.env
const API_URL = 'https://teampolaris.web.illinois.edu/search-movies'

class Search extends Component {
  state = {
    query: '',
    results: [],
    queryTitleId: ''
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

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.state.results.map(r => {
        if (r.primaryTitle == this.state.query){
          this.state.queryTitleId= r.titleId
      };
    });
    window.location.href = "https://www.google.com/search?q="+this.state.queryTitleId;
  }


  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
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
        <Button colorScheme="orange" variant="solid" type="submit" onClick={this.onSubmitHandler}>Submit</Button>

      </form>
    )

  }
}

export default Search