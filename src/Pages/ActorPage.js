import React from 'react';
import Actorinfo from '../Components/Actorinfo'; 
import { useParams } from "react-router";
import ActorBarChartinfo from '../Components/ActorBarChartinfo'



export default function ActorPage() {

    let { id } = useParams();
    console.log(id +"!!!");


    return (
        <div>
            <h1>Actor Page</h1>
            <Actorinfo id={id} ></Actorinfo>
            <ActorBarChartinfo id={id} ></ActorBarChartinfo >
        </div>
    );
}

