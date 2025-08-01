"use client";
import React, { useState } from "react";
import { PiExportBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { ordersData } from "app/data";
import Checkbox from "@mui/material/Checkbox";
import SearchBox from "app/components/SearchBox";
import Link from "next/link";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "OrderId", label: "Order Id", minWidth: 90 },
  {
    id: "Customer",
    label: "Customer",
  },
  {
    id: "items",
    label: "Items",
    minWidth: 30,
  },
  {
    id: "Price",
    label: "Price",
    minWidth: 70,
  },

  {
    id: "createdAt",
    label: "CreatedAt",
    minWidth: 160,
  },
  {
    id: "modifiedAt",
    label: "ModifiedAt",
    minWidth: 160,
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 50,
  },
  {
    id: "Actions",
    label: "Actions",
    minWidth: 100,
  },
];

const Orders = () => {
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
      <div className="card p-0 pr-1 pb-5 dark:border-[rgba(255,255,255,0.1)] dark:bg-themeDark w-[100%] mt-4">
        <div className="row flex items-center justify-between p-5">
          <h2 className="text-[22px] font-bold">Recent Order </h2>
          <SearchBox placeholder="Search ..." />
        </div>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
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
              {ordersData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index + "order"}
                    >
                      <TableCell> #{order?.OrderId}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3 w-[220px]">
                          <span className="flex items-center justify-center rounded-full w-[40px] h-[40px] overflow-hidden">
                            <img
                              src={order?.customer?.img}
                              className="w-full h-full object-cover"
                            />
                          </span>
                          <div className="info flex flex-col gap-0 dark:opacity-75">
                            <h3 className="font-[600]">
                              {order?.customer?.name}
                            </h3>
                            <span className="text-[14px] ">
                              {order?.customer?.email}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-nowrap">{order?.items}</span>
                      </TableCell>
                      <TableCell>${order?.price}</TableCell>
                      <TableCell>
                        <h4>{order?.createdAt?.date}</h4>
                        <span className="text-[13px] dark:opacity-75">
                          ({order?.createdAt?.time})
                        </span>
                      </TableCell>
                      <TableCell>
                        <h4>{order?.modifiedAt?.date}</h4>
                        <span className="text-[13px] dark:opacity-75">
                          ({order?.modifiedAt?.time})
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 capitalize">
                          <span
                            className="flex items-center justify-center w-[10px] h-[10px] rounded-full"
                            style={{
                              background:
                                order?.status === "cancelled"
                                  ? "#e05858"
                                  : order?.status === "pending"
                                  ? "#c9b23d"
                                  : order?.status === "refunded"
                                  ? "#7d7d7d"
                                  : order?.status === "completed"
                                  ? "#4ad47a"
                                  : "#d1d5db",
                            }}
                          ></span>
                          <span
                            style={{
                              color:
                                order?.status === "cancelled"
                                  ? "#e05858"
                                  : order?.status === "pending"
                                  ? "#c9b23d"
                                  : order?.status === "refunded"
                                  ? "#7d7d7d"
                                  : order?.status === "completed"
                                  ? "#4ad47a"
                                  : "#d1d5db",
                            }}
                          >
                            {order?.status}
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
          count={ordersData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <br />
      <br />
    </>
  );
};

export default Orders;
