import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";


export const BrandWithUs = ({ cards }) => {

    return (
        <Swiper
            style={{height:'100%'}}            
            spaceBetween={0}
            centeredSlides={false}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            slidesPerView={4}
            // navigation
            // pagination
            modules={[Autoplay]}
        >
            {cards.map((item, index) => (
                <SwiperSlide className='swiper-item' key={index}>
                    <span className="card1">
                        {item.image}
                        {item.description}
                    </span>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}
