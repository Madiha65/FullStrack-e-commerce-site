"use client";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Editor from "react-simple-wysiwyg";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { Button } from "@mui/material";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

const EditProduct = () => {
  const [productName, setProductName] = useState("Flörven");
  const [productCode, setProductCode] = useState("098327NT");
  const [price, setPrice] = useState("252");
  const [costPrice, setCostPrice] = useState("12");
  const [bulkDiscount, setBulkDiscount] = useState("60");
  const [taxRate, setTaxRate] = useState("8");
  const [html, setHtml] = useState("");
  const [category, setCategory] = useState("");

  function onChange(e) {
    setHtml(e.target.value);
  }

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form>
      <h1 className="font-bold text-[28px] font-[600]">Edit Product</h1>
      <div className="flex gap-5 mt-3">
        <div className="w-[50%] flex flex-col gap-3">
          <div className="card dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)]">
            <h2 className="text-[18px] font-[600] mb-4">Basic Information</h2>
            <div className="col_ mb-4">
              <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                Product name
              </label>
              <input
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3
                                   bg-gray-100 dark:bg-gray-800"
                placeholder="Product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
              />
            </div>
            <div className="col_ mb-4">
              <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                Product code
              </label>
              <input
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3
                                   bg-gray-100 dark:bg-gray-800"
                placeholder="Product code"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                type="text"
              />
              <div className="col_ mb-4">
                <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                  Description
                </label>
                <Editor value={html} onChange={onChange} />
              </div>
            </div>
          </div>
          <div className="card dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)] mt-3">
            <h2 className="text-[18px] font-[600] mb-4">Pricing</h2>
            <div className="col_ mb-4">
              <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                Price
              </label>
              <input
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3
                                   bg-gray-100 dark:bg-gray-800"
                placeholder="$0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
              />
            </div>
            <div className="col_ mb-4">
              <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                Cost price
              </label>
              <input
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3
                                   bg-gray-100 dark:bg-gray-800"
                placeholder="$0.00"
                value={costPrice}
                onChange={(e) => setCostPrice(e.target.value)}
                type="text"
              />{" "}
            </div>
            <div className="col_ mb-4">
              <div className="grid grid-cols-2 gap-5">
                <div className="box">
                  <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                    Bulk discount price
                  </label>
                  <input
                    className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3
                                   bg-gray-100 dark:bg-gray-800"
                    placeholder="$ 0.00"
                    value={bulkDiscount}
                    onChange={(e) => setBulkDiscount(e.target.value)}
                    type="text"
                  />{" "}
                </div>
                <div className="box">
                  <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                    Tax rate(%)
                  </label>
                  <input
                    className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3
                                   bg-gray-100 dark:bg-gray-800"
                    placeholder="0"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    type="text"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-3">
          <div className="card  dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)]">
            <h2 className="text-[18px] font-[600] mb-3">Product Image</h2>
            <p className="text-[13px] dark:text-gray-500">
              Choose a product photo or simply drag and drop up to 5 photos
              here.
            </p>
            <div className="grid grid-cols-4 gap-3 mt-3">
              <div className="box p-2 border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden relative group h-[120px] w-[120px]">
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <div
                    className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center
                           gap-4 hidden group-hover:flex"
                  >
                    <FaEye size={29} className="text-white cursor-pointer" />
                    <RiDeleteBinLine
                      size={29}
                      className="text-white cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="box p-2 border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden relative group h-[120px] w-[120px]">
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <div
                    className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center
                           gap-4 hidden group-hover:flex"
                  >
                    <FaEye size={29} className="text-white cursor-pointer" />
                    <RiDeleteBinLine
                      size={29}
                      className="text-white cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="box p-2 border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden relative group h-[120px] w-[120px]">
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <div
                    className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center
                           gap-4 hidden group-hover:flex"
                  >
                    <FaEye size={29} className="text-white cursor-pointer" />
                    <RiDeleteBinLine
                      size={29}
                      className="text-white cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="box p-2 border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden relative group h-[120px] w-[120px]">
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <div
                    className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center
                           gap-4 hidden group-hover:flex"
                  >
                    <FaEye size={29} className="text-white cursor-pointer" />
                    <RiDeleteBinLine
                      size={29}
                      className="text-white cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="box p-2 border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden relative group h-[120px] w-[120px]">
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <div
                    className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center
                           gap-4 hidden group-hover:flex"
                  >
                    <FaEye size={29} className="text-white cursor-pointer" />
                    <RiDeleteBinLine
                      size={29}
                      className="text-white cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div
                className="uploadBox border-2 border-dashed border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)] h-[120px] w-[120px] flex items-center justify-center flex-col gap-0 cursor-pointer
                        relative overflow-hidden hover:bg-gray-200 hover:dark:bg-gray-800 rounded-md"
              >
                <CiImageOn size={32} className="text-gray-500 cursor-pointer" />
                <span className="text-gray-700 dark:text-gray-400 text-[12px] text-center">
                  Drop your image here, or
                </span>
                <span className="text-sky-600 text-[12px] text-center">
                  Click to browse
                </span>
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
                />
              </div>
            </div>

            <p className="text-[13px] text-gray-600 dark:text-gray-500 mt-3 pb-1">
              Image formats: .jpg, .jpeg, .png, preferred size: 1:1, file size
              is restricted to a maximum of 500kb.
            </p>
          </div>
          <div className="card dark:bg-themeDark w-full p-4 dark:border-[rgba(255,255,255,0.1)] mt-3">
            <h2 className="text-[18px] font-[600] mb-4">Attribute</h2>
            <div className="col_ mb-4">
              <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px] pl-2px">
                Category
              </label>
              <FormControl sx={{ m: 1, minWidth: 0 }}>
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
            <div className="col_ mb-4">
              <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                Tags
              </label>
              <input
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 
                              bg-gray-100 dark:bg-gray-800"
                placeholder="Add a Tag"
                type="text"
              />
            </div>
            <div className="col_ mb-4">
              <label className="mb-2 block font-[500] text-gray-600 dark:text-gray-400 text-[14px]">
                Brand
              </label>
              <input
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-3 
                              bg-gray-100 dark:bg-gray-800"
                placeholder="Brand"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <div
        className="actionWrap w-[82%] h-[60px] fixed bottom-0 right-0 z-[99] bg-white dark:bg-dark shadow-lg flex items-center
               justify-between gap-5 px-4"
      >
        <Button
          variant="text"
          color="error"
          className="!font-bold !capitalize"
          startIcon={<BsArrowLeftShort size={25} />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          className="!font-bold !capitalize"
          endIcon={<IoMdSend />}
        >
          save Product
        </Button>
      </div>
    </form>
  );
};

export default EditProduct;
