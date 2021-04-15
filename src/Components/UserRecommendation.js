import React, {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center
} from "@chakra-ui/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , Virtual} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';




export default class UserRecommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: [],
            currIndex: 0,
            userid : this.props.userID
        };
    }
     

    getRecommend() {
        console.log(this.state.userid)
        let api_ur = 'http://18.206.168.148:5000/user/user-movie-recommendation-by-id/' + this.state.userid
        fetch(api_ur).then(response => response.json()).then(response => {
            this.setState({recommend: response})
            console.log(this.state)
        })
    }


    componentDidMount() {
        this.getRecommend();
    }
    
    

    render() {


        return (
            <div>
                <Grid borderRadius="lg" bg="primary.500" templateColumns="repeat(4, 1fr)"
                    gap={6}
                    p="30px"
                    width="100%">

                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    onIndexChanged={(index) => this.setState({'currIndex': index})}
                     > */}

                    {this.state.recommend.map((movie, index) => (
                       /*  <>
                    <SwiperSlide key={movie}> */
                        <Box bg="white" p="5px" borderRadius="md">
                            <div key={
                                movie.titleId
                            }>
                                <img src={
                                        movie.cover_url
                                    }
                                    width="101"
                                    height="150"/>
                                {
                                    movie.primaryTitle
                                }
                                <p>Rated {
                                    movie.avgRating
                                }
                                    by {
                                    movie.numOfVotes
                                }
                                    viewers.</p>
                            </div>
                        </Box>
                       /*  </SwiperSlide>
                        <SwiperSlide>Slied2</SwiperSlide>
                        <SwiperSlide>Slied2</SwiperSlide>
                        <SwiperSlide>Slied2</SwiperSlide>
                        <SwiperSlide>Slied2</SwiperSlide>
                        <SwiperSlide>Slied2</SwiperSlide>
                        <SwiperSlide>Slied2</SwiperSlide>
                        </>
                         */                        
                    ))                  
                }
                    {/* </Swiper> */}
        </Grid>

            </div>
        );
    }


}

