/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import banner01 from "../../assets/images/banner01.jpg";
import banner02 from "../../assets/images/banner02.jpg";
import banner03 from "../../assets/images/banner03.jpg";
import banner04 from "../../assets/images/banner04.jpg";
import banner05 from "../../assets/images/banner05.jpg";

const HomeBanner = () => {
    return (
        <div className="container mt-3">
            <div className='homeBannerSection'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true}
                    loop= {false}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='item'>
                            <img src={banner01} className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <img src={banner02} className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <img src={banner03} className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <img src={banner05} className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <img src={banner04} className="w-100" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>


    )
}
export default HomeBanner;