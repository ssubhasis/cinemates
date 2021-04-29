import React from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import { color } from '@chakra-ui/styled-system';




const options = {
  scales: {
    yAxes: [
      {
       
        stacked: false,
        ticks: {
          beginAtZero: true,
          fontColor: "white"
        },
      },
    ],
    xAxes: [
      {
        stacked: false,
      },
    ],
  },
}


export default class ActorBasChartinfo extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = { 
    actor_id : this.props.id,
    actor_basic_info:[],
    };
  }

  getActorInfo(){
    axios.get ( 'http://teampolaris.web.illinois.edu/actorchart-info/' + this.state.actor_id)
    .then((response) => {
      this.setState({
               actor_basic_info: response.data
               })
               console.log(response.data)
    }); 
  }

  componentDidMount() {
    this.getActorInfo(); 
  }

  render() {
    const barchartInfo = {
      labels: [],
      datasets: [
        {
          label: ' avg rating ',
          data0:[],
          data: [],
          data2:[],
          backgroundColor: 'rgb(252, 163, 17)'
        }
      ],
    }

    {
      this.state.actor_basic_info.map((movie, index)=> (
      barchartInfo.labels.push(parseInt(movie.release_year)),
      barchartInfo.datasets[0].data.push(parseFloat(movie.avg_rating)),
      barchartInfo.datasets[0].data2.push(parseInt(movie.num_votes)),
      barchartInfo.datasets[0].data0.push(movie.movie_title)
    ))
  }

    console.log(barchartInfo.labels.length)
    return (
      <div>
        <Bar width="900px"  height="500px"
          data={barchartInfo}
          options={{
            
            scales: {
             
              yAxes: [{
             
                scaleLabel: {
                  display: true,
                  labelString: 'Rating',
                  fontColor:"white"
                },
                gridLines: {
                  display:true
              },
              ticks: {
                beginAtZero:true,
                min: 0,
                max: 10   
            }
              }],
              xAxes:  [{
                scaleLabel: {
                  display: true,
                  labelString: 'Year',
                  fontColor:"white"
                },
                gridLines: {
                  display:true,
                  fontColor:"white"
              }
              }],
            }, 
            title:{
              fontColor:"white",
              display:true,
              text:'Movie Rating',
              fontSize:20,
              
            },
            tooltips: {
              mode: 'point',
              callbacks: {
          
                title: function(tooltipItem, data) {},
                  label: function(tooltipItem, data) {
                    return ['Movie: ' + data.datasets[tooltipItem.datasetIndex].data0[tooltipItem.index],
                    'Average Rating: ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index],
                    'Num of Votes: ' + data.datasets[tooltipItem.datasetIndex].data2[tooltipItem.index]]
                     
                  },
                  
              },
          },
            legend:{
              display:true,
              position:'right'
              
            }
          }}
        />
      </div>
    );
  }
}