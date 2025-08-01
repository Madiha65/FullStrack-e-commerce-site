import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import image from "../../assets/images/image.jpg";
import imageBack from "../../assets/images/imageBack.jpg";
import imageSide from "../../assets/images/imageSide.jpg";
import React, { useRef, useContext} from 'react';
import { MyContext } from '../../App.js';

const ProductZoom = () => {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
const context = useContext(MyContext);
    var Settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    var Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    const goto = (index) => {
        zoomSliderBig.current.slickGoTo(index);
        zoomSlider.current.slickGoTo(index);
    }
    return (
        <div className="productZoom">
            <div className="productZoom position-relative">
                <div className="badge badge-primary">28%</div>
                <Slider {...Settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                    <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={image} />
                    </div>
                    <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={imageBack} />
                    </div>
                    <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={imageSide} />
                    </div>

                </Slider>
                <Slider {...Settings} className="zoomSlider" ref={zoomSlider}>
                    <div className={`item ${context.isOpenProductModal ? 'active' : ''}`}>
                        <img src={image} className='w-100' alt="Product front view" onClick={() => goto(0)} />
                    </div>
                    <div className={`item ${context.isOpenProductModal ? 'active' : ''}`}>
                        <img src={imageBack} className='w-100' alt="Product back view" onClick={() => goto(1)} />
                    </div>
                    <div className={`item ${context.isOpenProductModal ? 'active' : ''}`}>
                        <img src={imageSide} className='w-100' alt="Product side view" onClick={() => goto(2)} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default ProductZoom;