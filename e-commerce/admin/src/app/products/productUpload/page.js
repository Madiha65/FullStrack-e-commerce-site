"use client";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IoMdCloudUpload } from "react-icons/io";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

const productUpload = () => {
  const [html, setHtml] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  function onChange(e) {
    setHtml(e.target.value);
  }
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="right-content p-[10px] w-100% h-full overflow-y-auto">
      <form className="form">
        <h1 className="font-bold text-[28px] font-[600] dark:text-gray-200 pb-5">
          Product Upload
        </h1>
        <div className="d-flex flex-wrap !ml-[-15px] !mr-[-15px] justify-between">
          <div className="col-md-12 flex flex-col w-[100%]">
            <div className="card p-4 mt-0 my-0 bg-white dark:bg-themeDark dark:border-[rgba(255,255,255,0.1)] border border-[rgba(0,0,0,0.1)] border-radius-[10px] m-[10px]">
              <h5 className="!text-[20px] pt-5  !mb-[15px] !color-[rgba(0, 0, 0, 1)] dark:text-gray-200 font-[600] ">
                Basic Information
              </h5>
              <div className="form-group !mb-[15px] px-4">
                <h6 className="!text-[15px] !mb-[16px] !color-[rgba(0, 0, 0, 1)] dark:text-gray-200 font-[600]">
                  PRODUCT NAME
                </h6>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] dark:!bg-[rgb(31, 41, 55)] outline-none focus:border-[rgba(0,0,0,0.6)] 
                rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                />
              </div>
              <div className="form-group !mb-[15px] px-4">
                <h6 className="!text-[15px] !mb-[16px] !color-[rgba(0, 0, 0, 1)] dark:text-gray-200 font-[600]">
                  DESCRIPTION
                </h6>
                <textarea
                  rows="5"
                  cols="10"
                  name="description"
                  className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] dark:!bg-[rgb(31, 41, 55)] outline-none focus:border-[rgba(0,0,0,0.6)] 
                rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                />
              </div>
              <div className="row px-4">
             
                <div className="col">
                  <div className="form-group">
                    <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                      CATEGORY
                    </label>
                    <FormControl sx={{ minWidth: 120 }} className="w-full">
                      <Select
                        value={category}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                      BRAND
                    </label>
                    <FormControl sx={{ minWidth: 120 }} className="w-full">
                      <Select
                        value={brand}
                        onChange={handleChangeBrand}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Brand 1</MenuItem>
                        <MenuItem value={2}>Brand 2</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="col_ mb-4 px-4">
                <div className="grid grid-cols-2 gap-5">
                  <div className="form-group !mb-[15px]">
                    <label className="p-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                      Regular price
                    </label>
                    <input
                      className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] 
                                    rounded-md px-4 !pl-13 bg-gray-100 dark:bg-gray-800"
                      type="text"
                    />
                  </div>
                  <div className="form-group !mb-[15px]">
                    <label className="p-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                      Discount Price
                    </label>
                    <input
                      className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)]
                                     rounded-md px-3  bg-gray-100 dark:bg-gray-800"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col_ mb-4 px-4">
                {" "}
                <div className="grid grid-cols-2 gap-5">
                  <div className="form-group !mb-[15px]">
                    <label className="p-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                      Rating
                    </label>
                    <span>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </span>
                  </div>
                  <div className="form-group !mb-[15px]">
                    <label className="p-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                      Product Stock
                    </label>
                    <input
                      className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)]
                   rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                className="Primary !btn-blue !btn-lg !btn-big w-full z-index-full position-relative cursor: pointer"
              >
                <IoMdCloudUpload
                  size={"2rem"}
                  className="color-[rgba(255, 255, 255, 1)] font-[600] overflow-hidden m-1"
                />
                &nbsp; PUBLISH AND VIEW{" "}
              </Button>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </form>

      <br />
      <br />
      <br />
    </div>
  );
};

export default productUpload;
