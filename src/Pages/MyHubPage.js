import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text
} from "@chakra-ui/react"
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import UserRecommendation from '../Components/UserRecommendation';
import User from '../Components/User.js';
//import TrendingMovies from '../Components/TrendingMovie';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);




export default function MyHubPage() {


    return (
        <div>
            <h1>MyHub Page</h1>
            <Grid h="auto" templateRows="auto 1fr 1fr" templateColumns="repeat(1, 1fr)"
                gap={4}
                backgroundColor="primary.100">
                                   <GridItem colSpan={6}  >
                    <Center>
                        <User></User>
                    </Center>
                     <Text fontSize="4xl" color="white" >
                        My Recommendation</Text>
                    <Center>
                        <UserRecommendation></UserRecommendation>
                    </Center> 
                </GridItem>

    </Grid>
        </div>
    );
}

