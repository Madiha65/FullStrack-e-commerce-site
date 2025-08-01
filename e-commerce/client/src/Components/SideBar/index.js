import  React, {useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel  from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from 'react-router-dom';


const SideBar = () => {

const [value, setValue] = useState([100, 6000]);
const [value2, setValue2] = useState(0)


    return (
        <>
            <div className="SideBar">
                <div className='sticky'>
                <div className="filterBox">
                    <h5>Product Categories</h5>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Fruits & Vegetables" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Grocery" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Fashion" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Breakfast & Dairy" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Electronics" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Beauty" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Household Needs" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Jewellery" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Biscuits & Snacks" />
                            </li>
                            
                        </ul>
                    </div>
                </div>
                 <div className="filterBox">
                    <h5>Filter by price</h5>
                    <RangeSlider value={value} onInput={setValue} min={100} max={6000} step={5}/>
                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>From: <strong className='text-dark'>Rs:{value[0]}</strong></span>
                        <span className='ml-auto'>From: <strong className='text-dark'>Rs:{value[1]}</strong></span>
                    </div>
                    </div>

                     <div className="filterBox">
                    <h5>Product Categories</h5>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="In Stock" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="On Site" />
                            </li>
                        </ul>
                    </div>
                </div>

                  <div className="filterBox">
                    <h5>Brands</h5>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Frito Lay" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Nespresso" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Oreo" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Quaker" />
                            </li>
                             <li>
                                <FormControlLabel className= 'w-100' control={<Checkbox />} label="Welch's" />
                            </li>
                     </ul>
                    </div>
                </div>

                <br/>
                <Link to='#'><img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif' className='w-100'/></Link>
            </div>
            </div>
        </>
    )
}

export default SideBar;

