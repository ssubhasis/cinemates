import React, { Component } from 'react'
import {Button, ButtonGroup, Input, Grid, Box, SimpleGrid} from "@chakra-ui/react"
import axios from 'axios'
import Suggestions from '../Components/Suggestions'
import { withRouter } from 'react-router-dom';


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
        console.log(data)
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
    window.location.href = "/#/movie/"+this.state.queryTitleId;
  }


  render() {
    return (

      <form onSubmit={this.onSubmitHandler}>
        
        <Input list="browsers" name="browser" id="browser" autocomplete="off"
            style={
                {
                    marginTop: "20px",
                    width: "75%",
                    height:"50px",
                    borderRadius: "40px",
                    marginRight:"20px",
                    marginBottom:"20px"
                }
            }
            focusBorderColor="orange.400"
            size="lg"
            bg="white"
            placeholder="Search by movie"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
        />

        <Suggestions results={this.state.results} />
       
        <Button bgColor="primary.200" variant="solid" type="submit" onClick={this.onSubmitHandler}>Go</Button>
       
    
      </form>
   
     
    )

  }
}

export default Search