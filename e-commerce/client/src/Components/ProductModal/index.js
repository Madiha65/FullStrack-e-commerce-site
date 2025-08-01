import { useContext} from 'react';
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import { IoIosHeartEmpty } from "react-icons/io";
import QuantityDropdown from '../QuantityDropdown';
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from '../../App.js';
import ProductZoom from '../ProductZoom/index.js';
import { FaCartShopping } from "react-icons/fa6";

const ProductModal = (props) => {
const context = useContext(MyContext);
    return (
        <>
            <Dialog
                open={true} className="productModal" onClose={()=>context.setisOpenProductModal(false)} >
                <Button className="close_" onClick={()=>context.setisOpenProductModal(false)}>
                    <MdClose />
                </Button>
                <h4 className="mb-2 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brand:</span>
                        <span className="ml-2"><b>Welch's</b></span>
                    </div>
                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                    <span className="ml-2 text-light mr-4">1 Review</span>
                    <div className="d-flex align-items-center mr-4">
                        <span className="text-light">SKU:</span>
                        <span className="ml-2"><b>ZU49VOR</b></span>
                    </div>
                </div>
                <hr />
                <div className="row mt-2 productDetailModal">
                    <div className="col-md-5">
                <ProductZoom/>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex info align-items-center mb-2">
                            <span className="oldPrice lg">$ 25.00</span>
                            <span className="netPrice text-danger ml-1 lg">$ 20.00</span>
                        </div>
                        <span className="badge bg-success">In Stock</span>
                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                            Class aptent taciti sociosqu ad litora torquent</p>
                        <div className="d-flex align-items-center mt-3">
                            <QuantityDropdown />
                            <Button className="btn-blue bg-red btn-lg btn-big btn-round ml-3"><FaCartShopping/>Add to Cart</Button>
                        </div>
                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className='btn-round btn-sml' variant="outlined"><IoIosHeartEmpty />&nbsp; View wishlist</Button>
                            <Button className='btn-round btn-sml ml-3' variant="outlined"><MdOutlineCompareArrows />&nbsp; Compare</Button>

                        </div>

                    </div>
                </div>
            </Dialog>
        </>
    )

}
export default ProductModal;
