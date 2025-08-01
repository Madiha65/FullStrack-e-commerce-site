import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import QuantityDropdown from "../../Components/QuantityDropdown";
import { MyContext } from '../../App.js';
import { useContext, useState } from 'react';
import ProductZoom from "../../Components/ProductZoom/index.js";
import author from "../../assets/images/author.png";
import Tooltip from '@mui/material/Tooltip';
import RelatedProduct from "./RelatedProduct/index.js";
const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    const context = useContext(MyContext);

    const isActive = (index) => {
        setActiveSize(index);
    }



    return (
        <section className="productDetails section">
            <div className="container">
                <div className="d-flex align-items-center mb-4 shadow-sm border-rounded p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7">
                            <ul className="list list-inline ml-auto">
                                <li className="list-inline-item">
                                    <h4 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs.</h4>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center mr-4">
                                            <span className="text-light" >Brands :</span>
                                            <span className="ml-2"><b>Welch's</b></span>
                                        </div>
                                        <li className="list-inline-item">
                                            <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                                            <span className="ml-2 text-light mr-4">1 Review</span>
                                        </li>
                                        <div className="d-flex align-items-center mr-4">
                                            <span className="text-light">SKU:</span>
                                            <span className="ml-2"><b>ZU49VOR</b></span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex info align-items-center mb-2">
                                <span className="oldPrice lg">$ 25.00</span>
                                <span className="netPrice text-danger ml-1 lg">$ 20.00</span>
                            </div>
                            <span className="badge bg-success">In Stock</span>
                            <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                Class aptent taciti sociosqu ad litora torquent.Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                Class aptent taciti sociosqu ad litora torquent</p>
                            <div className="productSize d-flex align-items-center">
                                <span >Size / Weight: </span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)} >
                                            50g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)} >
                                            100g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)} >
                                            150g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>
                                            200g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>
                                            250g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 5 ? 'active' : ''}`} onClick={() => isActive(5)}>
                                            300g
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="productDetails d-flex align-items-center mt-3">
                                <QuantityDropdown />

                                <Tooltip title="Add to my Cart" placement="top-start">
                                    <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add to Cart</Button>
                                </Tooltip>
                                <Tooltip title="Add to my Wishlist" placement="top-start">
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-3' variant="outlined"><IoIosHeartEmpty /></Button>
                                </Tooltip>
                                <Tooltip title="Add to my Compare" placement="top-start">
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-3' variant="outlined"><MdOutlineCompareArrows /></Button>
                                </Tooltip>
                            </div>
                            <div className="mt-3 mb-3">
                                <div className="d-flex align-items-center mr-4 ">
                                    <span className="text-light">Type :</span>
                                    <span className="ml-2">Organic</span>
                                </div>
                                <div className="d-flex align-items-center mr-4">
                                    <span className="text-light">MFG:</span>
                                    <span className="ml-2">July 4.2021</span>
                                </div>
                                <div className="d-flex align-items-center mr-4">
                                    <span className="text-light">LIFE:</span>
                                    <span className="ml-2">50 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className='cart mt-5 p-5 detailsPageTabs'>
                    <div className='customTabs '>
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 0 ? 'active' : ''}`} onClick={() => setActiveTabs(0)}>Description</Button>
                            </li>
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 1 ? 'active' : ''}`} onClick={() => setActiveTabs(1)}>Additional info</Button>
                            </li>
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 2 ? 'active' : ''}`} onClick={() => setActiveTabs(2)}>Reviews (3)</Button>
                            </li>
                        </ul>
                        <br />
                        {activeTabs === 0 && (
                            <div className="tabContent">
                                <h4 className="text-capitalize">Product Description</h4>
                                <p>
                                    Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from
                                    for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear
                                    furiously this apart.
                                </p>
                                <p>
                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently
                                    richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey
                                    precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                </p>

                            </div>
                        )}

                        {activeTabs === 1 && (
                            <div className="tabContent">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="stand-up">
                                                <th>Stand Up</th>
                                                <td>
                                                    <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                </td>
                                            </tr>
                                            <tr className="folded-wo-wheels">
                                                <th>Folded (w/o wheels)</th>
                                                <td>
                                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                                </td>
                                            </tr>
                                            <tr className="folded-w-wheels">
                                                <th>Folded (w/ wheels)</th>
                                                <td>
                                                    <p>32.5″L x 24″W x 18.5″H</p>
                                                </td>
                                            </tr>
                                            <tr className="door-pass-through">
                                                <th>Door Pass Through</th>
                                                <td>
                                                    <p>24</p>
                                                </td>
                                            </tr>
                                            <tr className="frame">
                                                <th>Frame</th>
                                                <td>
                                                    <p>Aluminum</p>
                                                </td>
                                            </tr>
                                            <tr className="weight-wo-wheels">
                                                <th>Weight (w/o wheels)</th>
                                                <td>
                                                    <p>20 LBS</p>
                                                </td>
                                            </tr>
                                            <tr className="weight-capacity">
                                                <th>Weight Capacity</th>
                                                <td>
                                                    <p>60 LBS</p>
                                                </td>
                                            </tr>
                                            <tr className="width">
                                                <th>Width</th>
                                                <td>
                                                    <p>24″</p>
                                                </td>
                                            </tr>
                                            <tr className="handle-height-ground-to-handle">
                                                <th>Handle height (ground to handle)</th>
                                                <td>
                                                    <p>37-45″</p>
                                                </td>
                                            </tr>
                                            <tr className="wheels">
                                                <th>Wheels</th>
                                                <td>
                                                    <p>12″ air / wide track slick tread</p>
                                                </td>
                                            </tr>
                                            <tr className="seat-back-height">
                                                <th>Seat back height</th>
                                                <td>
                                                    <p>21.5″</p>
                                                </td>
                                            </tr>
                                            <tr className="head-room-inside-canopy">
                                                <th>Head room (inside canopy)</th>
                                                <td>
                                                    <p>25″</p>
                                                </td>
                                            </tr>
                                            <tr className="pa_color">
                                                <th>Color</th>
                                                <td>
                                                    <p>Black, Blue, Red, White</p>
                                                </td>
                                            </tr>
                                            <tr className="pa_size">
                                                <th>Size</th>
                                                <td>
                                                    <p>M, S</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTabs === 2 && (
                            <div className="tabContent">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h3>Customer Comment</h3>
                                        <br className='res-hide' />
                                        <div className="card p-3 reviewCart flex-row">
                                            <div className="image">
                                                <div className="rounded-circle">
                                                    <img src={author} alt="author" />
                                                </div>
                                                <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                                            </div>
                                            <div className="info pl-5">
                                                <div className="d-flex align-items-center w-100">
                                                    <h5 className="text-light">December 4, 2022 at 3:12 pm </h5>
                                                    <div className="ml-auto">
                                                        <Rating className="half-rating-read" name="read-only" value={5} size="small" precision={0.5} readOnly />
                                                    </div>
                                                </div>
                                                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
                                                    suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque
                                                    modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                                    <a href="#">Reply</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card p-3 reviewCart flex-row">
                                            <div className="image">
                                                <div className="rounded-circle">
                                                    <img src={author} alt="author" />
                                                </div>
                                                <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                                            </div>
                                            <div className="info pl-5">
                                                <div className="d-flex align-items-center w-100">
                                                    <h5 className="text-light">December 4, 2022 at 3:12 pm </h5>
                                                    <div className="ml-auto">
                                                        <Rating className="half-rating-read" name="read-only" value={4} size="small" precision={0.5} readOnly />
                                                    </div>
                                                </div>
                                                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
                                                    suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque
                                                    modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                                    <a href="#">Reply</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <h4>Customer reviews</h4>
                                        <div className="progressBarBox d-flex">
                                            <Rating className="half-rating-read" name="read-only" value={4.8} size="small" precision={0.5} readOnly />
                                            <h5>4.8 out of 5</h5>
                                        </div>
                                        <div className="progressBarBox d-flex align-items-center">
                                            <h6>5 star</h6>
                                            <div className="progress flex-grow-1">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: '85%' }}
                                                    aria-valuenow="85"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    85%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progressBarBox d-flex align-items-center">
                                            <h6>4 star</h6>
                                            <div className="progress flex-grow-1">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: '65%' }}
                                                    aria-valuenow="65"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    65%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progressBarBox d-flex align-items-center">
                                            <h6 >3 star</h6>
                                            <div className="progress flex-grow-1" >
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: '45%' }}
                                                    aria-valuenow="45"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    45%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progressBarBox d-flex align-items-center">
                                            <h6 >2 star</h6>
                                            <div className="progress flex-grow-1">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: '25%' }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    25%
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progressBarBox d-flex align-items-center">
                                            <h6>1 star</h6>
                                            <div className="progress flex-grow-1">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: '15%' }}
                                                    aria-valuenow="15"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    15%
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="font-xs text-muted">How are ratings calculated?</a>
                                    </div>
                                </div>
                                <form className="rewiewForm">
                                    <h4>Add a rewiew</h4>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Rating className="half-rating" name="read-only" value={0} size="small" precision={0.5} readOnly />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" placeholder="Write your rewiew here..." name="rewiew" id="rewiew"></textarea>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="name">Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter your name" name="UserName" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="name">Website</label>
                                                <input type="text" className="form-control" id="name" placeholder="Website" name="Username" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <Button className="btn-blue btn-lg btn-big btn-round">Submit Reviews</Button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
                <br />
                <RelatedProduct title="Related products" />
                <RelatedProduct title="Related Viewed products" />
            </div>
        </section>

    )
}
export default ProductDetails;