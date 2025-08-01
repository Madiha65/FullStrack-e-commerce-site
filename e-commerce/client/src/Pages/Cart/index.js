import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { TiDelete } from "react-icons/ti";
import QuantityDropdown from "../../Components/QuantityDropdown";
import Button from "@mui/material/Button";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-2">Your Cart</h2>
                    <p>There are <b  className="text-red">3</b> products in your cart</p>
                    <div className="row">
                        <div className="col-md-9 pr-5">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="35%" >Product</th>
                                            <th width="15%" >Unit Price</th>
                                            <th width="25%" >Quantity</th>
                                            <th width="15%" >Subtotal</th>
                                            <th width="10%" >Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td width="35%" >
                                                <Link to="/Product/1" className="text-decoration-none">
                                                    <div className="d-flex align-items-center mb-3 cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="Product" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6 className="mb-0">All Natural Italian-Style Chicken Meatballs</h6>
                                                            <Rating name="read-only" value={4.5} size="small" precision={0.5} readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%" >$2.51</td>
                                            <td width="25%">
                                                <QuantityDropdown />
                                            </td>
                                            <td width="15%">$2.51</td>
                                            <td className="remove" width="10%" ><TiDelete /></td>
                                        </tr>
                                        <tr>
                                            <td width="35%" >
                                                <Link to="/Product/1" className="text-decoration-none">
                                                    <div className="d-flex align-items-center mb-3 cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="Product" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6 className="mb-0">All Natural Italian-Style Chicken Meatballs</h6>
                                                            <Rating name="read-only" value={4.5} size="small" precision={0.5} readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%" >$2.51</td>
                                            <td width="25%">
                                                <QuantityDropdown />
                                            </td>
                                            <td width="15%">$2.51</td>
                                            <td className="remove" width="10%" ><TiDelete /></td>
                                        </tr>
                                        <tr>
                                            <td width="35%" >
                                                <Link to="/Product/1" className="text-decoration-none">
                                                    <div className="d-flex align-items-center mb-3 cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="Product" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6 className="mb-0">All Natural Italian-Style Chicken Meatballs</h6>
                                                            <Rating name="read-only" value={4.5} size="small" precision={0.5} readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%" >$2.51</td>
                                            <td width="25%">
                                                <QuantityDropdown />
                                            </td>
                                            <td width="15%">$2.51</td>
                                            <td className="remove" width="10%" ><TiDelete /></td>
                                        </tr>
                                        <tr>
                                            <td width="35%" >
                                                <Link to="/Product/1" className="text-decoration-none">
                                                    <div className="d-flex align-items-center mb-3 cartItemImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="Product" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6 className="mb-0">All Natural Italian-Style Chicken Meatballs</h6>
                                                            <Rating name="read-only" value={4.5} size="small" precision={0.5} readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%" >$2.51</td>
                                            <td width="25%">
                                                <QuantityDropdown />
                                            </td>
                                            <td width="15%">$2.51</td>
                                            <td className="remove" width="10%" ><TiDelete /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='cart border p-3 cartDetails'>
                                <h4>CART TOTAL</h4>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Subtotal</span>
                                    <span className="ml-auto text-red font-weight-bold">$12.31</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Shipping</span>
                                    <span className="ml-auto"><b>Free</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Estimate for</span>
                                    <span className="ml-auto"><b>United Kingdom</b></span>
                                </div>
                                   <div className="d-flex align-items-center mb-3">
                                    <span>Total</span>
                                    <span className="ml-auto text-red font-weight-bold">$12.31</span>
                                </div>
                                 <br/>
                            <Button className="btn-blue bg-red btn-lg btn-big"><FaCartShopping/>Add to Cart</Button>
                            </div>
                        </div>
                       
                                               
                    </div>

                </div>

            </section>
        </>
    )
}
export default Cart;