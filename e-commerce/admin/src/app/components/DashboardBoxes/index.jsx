"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Box from './box';
import { GoGift } from "react-icons/go";
import { FiPieChart } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BsBank } from "react-icons/bs";

const DashboardBoxes = () => {
  return (
    <div className="deshboardboxes">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <Box title="New Orders" icon={<GoGift size={30} className='text-[#3b82f6]' />} count={"1,390"}
         progress ={true} color='#3b82f6'/> </SwiperSlide>

          <SwiperSlide> <Box title="Sales" icon={<FiPieChart size={30} className='text-[#10b981]'/>} count={"$57,890"}
         progress ={false} color='#10b981'/> </SwiperSlide>
         
          <SwiperSlide> <Box title="Revenue" icon={<BsBank size={30} className='text-[#7928ca]'/>} count={"12,890"}
         progress ={true} color='#7928ca'/> </SwiperSlide>

           <SwiperSlide> <Box title="Users" icon={<FiUsers size={30} className='text-[#ff2aca]' />} count={"538"}
         progress ={true} color='#ff2aca'/> </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default DashboardBoxes;
