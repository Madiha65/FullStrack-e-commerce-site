import React, {useContext  } from 'react';
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import image from "../../assets/images/image.jpg";
import { MyContext } from '../../App.js';
const ProductItem = (props) => {

const context = useContext(MyContext);

    const viewProductDetails = (id) => {
        console.log("Product ID:", id);
        context.setisOpenProductModal(true);
    }


    return (
        <>
            <div className={`productItem ${props.itemView}`} >
                <div className="imgWrapper">
                    <img src={image} className="w-100" alt="Product" />
                    <span className="badge badge-primary">28%</span>
                    <div className="actions">
                        <Button onClick={() => viewProductDetails(1)}>
                            <AiOutlineFullscreen />
                        </Button>
                        <Button>
                            <FaRegHeart style={{ fontSize: '20px' }} />
                        </Button>
                    </div>
                </div>
                <div className="info">
                    <h4>All Natural Italian-Style Chicken Meatballs</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="my-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                    <div className="d-flex">
                        <span className="oldPrice">$ 25.00</span>
                        <span className="netPrice text-danger ml-1">$ 20.00</span>
                    </div>
                </div>
            </div>

       </>

    )
}
export default ProductItem;