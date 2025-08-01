import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import Button from "@mui/material/Button";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-item-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-item-center part2">
                {context.countryList.length !== 0 && <CountryDropdown />}
                <SearchBox />
                <div className=" part3 d-flex align-item-center ml-auto">
                  {
                    context.isLogin !== true ?<Link to="/signIn"><Button className="btn-blue btn-round mr-3">Sign In</Button> </Link> :
                      <Button className="circle mr-2"><FaRegCircleUser /></Button>
                  }

                  <div className="ml-auto cartTab d-flex align-item-center">
                    <span className="price">$3.25</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <GiShoppingCart />
                      </Button>
                      <span className="count d-flex align-item-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>
    </>
  );
};

export default Header;
