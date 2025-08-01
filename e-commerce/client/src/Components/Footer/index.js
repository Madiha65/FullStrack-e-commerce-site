import { GiMilkCarton } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { CiDiscount1 } from "react-icons/ci";
import { GiPriceTag } from "react-icons/gi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.webp";
const Footer = () => {
   return (
      <footer>
         <div className="container">
            <div className="topInfo row">
               <div className="col d-flex align-items-center">
                  <span><GiMilkCarton /></span>
                  <span className="ml-1"> Everyday fresh products </span>
               </div>
               <div className="col d-flex align-items-center">
                  <span><GrDeliver /></span>
                  <span className="ml-1"> Free delivery for order over $70 </span>
               </div>
               <div className="col d-flex align-items-center">
                  <span><CiDiscount1 /></span>
                  <span className="ml-1"> Daily Mega Discounts </span>
               </div>
               <div className="col d-flex align-items-center">
                  <span><GiPriceTag /></span>
                  <span className="ml-1"> Best price on the market </span>
               </div>
            </div>
            <div className="row mt-5 linkWrap">
               <div className="col">
                  <h5>FRUIT & VEGETABLES</h5>
                  <ul>
                     <li>
                        <Link to="#">Fresh Vegetables</Link>
                     </li>
                     <li>
                        <Link to="#">Herbs & Seasonings</Link>
                     </li>
                     <li>
                        <Link to="#">Fresh Fruits</Link>
                     </li>
                     <li>
                        <Link to="#">Cuts & Sprouts</Link>
                     </li>
                     <li>
                        <Link to="#">Exotic Fruits & Veggies</Link>
                     </li>
                     <li>
                        <Link to="#">Party Trays</Link>
                     </li>
                  </ul>
               </div>
               <div className="col">
                  <h5>Breakfast & Dairy</h5>
                  <ul>
                     <li>
                        <Link to="#">Milk & Flavoured Milk</Link>
                     </li>
                     <li>
                        <Link to="#">Butter and Margarine</Link>
                     </li>
                     <li>
                        <Link to="#">Cheese</Link>
                     </li>
                     <li>
                        <Link to="#">Eggs Substitutes</Link>
                     </li>
                     <li>
                        <Link to="#">Honey</Link>
                     </li>
                     <li>
                        <Link to="#">Marmalades</Link>
                     </li>
                     <li>
                        <Link to="#">Sour Cream and Dips</Link>
                     </li>
                     <li>
                        <Link to="#">Yogurt</Link>
                     </li>
                  </ul>
               </div>
               <div className="col">
                  <h5>Meat & Seafood</h5>
                  <ul>
                     <li>
                        <Link to="#">Breakfast Sausage</Link>
                     </li>
                     <li>
                        <Link to="#">Dinner Sausage</Link>
                     </li>
                     <li>
                        <Link to="#">Beef</Link>
                     </li>
                     <li>
                        <Link to="#">Chicken</Link>
                     </li>
                     <li>
                        <Link to="#">Sliced Deli Meat</Link>
                     </li>
                     <li>
                        <Link to="#">Shrimp</Link>
                     </li>
                     <li>
                        <Link to="#">Wild Caught Fillets</Link>
                     </li>
                     <li>
                        <Link to="#">Crab and Shellfish</Link>
                     </li>
                     <li>
                        <Link to="#">Farm Raised Fillets</Link>
                     </li>


                  </ul>
               </div>
               <div className="col">
                  <h5>Beverages</h5>
                  <ul>
                     <li>
                        <Link to="#">Water</Link>
                     </li>
                     <li>
                        <Link to="#">Sparkling Water</Link>
                     </li>
                     <li>
                        <Link to="#">Soda & Pop</Link>
                     </li>
                     <li>
                        <Link to="#">Coffee</Link>
                     </li>
                     <li>
                        <Link to="#">Milk & Plant-Based Milk</Link>
                     </li>

                     <li>
                        <Link to="#">Tea & Kombucha</Link>
                     </li>
                     <li>
                        <Link to="#">Drink Boxes & Pouches</Link>
                     </li>
                     <li>
                        <Link to="#">Wine</Link>
                     </li>
                     <li>
                        <Link to="#">Craft Beer</Link>
                     </li>
                  </ul>
               </div>
               <div className="col">
                  <h5>Breads & Bakery</h5>
                  <ul>
                     <li>
                        <Link to="#">Milk & Flavoured Milk</Link>
                     </li>
                     <li>
                        <Link to="#">Butter and Margarine</Link>
                     </li>
                     <li>
                        <Link to="#">Cheese</Link>
                     </li>
                     <li>
                        <Link to="#">Honey</Link>
                     </li>
                     <li>
                        <Link to="#">Eggs Substitutes</Link>
                     </li>
                     <li>
                        <Link to="#">Marmalades</Link>
                     </li>
                     <li>
                        <Link to="#">Sour Cream and Dips</Link>
                     </li>
                     <li>
                        <Link to="#">Yogurt</Link>
                     </li>
                  </ul>
               </div>


            </div>

            <div className="footer-section contact mt-3 pt-3 pb- d-flex">
               <ul><li className="list-inline-item"><Link to="#"><FiPhoneCall /> </Link></li> </ul>
               <div className="col">
                <h5>8 800 555-55</h5>
                <div className="time">Working 8:00 - 22:00</div>
               </div>
               <div className="footer-section contact row">
                   <div className="col">
                     <h5>Download App on Mobile :</h5>
                  <div className="time">15% discount on your first purchase</div>
                   </div>
                  <div className="col mr-1 d-flex">
                     <span><img src={logo} alt="Google Play" /></span>
                     <span className="ml-1 mr-5"><img src={logo2} alt="App Store" /></span>
                  </div>
               </div>
               <ul className="list list-inline ml-auto mb-0">
                  <li className="ml-5 list-inline-item"><Link to="#"><CiFacebook /> </Link></li>
                  <li className="ml-1 list-inline-item"><Link to="#"><FaTwitter /></Link></li>
                  <li className="ml-1 list-inline-item"><Link to="#"><FaInstagramSquare /></Link></li>
                  <li className="ml-1 list-inline-item"><Link to="#"><IoLogoYoutube /></Link></li>
               </ul>
            </div>
         </div>
           <hr/>
         <div className="copyright mt-3 pt-3 pb-3 d-flex">
            <p className="mb-0 ml-5">
               Copyright 2025 © Bacola . All rights reserved. Powered by Snagle App.
            </p>
            <p className="ml-auto mr-5 mb-1">
               <li className="ml-1 list-inline-item"><Link to="#">Privacy Policy</Link></li>
               <li className="ml-1 list-inline-item"><Link to="#">Terms and Conditions</Link></li>
               <li className="ml-1 list-inline-item"><Link to="#">Cookie</Link></li>
            </p>

         </div>
      </footer>


   )
}
export default Footer