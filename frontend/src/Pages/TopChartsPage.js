import React from 'react';

//swiper stuff,ignore for now
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// <Swiper
//       spaceBetween={50}
//       slidesPerView={5}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
     
//     </Swiper>

import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text
} from "@chakra-ui/react"
import {Button, ButtonGroup} from "@chakra-ui/react"
import TrendingMovies from '../Components/TrendingMovie';
import HighestRatedMovies from '../Components/HighestRatedMovies';


export default function TopChartsPage() {


    return (
        <div>
            
            <Grid h="auto" templateRows="auto  1fr" templateColumns="repeat(1, 1fr)"
                gap={4}
                backgroundColor="primary.100">
           
                

                <GridItem colSpan={6}  >
                    <Text fontSize="4xl" color="white" >
                    Top rate movies</Text>
                    <Center>
                        <TrendingMovies></TrendingMovies>
                    </Center>
                </GridItem>


             

<GridItem colSpan={6}  >
                    <Text fontSize="4xl" color="white" >
                        Highest Rated Movies</Text>
                    <Center>
                        <HighestRatedMovies></HighestRatedMovies>
                    </Center>
                </GridItem>



            </Grid>
    
        </div>
    );
}

