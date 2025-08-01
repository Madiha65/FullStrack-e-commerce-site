import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import cart from "../../assets/images/cart.png";


const HomeCat = () => {
  const [itemImg] = useState([
    '#fffceb',
    '#e0f7fa',
    '#fce4ec',
    '#e8f5e9',
    '#fff3e0',
    '#ede7f6',
    '#f3e5f5',
    '#f9fbe7',
    '#fbe9e7',
    '#e1f5fe',
    '#f1f8e9',
    '#fdf5e6',
    '#e0f7fa',
    '#fce4ec',
    '#e8f5e9',
    '#fff3e0',
    '#ede7f6',
    '#f3e5f5',
    '#f9fbe7',
    '#fbe9e7',
    '#e1f5fe',
    '#f1f8e9',
    '#fdf5e6',

  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-4 hd">Featured Categories</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={25}
          navigation={true}
          slidesPerGroup={4}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            itemImg.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="item text-center cursor" style={{ backgroundColor: item }}>
                    <img src={cart} alt="Cart" className="w-80"/>
                    <h6>Cake & Milk</h6>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>

  )
}
export default HomeCat;