import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import newsLetterImg from "../../assets/images/newsLetterImg.jpg";
import { GoArrowRight } from "react-icons/go";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Button from "@mui/material/Button";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { CiMail } from "react-icons/ci";
const Home = () => {
  
  var productSliderOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner ">
                  <img src={banner1} className="cursor w-100" alt="Banner 1" />
                </div>
                <div className="banner mt-3 ">
                  <img src={banner2} className="cursor w-100" alt="Banner 2" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info">
                  <h3 className="mb-0 hd">Best Sellers</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                </div>
                <Button className="viewAllBtn ml-auto">View All<GoArrowRight /></Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={5}
                  navigation={true}
                  slidesPerGroup={3}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                </div>
                <Button className="viewAllBtn ml-auto">View All<GoArrowRight /></Button>
              </div>
              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
              <div className="d-flex align-items-center mt-5 bannersec">
                <div className="banner">
                  <img src={banner3} className="cursor w-100" alt="Banner 3" />
                </div>
                <div className="banner">
                  <img src={banner4} className="cursor w-100" alt="Banner 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSec mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-0">$20 discount for your first order</p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">Join our email subscription now to get updates  <br /> on promotions and coupons.</p>
              <form>
                <div className="input-group mb-3">
                  <CiMail />
                  <input type="text" placeholder="Your Email Address" />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsLetterImg} alt="Newsletter" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
