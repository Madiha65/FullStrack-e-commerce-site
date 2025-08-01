"use client";
import React, { useState } from "react";
import { PiExportBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { productList } from "app/data";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { Tooltip, Button } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "Product", label: "Product", minWidth: 150 },
  {
    id: "SKU",
    label: "SKU",
    minWidth: 110,
  },
  {
    id: "Stock",
    label: "Stock",
    minWidth: 140,
  },
  {
    id: "Price",
    label: "Price",
    minWidth: 90,
  },

  {
    id: "Ratting",
    label: "Ratting",
    minWidth: 190,
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 100,
  },
  {
    id: "Actions",
    label: "Actions",
    minWidth: 100,
  },
];

const Products = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="px-4 py-5 bg-gray-100 dark:bg-[#111113]">
        <div className="card w-full p-0 pr-1 pb-5 dark:bg-themeDark dark:border-[rgba(255,255,255,0.1)] mt-0">
          <div className="p-5 flex items-center justify-between">
            <h2 className="text-[20px] font-bold">Product List</h2>
            <div className="ml-auto flex items-center gap-3">
              <Button
                className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark !text-dark dark:!text-gray-200 !border !border-[rgba(0,0,0,0.99)] dark:!border-[rgba(255,255,255,0.5)] dark:!bg-[rgba(31,41,50,1)]"
                variant="outlined"
                startIcon={<PiExportBold />}
                size="small"
              >
                Export
              </Button>
              <Button
                className="!bg-dark !text-white !capitalize !px-2 dark:!bg-white dark:!text-black !hover:!bg-dark !hover:!text-white !rounded-md !text-[12px] !h-[38px] !w-[150px] flex items-center gap-2"
                variant="contained"
                href="/product/add"
              >
                <FaPlus />
                Add Product
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-5 mb-4">
            <div className="searchBox relative w-[450px]">
              <IoSearch
                size={20}
                className="absolute top-[10px] left-[10px] text-gray-500"
              />
              <input
                placeholder="Search products..."
                className="w-full h-[40px] outline-none border border-[rgba(0,0,0,0.2)] dark:border-[rgba(253, 126, 126, 0.1)] rounded-md px-3 pl-8 text-[14px] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.3)] dark:bg-themeDark"
                type="text"
              />
            </div>
            <Button
              className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark !text-dark dark:!text-gray-200 !border !border-[rgba(0,0,0,0.99)] dark:!border-[rgba(255,255,255,0.5)] dark:!bg-[rgba(31,41,50,1)]"
              variant="outlined"
              startIcon={<LiaFilterSolid />}
              size="small"
            >
              Filters
            </Button>
          </div>

          <TableContainer sx={{ maxHeight: 450 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox {...label} />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {productList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index + "order"}
                      >
                        <TableCell>
                          <Checkbox {...label} size="small" />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3 w-[300px]">
                            <span className="flex items-center justify-center rounded-full w-[40px] h-[40px] overflow-hidden">
                              <img
                                src={product?.product?.img}
                                className="w-full h-full object-cover"
                              />
                            </span>
                            <div className="info flex flex-col gap-0 dark:opacity-75">
                              <h3 className="font-[600]">
                                {product?.product?.title}
                              </h3>
                              <span className="text-[14px] ">
                                {product?.product?.cat}
                              </span>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell>
                          <span className="text-nowrap">
                            SKU-{product?.SKU}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="relative overflow-hidden rounded-full w-full w-[100px] h-[9px] bg-gray-300">
                            <span
                              className={`absolute top-0 left-0 overflow-hidden rounded-full h-[100%] ${
                                product?.stock > 20
                                  ? "bg-green-700"
                                  : "bg-orange-400"
                              } `}
                              style={{ width: product?.stock + "%" }}
                            ></span>
                          </div>
                          <h3 className="opacity-75">
                            {product?.stock} in stock
                          </h3>
                        </TableCell>
                        <TableCell>${product?.price}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span>{product?.ratting?.ratting}</span>
                            <Rating
                              name="read-only"
                              value={product?.ratting?.ratting}
                              precision={0.5}
                              size={"small"}
                              readOnly
                            />
                            <span>({product?.ratting?.reviews})</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 capitalize">
                            <span
                              className="flex items-center justify-center w-[10px] h-[10px] rounded-full"
                              style={{
                                background:
                                  product?.status === "publish"
                                    ? "#4ad47a"
                                    : product?.status === "pending"
                                    ? "#c9b23d"
                                    : "#d1d5db",
                              }}
                            ></span>
                            <span
                              style={{
                                color:
                                  product?.status === "publish"
                                    ? "#4ad47a"
                                    : product?.status === "pending"
                                    ? "#c9b23d"
                                    : "#6b7280",
                              }}
                            >
                              {product?.status}
                            </span>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center gap-1 actions w-[150]">
                            <Tooltip title="Edit" placement="top">
                              <Link href="/products/editProduct" passHref>
                                <Button className="!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark">
                                  <MdOutlineEdit
                                    size={25}
                                    className="text-themeDark dark:!text-gray-100"
                                  />
                                </Button>
                              </Link>
                            </Tooltip>
                            <Tooltip title="View" placement="top">
                              <Link href="/products/view" passHref>
                                <Button className="!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark">
                                  <FaRegEye
                                    size={25}
                                    className="text-themeDark dark:!text-gray-100"
                                  />
                                </Button>
                              </Link>
                            </Tooltip>
                            <Tooltip title="Delete" placement="top">
                              <Button className="!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark">
                                <MdOutlineDeleteForever
                                  size={25}
                                  className="text-themeDark dark:!text-gray-100"
                                />
                              </Button>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 25]}
            component="div"
            count={productList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Products;
