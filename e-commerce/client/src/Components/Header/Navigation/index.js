import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
const Navigation = () => {
  const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false)

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button className="allCatTab d-flex align-item-center" onClick={() => setisOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''} `} >
                <ul>
                  <li> <Link to="/"><Button>Fruits & Vegetables<FaAngleRight className="ml-auto" /></Button></Link>
                    <div className="submenu">
                      <Link to="/"><Button>Apple </Button></Link>
                      <Link to="/"><Button>Banana </Button></Link>
                      <Link to="/"><Button>Mango </Button></Link>
                      <Link to="/"><Button>Orange </Button></Link>
                      <Link to="/"><Button>Pineapple </Button></Link>
                      <Link to="/"><Button>Cabbage </Button></Link>
                      <Link to="/"><Button>Spinach </Button></Link>
                      <Link to="/"><Button>Broccoli </Button></Link>
                      <Link to="/"><Button>Onion </Button></Link>
                      <Link to="/"><Button>Cauliflower </Button></Link>
                      <Link to="/"><Button>Peas </Button></Link> </div>
                  </li>
                  <li> <Link to="/"><Button> Grocery</Button></Link></li>
                  <li> <Link to="/"><Button> Breakfast & Dairy <FaAngleRight className="ml-auto" /></Button></Link>
                    <div className="submenu">
                      <Link to="/"><Button>Bread </Button></Link>
                      <Link to="/"><Button>Pancakes </Button></Link>
                      <Link to="/"><Button>Oatmeal </Button></Link>
                      <Link to="/"><Button>Cereal </Button></Link>
                      <Link to="/"><Button>Eggs </Button></Link>
                      <Link to="/"><Button>Paratha </Button></Link>
                      <Link to="/"><Button>Idli </Button></Link>
                      <Link to="/"><Button>Poha </Button></Link>
                      <Link to="/"><Button>Upma </Button></Link>
                    </div>
                  </li>
                   <li> <Link to="/"><Button> Fashion <FaAngleRight className="ml-auto" /></Button></Link>
                    <div className="submenu">
                      <Link to="/"><Button>Men </Button></Link>
                      <Link to="/"><Button>women </Button></Link>
                      <Link to="/"><Button>girl </Button></Link>
                      <Link to="/"><Button>boy </Button></Link>
                      <Link to="/"><Button>baby girl </Button></Link>
                      <Link to="/"><Button>baby boy </Button></Link>
                    </div>
                  </li>
                  <li> <Link to="/"><Button>Electronics</Button></Link></li>
                  <li> <Link to="/"><Button>Beauty</Button></Link></li>
                  <li> <Link to="/"><Button>Jewellery</Button></Link></li>
                  <li> <Link to="/"><Button>Value of the Day</Button></Link></li>
                  <li> <Link to="/"><Button>Top 100 Offers</Button></Link></li>
                  <li> <Link to="/"><Button>New Arrivals</Button></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-item-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/"><Button>Home</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Fruits & Vegetables</Button></Link>
                <div className='submenu shadow'>
                  <Link to="/"><Button>Apple </Button></Link>
                      <Link to="/"><Button>Banana </Button></Link>
                      <Link to="/"><Button>Mango </Button></Link>
                      <Link to="/"><Button>Orange </Button></Link>
                      <Link to="/"><Button>Pineapple </Button></Link>
                      <Link to="/"><Button>Grapes </Button></Link>
                      <Link to="/"><Button>Watermelon </Button></Link>
                      <Link to="/"><Button>Papaya </Button></Link>
                      <Link to="/"><Button>Strawberry </Button></Link>
                      <Link to="/"><Button>Guava </Button></Link>
                     
                </div>
              </li>
             <li className="list-inline-item">
                <Link to="/"><Button>Grocery</Button></Link>
                <div className='submenu shadow'>
                       <Link to="/"><Button>Rice </Button></Link>
                      <Link to="/"><Button>Milk </Button></Link>
                      <Link to="/"><Button>spices </Button></Link>
                      <Link to="/"><Button>Eggs </Button></Link>
                      <Link to="/"><Button>Sugar </Button></Link>
                      <Link to="/"><Button>Pulses </Button></Link>
                      <Link to="/"><Button>Sugar </Button></Link>
                      <Link to="/"><Button>Tea </Button></Link>
                      <Link to="/"><Button>Flour (Atta) </Button></Link>
                      <Link to="/"><Button>Cooking Oil </Button></Link>
                     
                </div>
              </li>
                <li className="list-inline-item">
                <Link to="/"><Button>Biscuits & Snacks</Button></Link>
                <div className='submenu shadow'>
                      <Link to="/"><Button>Biscuits </Button></Link>
                      <Link to="/"><Button>Milk Bikis</Button></Link>
                      <Link to="/"><Button>Little Debbie Cookies </Button></Link>
                      <Link to="/"><Button>Oreo </Button></Link>
                      <Link to="/"><Button>Snacks</Button></Link>
                      <Link to="/"><Button>Lays Chips </Button></Link>
                      <Link to="/"><Button>Kurkure </Button></Link>
                      <Link to="/"><Button>Haldiram's Bhujia </Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
              <Link to="/"><Button> Fashion <FaAngleRight className="ml-auto" /></Button></Link>
                    <div className="submenu">
                      <Link to="/"><Button>Men </Button></Link>
                      <Link to="/"><Button>women </Button></Link>
                      <Link to="/"><Button>girl </Button></Link>
                      <Link to="/"><Button>boy </Button></Link>
                      <Link to="/"><Button>baby girl </Button></Link>
                      <Link to="/"><Button>baby boy </Button></Link>
                    </div>
                  </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Electronics</Button></Link>
                <div className='submenu shadow'>
                     <Link to="/"><Button>Mobile Phone </Button></Link>
                      <Link to="/"><Button>Laptop </Button></Link>
                      <Link to="/"><Button>Tablet </Button></Link>
                      <Link to="/"><Button>Smartwatch </Button></Link>
                      <Link to="/"><Button>Earbuds </Button></Link>
                      <Link to="/"><Button>Refrigerator </Button></Link>
                      <Link to="/"><Button>Washing Machine </Button></Link>                      
                      <Link to="/"><Button>Microwave Oven </Button></Link>
                      <Link to="/"><Button>Air Conditioner </Button></Link>
                      <Link to="/"><Button>Bluetooth Speaker </Button></Link>
                      <Link to="/"><Button>Power Bank </Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Contact</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
