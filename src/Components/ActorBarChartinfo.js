import {Bar} from 'react-chartjs-2';
import React from 'react'; 
import axios from 'axios';

const barchartInfo = {
  labels: [],
  datasets: [
    {
      label: ' avg rating ',
      data: [],
      backgroundColor: 'rgb(255, 18, 95)'
    }
  ],
}
const options = {
  scales: {
    yAxes: [
      {
        stacked: false,
        ticks: {
          beginAtZero: true,
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
    if(barchartInfo.labels.length==0)
    {
    {this.state.actor_basic_info.map((movie, index)=> (
      barchartInfo.labels.push(parseInt(movie.release_year)),
      barchartInfo.datasets[0].data.push(parseFloat(movie.avg_rating))
    ))}
  }
    console.log(barchartInfo.labels.length)
    return (
      <div>
        <Bar
          data={barchartInfo}
          options={{
            title:{
              display:true,
              text:'Avg Movie Rating',
              fontSize:20
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