"use client";
import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { TfiAngleDown } from "react-icons/tfi";
import { IoPricetagOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import Rating from "@mui/material/Rating";

const Size = ["S", "M", "L", "XL", "XXL"];
const Color = ["#6aa39c", "#6bdcff", "#5d30dd", "#d72222", "#c886a9"];

const DeliveryOptions = () => {
  const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);

  const deliveryInfo = [
    "100% Original Products",
    "Pay on delivery might be available",
    "Easy 14 days returns and exchanges",
    "Try & Buy might be available for some products",
  ];

  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="Box">
        <div className="flex items-center justify-between cursor-pointer py-3">
          <h4 className="text-[18px] text-gray-800 dark:text-gray-300 font-[500]">
            Delivery Options
          </h4>
          <span
            className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark"
            onClick={() => setIsToggleSubMenu(!isToggleSubMenu)}
          >
            <TfiAngleDown
              size={18}
              className={`${
                isToggleSubMenu ? "rotate-180" : ""
              } dark:text-gray-300`}
            />
          </span>
        </div>

        <div className="my-3 w-full h-[1px] bg-gray-300 dark:bg-gray-700"></div>

        {isToggleSubMenu && (
          <div
            className="ReactCollapse--collapse"
            style={{ height: "auto", overflow: "initial" }}
            aria-hidden="false"
          >
            <div className="ReactCollapse--content">
              <div className="content pr-4">
                <form className="searchBox relative w-full">
                  <input
                    type="text"
                    placeholder="Enter Pin Code"
                    className="w-full h-[40px] outline-none border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.1)] rounded-md px-3 text-[14px] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] hover:border-[rgba(0,0,0,0.4)] dark:hover:border-[rgba(255,255,255,0.4)] dark:bg-themeDark bg-white"
                  />
                  <button
                    type="button"
                    className="border-0 bg-transparent text-[14px] font-[500] absolute top-2 right-4 z-[50] cursor-pointer"
                  >
                    Check
                  </button>
                </form>

                <p className="text-[13px] text-gray-600 dark:text-gray-400 my-2">
                  Please enter PIN code to check delivery time & Pay on Delivery
                  Availability
                </p>

                {deliveryInfo.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-[15px] text-gray-600 dark:text-gray-400 mt-2"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);

  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="Box">
        <div className="flex items-center justify-between cursor-pointer py-3">
          <h4 className="text-[18px] text-gray-800 dark:text-gray-300 font-[500]">
            Delivery Options
          </h4>
          <span
            className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark"
            onClick={() => setIsToggleSubMenu(!isToggleSubMenu)}
          >
            <TfiAngleDown
              size={18}
              className={`${
                isToggleSubMenu ? "rotate-180" : ""
              } dark:text-gray-300`}
            />
          </span>
        </div>

        <div className="my-3 w-full h-[1px] bg-gray-300 dark:bg-gray-700"></div>

        {isToggleSubMenu && (
          <div
            className="ReactCollapse--collapse"
            style={{ height: "auto", overflow: "initial" }}
            aria-hidden="false"
          >
            <div className="ReactCollapse--content">
              <div className="content pr-4">
                <p className="text-[16px] text-gray-600 dark:text-gray-400 my-2 pt-3">
                  Monochrome elegance. Made with a relaxed wide-leg, these
                  trousers are made from a sustainable soft organic cotton with
                  a mechanical stretch making the garment easily recycled.
                </p>
                <p className="text-[16px] text-gray-600 dark:text-gray-400 my-2 pt-3">
                  Wide-leg, these trousers are made from a sustainable soft
                  organic cotton with a mechanical stretch making the garment
                  easily recycled.
                </p>
                <h2 className="pt-3 font-bold text-[18px]">Material & Care</h2>
                <p className="text-[16px] text-gray-600 dark:text-gray-400 my-2 pt-1">
                  Monochrome elegance. Made with a relaxed wide-leg
                </p>
                <div className="flex items-center my-3 gap-2">
                  <span>
                    <IoPricetagOutline size={22} />
                  </span>
                  <span className="flex items-center gap-0 text-[15px] font-[500]">
                    {" "}
                    Tags:
                  </span>
                  <div className="flex items-center gap-1">
                    <span
                      className="flex items-center justify-center py-1 px-2 bg-white dark:bg-[#1f2937] rounded-sm text-[14px] border
                                           border-[rgba(0,0,0,0.1)]"
                    >
                      Shoe
                    </span>
                    <span
                      className="flex items-center justify-center py-1 px-2 bg-white dark:bg-[#1f2937]
                                             rounded-sm text-[14px] border border-[rgba(0,0,0,0.1)]"
                    >
                      Fashion
                    </span>
                    <span
                      className="flex items-center justify-center py-1 
                                         px-2 bg-white dark:bg-[#1f2937] rounded-sm text-[14px] border border-[rgba(0,0,0,0.1)]"
                    >
                      Men
                    </span>
                    <span
                      className="flex items-center justify-center py-1 px-2 bg-white dark:bg-[#1f2937] rounded-sm text-[14px] border
                                         border-[rgba(0,0,0,0.1)]"
                    >
                      Nike
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const RatingsReviews = () => {
  const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="Box">
        <div className="flex items-center justify-between cursor-pointer py-3">
          <h4 className="text-[18px] text-gray-800 dark:text-gray-300 font-[500]">
            Ratings & Reviews
          </h4>
          <span
            className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark"
            onClick={() => setIsToggleSubMenu(!isToggleSubMenu)}
          >
            <TfiAngleDown
              size={18}
              className={`${
                isToggleSubMenu ? "rotate-180" : ""
              } dark:text-gray-300`}
            />
          </span>
        </div>

        <div className="my-3 w-full h-[1px] bg-gray-300 dark:bg-gray-700"></div>

        {isToggleSubMenu && (
          <div
            className="ReactCollapse--collapse"
            style={{ height: "auto", overflow: "initial" }}
            aria-hidden="false"
          >
            <div className="ReactCollapse--content">
              <div className="content pr-4">
                <h3 className="text-[40px] text-gray-800 font-bold dark:text-gray-300">
                  4.1
                </h3>
                <p className="text-[15px] text-gray-700 dark:text-gray-300">
                  12 Verified Buyers{" "}
                </p>
                <div className="flex flex-col gap-2 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-[500] dark:text-gray-300">5</span>
                    <span>
                      <IoStar size={20} className="text-yellow-400" />
                    </span>
                    <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                      <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-700 rounded-full w-[20%] h-full"></span>
                    </div>
                    <div className="font-[500] dark:text-gray-300">3</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-[500] dark:text-gray-300">5</span>
                    <span>
                      <IoStar size={20} className="text-yellow-400" />
                    </span>
                    <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                      <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-700 rounded-full w-[20%] h-full"></span>
                    </div>
                    <div className="font-[500] dark:text-gray-300">3</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-[500] dark:text-gray-300">4</span>
                    <span>
                      <IoStar size={20} className="text-yellow-400" />
                    </span>
                    <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                      <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-700 rounded-full w-[40%] h-full"></span>
                    </div>
                    <div className="font-[500] dark:text-gray-300">6</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-[500] dark:text-gray-300">3</span>
                    <span>
                      <IoStar size={20} className="text-yellow-400" />
                    </span>
                    <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                      <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-700 rounded-full w-[60%] h-full"></span>
                    </div>
                    <div className="font-[500] dark:text-gray-300">12</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-[500] dark:text-gray-300">2</span>
                    <span>
                      <IoStar size={20} className="text-yellow-400" />
                    </span>
                    <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                      <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-700 rounded-full w-[30%] h-full"></span>
                    </div>
                    <div className="font-[500] dark:text-gray-300">3</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-[500] dark:text-gray-300">1</span>
                    <span>
                      <IoStar size={20} className="text-yellow-400" />
                    </span>
                    <div className="progress w-[80%] h-[4px] rounded-full overflow-hidden relative bg-white dark:bg-gray-400">
                      <span className="absolute top-0 left-0 bg-themeDark dark:bg-gray-700 rounded-full w-[20%] h-full"></span>
                    </div>
                    <div className="font-[500] dark:text-gray-300">3</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3 p-4 border-b-2 border-[rgb(0,0,0,0.2)] bg-white dark:bg-[#1f2937] shadow-md rounded-md">
                  <h3 className="text-[16px] font-[500] dark:text-gray-300">
                    Ronald Richards
                  </h3>
                  <span className="text-[14px] text-gray-800 dark:text-gray-400">
                    13 Jun, 2025
                  </span>
                  <span>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </span>
                  <p className="text-[15px] text-gray-800  dark:text-gray-400">
                    I recently purchased the Nike MaxComfort sneakers, and I
                    must say, I am thoroughly impressed! These shoes are the
                    perfect blend of style and comfort.
                  </p>
                  <div className="flex items-center gap-1 my-3">
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqDW5kX5v9Jq71Yiaiakh3qkRDUR0jrm0zSYVh2OtPpd67TS
                            yyZ9rME3sBoUNqes1npu-Naz1dxsVJsBVavDXdZbdYpOoORe3EsxHL06p"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFlWLfV2aZv_DL9GUhudkLOQEAyKlrh
                                             4de28MANc4SXiSe42KnH6O29ht4HIrx50j9NPHZx427qIOZBEXXVYgVJflZDueKDZ09yx8ktZ8"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjGEH6a7i3DhWHbDgRGMmAf-V19lLDC94wZH8ykCv8pKKZJ
                            KmBe--rAc6imYFF0HgMQ8Gv9aBEhoonHawJgnSMjS96y47Epk18lGu8vS0"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaE-Kn7XtEkK5WA50gQUCZQ3XbOS2l0r5_gyKpgwkmw7f6z
                            FlhRGitVnVG-p28K6AxNw60mGrx_y3gCCxOxqBkW7f-14-c0a4QvhiNxIDu"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3 p-4 border-b-2 border-[rgb(0,0,0,0.2)] bg-white dark:bg-[#1f2937] shadow-md rounded-md">
                  <h3 className="text-[16px] font-[500] dark:text-gray-300">
                    Ronald Richards
                  </h3>
                  <span className="text-[14px] text-gray-800 dark:text-gray-400">
                    13 Jun, 2025
                  </span>
                  <span>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </span>
                  <p className="text-[15px] text-gray-800  dark:text-gray-400">
                    I recently purchased the Nike MaxComfort sneakers, and I
                    must say, I am thoroughly impressed! These shoes are the
                    perfect blend of style and comfort.
                  </p>
                  <div className="flex items-center gap-1 my-3">
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqDW5kX5v9Jq71Yiaiakh3qkRDUR0jrm0zSYVh2OtPpd67TS
                            yyZ9rME3sBoUNqes1npu-Naz1dxsVJsBVavDXdZbdYpOoORe3EsxHL06p"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFlWLfV2aZv_DL9GUhudkLOQEAyKlrh
                                             4de28MANc4SXiSe42KnH6O29ht4HIrx50j9NPHZx427qIOZBEXXVYgVJflZDueKDZ09yx8ktZ8"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjGEH6a7i3DhWHbDgRGMmAf-V19lLDC94wZH8ykCv8pKKZJ
                            KmBe--rAc6imYFF0HgMQ8Gv9aBEhoonHawJgnSMjS96y47Epk18lGu8vS0"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaE-Kn7XtEkK5WA50gQUCZQ3XbOS2l0r5_gyKpgwkmw7f6z
                            FlhRGitVnVG-p28K6AxNw60mGrx_y3gCCxOxqBkW7f-14-c0a4QvhiNxIDu"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3 p-4 border-b-2 border-[rgb(0,0,0,0.2)] bg-white dark:bg-[#1f2937] shadow-md rounded-md">
                  <h3 className="text-[16px] font-[500] dark:text-gray-300">
                    Ronald Richards
                  </h3>
                  <span className="text-[14px] text-gray-800 dark:text-gray-400">
                    13 Jun, 2025
                  </span>
                  <span>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </span>
                  <p className="text-[15px] text-gray-800  dark:text-gray-400">
                    I recently purchased the Nike MaxComfort sneakers, and I
                    must say, I am thoroughly impressed! These shoes are the
                    perfect blend of style and comfort.
                  </p>
                  <div className="flex items-center gap-1 my-3">
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqDW5kX5v9Jq71Yiaiakh3qkRDUR0jrm0zSYVh2OtPpd67TS
                            yyZ9rME3sBoUNqes1npu-Naz1dxsVJsBVavDXdZbdYpOoORe3EsxHL06p"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFlWLfV2aZv_DL9GUhudkLOQEAyKlrh
                                             4de28MANc4SXiSe42KnH6O29ht4HIrx50j9NPHZx427qIOZBEXXVYgVJflZDueKDZ09yx8ktZ8"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjGEH6a7i3DhWHbDgRGMmAf-V19lLDC94wZH8ykCv8pKKZJ
                            KmBe--rAc6imYFF0HgMQ8Gv9aBEhoonHawJgnSMjS96y47Epk18lGu8vS0"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaE-Kn7XtEkK5WA50gQUCZQ3XbOS2l0r5_gyKpgwkmw7f6z
                            FlhRGitVnVG-p28K6AxNw60mGrx_y3gCCxOxqBkW7f-14-c0a4QvhiNxIDu"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3 p-4 border-b-2 border-[rgb(0,0,0,0.2)] bg-white dark:bg-[#1f2937] shadow-md rounded-md">
                  <h3 className="text-[16px] font-[500] dark:text-gray-300">
                    Ronald Richards
                  </h3>
                  <span className="text-[14px] text-gray-800 dark:text-gray-400">
                    13 Jun, 2025
                  </span>
                  <span>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </span>
                  <p className="text-[15px] text-gray-800  dark:text-gray-400">
                    I recently purchased the Nike MaxComfort sneakers, and I
                    must say, I am thoroughly impressed! These shoes are the
                    perfect blend of style and comfort.
                  </p>
                  <div className="flex items-center gap-1 my-3">
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqDW5kX5v9Jq71Yiaiakh3qkRDUR0jrm0zSYVh2OtPpd67TS
                            yyZ9rME3sBoUNqes1npu-Naz1dxsVJsBVavDXdZbdYpOoORe3EsxHL06p"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFlWLfV2aZv_DL9GUhudkLOQEAyKlrh
                                             4de28MANc4SXiSe42KnH6O29ht4HIrx50j9NPHZx427qIOZBEXXVYgVJflZDueKDZ09yx8ktZ8"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjGEH6a7i3DhWHbDgRGMmAf-V19lLDC94wZH8ykCv8pKKZJ
                            KmBe--rAc6imYFF0HgMQ8Gv9aBEhoonHawJgnSMjS96y47Epk18lGu8vS0"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaE-Kn7XtEkK5WA50gQUCZQ3XbOS2l0r5_gyKpgwkmw7f6z
                            FlhRGitVnVG-p28K6AxNw60mGrx_y3gCCxOxqBkW7f-14-c0a4QvhiNxIDu"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3 p-4 border-b-2 border-[rgb(0,0,0,0.2)] bg-white dark:bg-[#1f2937] shadow-md rounded-md">
                  <h3 className="text-[16px] font-[500] dark:text-gray-300">
                    Ronald Richards
                  </h3>
                  <span className="text-[14px] text-gray-800 dark:text-gray-400">
                    13 Jun, 2025
                  </span>
                  <span>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </span>
                  <p className="text-[15px] text-gray-800  dark:text-gray-400">
                    I recently purchased the Nike MaxComfort sneakers, and I
                    must say, I am thoroughly impressed! These shoes are the
                    perfect blend of style and comfort.
                  </p>
                  <div className="flex items-center gap-1 my-3">
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqDW5kX5v9Jq71Yiaiakh3qkRDUR0jrm0zSYVh2OtPpd67TS
                            yyZ9rME3sBoUNqes1npu-Naz1dxsVJsBVavDXdZbdYpOoORe3EsxHL06p"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFlWLfV2aZv_DL9GUhudkLOQEAyKlrh
                                             4de28MANc4SXiSe42KnH6O29ht4HIrx50j9NPHZx427qIOZBEXXVYgVJflZDueKDZ09yx8ktZ8"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjGEH6a7i3DhWHbDgRGMmAf-V19lLDC94wZH8ykCv8pKKZJ
                            KmBe--rAc6imYFF0HgMQ8Gv9aBEhoonHawJgnSMjS96y47Epk18lGu8vS0"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaE-Kn7XtEkK5WA50gQUCZQ3XbOS2l0r5_gyKpgwkmw7f6z
                            FlhRGitVnVG-p28K6AxNw60mGrx_y3gCCxOxqBkW7f-14-c0a4QvhiNxIDu"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3 p-4 border-b-2 border-[rgb(0,0,0,0.2)] bg-white dark:bg-[#1f2937] shadow-md rounded-md">
                  <h3 className="text-[16px] font-[500] dark:text-gray-300">
                    Ronald Richards
                  </h3>
                  <span className="text-[14px] text-gray-800 dark:text-gray-400">
                    13 Jun, 2025
                  </span>
                  <span>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </span>
                  <p className="text-[15px] text-gray-800  dark:text-gray-400">
                    I recently purchased the Nike MaxComfort sneakers, and I
                    must say, I am thoroughly impressed! These shoes are the
                    perfect blend of style and comfort.
                  </p>
                  <div className="flex items-center gap-1 my-3">
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqDW5kX5v9Jq71Yiaiakh3qkRDUR0jrm0zSYVh2OtPpd67TS
                            yyZ9rME3sBoUNqes1npu-Naz1dxsVJsBVavDXdZbdYpOoORe3EsxHL06p"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFlWLfV2aZv_DL9GUhudkLOQEAyKlrh
                                             4de28MANc4SXiSe42KnH6O29ht4HIrx50j9NPHZx427qIOZBEXXVYgVJflZDueKDZ09yx8ktZ8"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjGEH6a7i3DhWHbDgRGMmAf-V19lLDC94wZH8ykCv8pKKZJ
                            KmBe--rAc6imYFF0HgMQ8Gv9aBEhoonHawJgnSMjS96y47Epk18lGu8vS0"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="img overflow-hidden rounded-md group">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaE-Kn7XtEkK5WA50gQUCZQ3XbOS2l0r5_gyKpgwkmw7f6z
                            FlhRGitVnVG-p28K6AxNw60mGrx_y3gCCxOxqBkW7f-14-c0a4QvhiNxIDu"
                        width={50}
                        height={80}
                        alt="image"
                        className="group-hover:scale-105 transition-all"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const View = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSimilarColor, setSelectedSimilarColor] = useState("");

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <span className="text-gray-900 dark:text-gray-200">E-Commerce</span>
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/products">
      <span className="text-gray-900 dark:text-gray-200">Shop</span>
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      <span className="text-gray-900 dark:text-gray-200">FC6723757651DB74</span>
    </Typography>,
  ];

  return (
    <div className="px-4 py-5 bg-gray-100 dark:bg-[#111113]">
      <div className="flex flex-col gap-1">
        <h1 className="text-[30px] font-bold">Shop</h1>
        <div role="presentation">
          <Stack spacing={2}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 py-4">
        <div className="left-sec">
          <div className="grid grid-cols-2 gap-3 sticky  top-[100px]">
            <div className="img overflow-hidden rounded-md group">
              <img
                srcSet="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096955_hbhb1.jpg&w=384&q=75 1x,
                             /_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096955_hbhb1.jpg&w=640&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096955_hbhb1.jpg&w=640&q=75"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="img overflow-hidden rounded-md group">
              <img
                srcSet="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096960_hbhb3.jpg&w=384&q=75 1x, 
                            /_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096960_hbhb3.jpg&w=640&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096960_hbhb3.jpg&w=640&q=75"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="img overflow-hidden rounded-md group">
              <img
                srcSet="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096956_hbhb2.jpg&w=384&q=75 1x, 
                            /_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096956_hbhb2.jpg&w=640&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096956_hbhb2.jpg&w=640&q=75"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="img overflow-hidden rounded-md group">
              <img
                srcSet="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096961_hbhb4.jpg&w=384&q=75 1x,
                             /_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096961_hbhb4.jpg&w=640&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fserviceapi.spicezgold.com%2Fdownload%2F1742463096961_hbhb4.jpg&w=640&q=75"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
        <div className="right-sec">
          <h2 className="text-[25px] font-bold text-gray-800 dark:text-gray-300">
            Men Opaque Casual Shirt
          </h2>
          <h3 className="text-[18px] text-gray-500 dark:text-gray-400">
            Casio Classic Watch
          </h3>
          <div className="my-4 w-full h-[1px] bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <span className="text-[22px] text-gray-800 font-bold dark:text-gray-300">
              $295.00
            </span>
            <span className="text-[16px] text-gray-800 font-[500] line-through dark:text-gray-300">
              $320.00
            </span>
            <span className="text-[14px] text-red-600 font-[500]">
              (7.81% OFF)
            </span>
          </div>
          <span className="text-[16px] text-green-600 font-[500]">
            Inclusive of all taxes
          </span>
          <div className="py-5 flex flex-col gap-3">
            <span className="text-[15px] font-[500] text-gray-700 dark:text-gray-300">
              Select Size
            </span>
            <div className="flex items-center gap-3">
              {Size.map((size) => (
                <span
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex items-center justify-center border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.3)]  
        w-[35px] h-[35px] rounded-md cursor-pointer font-[500] text-gray-600 dark:text-gray-400 ${
          selectedSize === size ? "border-black dark:border-white" : ""
        }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <br />
          <div className="py-0 flex flex-col gap-3">
            <span className="text-[15px] font-[500] text-gray-700 dark:text-gray-300">
              Select Color
            </span>
            <div className="flex items-center gap-3">
              {Color.map((color) => (
                <span
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center justify-center 
                                        w-[25px] h-[25px] rounded-full cursor-pointer
                                        border border-gray-300 dark:border-gray-600
                                        ${
                                          selectedColor === color
                                            ? "ring-2 ring-black dark:ring-white"
                                            : ""
                                        }
                                      `}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
          <br />
          <div className="flex flex-col gap-3 my-2">
            <Button
              className="!w-full !px-3 !py-3 !capitalize gap-3 !bg-dark dark:!bg-white dark:!text-dark !text-white !text-[16px]
                         !font-bold"
            >
              <FiShoppingCart size={25} />
              Add to Cart
            </Button>
            <Button className="!w-full !px-3 !py-3 !capitalize gap-3 !bg-white !text-dark dark:!bg-[rgb(31,41,55)] dark:!text-gray-200  !text-[18px] !font-bold !border !border-red-400">
              <GoHeart size={25} />
              Wishlist
            </Button>
          </div>
          <DeliveryOptions />
          <ProductDetails />
          <RatingsReviews />
          <form className="flex flex-col gap-3">
            <span>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </span>
            <textarea
              type="text"
              placeholder="Review..."
              className="w-full h-[125px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] 
                            hover:border-[rgba(0,0,0,0.6)] rounded-md px-3 py-3 bg-gray-100 dark:bg-gray-800"
            />

            <div className="flex">
              <Button
                className="!bg-dark !text-white dark:!bg-white dark:!text-dark btn-lg !py-2 !px-4 !capitalize items-center gap-2 !text-[16px]
                         !font-bold"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="similarProducts w-full flex flex-col gap-3 mt-4">
        <h3 className="text-[22px] font-[500] text-gray-700 dark:text-gray-300">
          Similar Products
        </h3>
        <div className="grid grid-cols-4 gap-7">
          <div className="productItem bg-white dark:bg-[#1f2937] shadow-md overflow-hidden rounded-md">
            <div className="img overflow-hidden rounded-md group h-[300px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqDW5kX5v9Jq71Yiaiakh3qkRDUR0jrm0zSYVh2OtPpd67TS
                            yyZ9rME3sBoUNqes1npu-Naz1dxsVJsBVavDXdZbdYpOoORe3EsxHL06p"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="info p-3 flex flex-col gap-2">
              <h4 className="text-[14px] font-[500] text-gray-900 dark:text-gray-300">
                Men Comfort Cuban Collar Solid...
              </h4>
              <h4 className="text-[14px] font-[400] text-gray-900 dark:text-gray-400">
                Casio Classic Watch
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-[15px] text-gray-800 font-bold dark:text-gray-300">
                  $295.00
                </span>
                <span className="text-[15px] text-gray-800 font-[500] line-through dark:text-gray-300">
                  $320.00
                </span>
              </div>
              <div className="py-0 flex flex-col gap-3">
                <span className="text-[15px] font-[500] text-gray-700 dark:text-gray-300">
                  Select Color
                </span>
                <div className="flex items-center gap-3">
                  {Color.map((color) => (
                    <span
                      key={color}
                      onClick={() => setSelectedSimilarColor(color)}
                      className={`flex items-center justify-center 
                                        w-[25px] h-[25px] rounded-full cursor-pointer
                                        border border-gray-300 dark:border-gray-600
                                        ${
                                          selectedSimilarColor === color
                                            ? "ring-2 ring-black dark:ring-white"
                                            : ""
                                        }
                                      `}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="productItem bg-white dark:bg-[#1f2937] shadow-md overflow-hidden rounded-md">
            <div className="img overflow-hidden rounded-md group h-[300px]">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQg4baFJ9wWUkNTucBwxTCjDnC1ffEvFCkdipTPSP-IiVfe
                            jGrL6LK13pqPwIm5UYM12ZhOsUzLlN1SIREaxtqT9npgC_JmDMJC5WsEmKo3"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="info p-3 flex flex-col gap-2">
              <h4 className="text-[14px] font-[500] text-gray-900 dark:text-gray-300">
                Men Comfort Cuban Collar Solid...
              </h4>
              <h4 className="text-[14px] font-[400] text-gray-900 dark:text-gray-400">
                Casio Classic Watch
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-[15px] text-gray-800 font-bold dark:text-gray-300">
                  $295.00
                </span>
                <span className="text-[15px] text-gray-800 font-[500] line-through dark:text-gray-300">
                  $320.00
                </span>
              </div>
            </div>
          </div>
          <div className="productItem bg-white dark:bg-[#1f2937] shadow-md overflow-hidden rounded-md">
            <div className="img overflow-hidden rounded-md group h-[300px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSldjEhUICcFtL8ngg7GarqEI8hLzC7BckGXDGLtGY24nXhr
                            cmY0RIulWbo555Vy4F0-gAeQ_GKA9aAud4377nh-0zUuMZBdtu6M5mpzho"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="info p-3 flex flex-col gap-2">
              <h4 className="text-[14px] font-[500] text-gray-900 dark:text-gray-300">
                Men Comfort Cuban Collar Solid...
              </h4>
              <h4 className="text-[14px] font-[400] text-gray-900 dark:text-gray-400">
                Casio Classic Watch
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-[15px] text-gray-800 font-bold dark:text-gray-300">
                  $295.00
                </span>
                <span className="text-[15px] text-gray-800 font-[500] line-through dark:text-gray-300">
                  $320.00
                </span>
              </div>
            </div>
          </div>
          <div className="productItem bg-white dark:bg-[#1f2937] shadow-md overflow-hidden rounded-md">
            <div className="img overflow-hidden rounded-md group h-[300px]">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSd50TVH7Fg1_1enAfPxMgySBGBBNQ3Uvygh6iiOcma1ge3wS
                            JSSSqVT7E-HjJ3IWBEU-0n1OoDQo-gblbDVe-ZKEBsgu30VBrnOw5XNwxaVyoSL8Ry3er_"
                width={273}
                height={318}
                alt="image"
                className="group-hover:scale-105 transition-all"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="info p-3 flex flex-col gap-2">
              <h4 className="text-[14px] font-[500] text-gray-900 dark:text-gray-300">
                Men Comfort Cuban Collar Solid...
              </h4>
              <h4 className="text-[14px] font-[400] text-gray-900 dark:text-gray-400">
                Casio Classic Watch
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-[15px] text-gray-800 font-bold dark:text-gray-300">
                  $295.00
                </span>
                <span className="text-[15px] text-gray-800 font-[500] line-through dark:text-gray-300">
                  $320.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default View;
