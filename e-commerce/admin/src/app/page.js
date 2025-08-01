"use client";
import { Button } from "@mui/material";
import DashboardBoxes from "./components/DashboardBoxes";
import { FaPlus } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { TbSocial } from "react-icons/tb";

import {
  LineChart,
  AreaChart,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import Orders from "./orders/page";
export default function Home() {
  const profitData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const salesData = [
    { name: "JAN", Revenue: 5000, Expense: 1500 },
    { name: "FEB", Revenue: 7500, Expense: 3500 },
    { name: "MAR", Revenue: 4500, Expense: 2700 },
    { name: "APR", Revenue: 2700, Expense: 4800 },
    { name: "MAY", Revenue: 6500, Expense: 9500 },
    { name: "JUN", Revenue: 7400, Expense: 4700 },
    { name: "July", Revenue: 2400, Expense: 1500 },
    { name: "AUG", Revenue: 4700, Expense: 6400 },
    { name: "SEP", Revenue: 7400, Expense: 2500 },
    { name: "OCT", Revenue: 1700, Expense: 3500 },
    { name: "NOV", Revenue: 7400, Expense: 4700 },
    { name: "DES", Revenue: 4100, Expense: 1500 },
  ];
  const CustomerData = [
    {
      name: "JAN",
      newCustomer: 5000,
      oldCustomer: 2900,
    },
    {
      name: "FEB",
      newCustomer: 5500,
      oldCustomer: 3300,
    },
    {
      name: "MAR",
      newCustomer: 6200,
      oldCustomer: 3700,
    },
    {
      name: "APR",
      newCustomer: 7700,
      oldCustomer: 4000,
    },
    {
      name: "MAY",
      newCustomer: 4500,
      oldCustomer: 2350,
    },
    {
      name: "JUN",
      newCustomer: 4800,
      oldCustomer: 2700,
    },
    {
      name: "July",
      newCustomer: 5500,
      oldCustomer: 3400,
    },
    { name: "AUG", newCustomer: 5800, oldCustomer: 3700 },
    { name: "SEP", newCustomer: 5500, oldCustomer: 3400 },
    { name: "OCT", newCustomer: 5000, oldCustomer: 4500 },
    { name: "NOV", newCustomer: 5000, oldCustomer: 2900 },
    { name: "DES", newCustomer: 8700, oldCustomer: 2900 },
  ];

  const [isToggleSubMenu, setisToggleSubMenu] = useState(false);
  const [toggleIndex, settoggleIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [selectedRange, setSelectedRange] = useState("5D");
  const ranges = ["5D", "2W", "1M", "6M", "1Y", "2Y"];

  const toggleTab = (index) => {
    settoggleIndex(index);
    setisToggleSubMenu(!isToggleSubMenu);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md w-[100%] h-[auto] !bg-gray-200 border border-[rgba(87, 84, 84, 0.2)] dark:!bg-themeDark dark:!border-[rgba(255,255,255,0.1)] p-2">
          <p>
            <strong>Days :</strong> {label}
          </p>
          <p>
            <span style={{ color: "#8884d8" }}>Total Profit :</span>{" "}
            {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

  const CustomTooltipRate = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md w-[100%] h-[auto] !bg-gray-200 border border-[rgba(87, 84, 84, 0.2)] dark:!bg-themeDark dark:!border-[rgba(255,255,255,0.1)] p-2">
          <p>
            <strong>Monthly:</strong> {label}
          </p>
          <p>
            <span style={{ color: "#8884d8" }}>New Customer :</span>{" "}
            {payload[0].value}
          </p>
          <p>
            <span style={{ color: "#82ca9d" }}>Old Customer:</span>{" "}
            {payload[1].value}
          </p>
        </div>
      );
    }

    return null;
  };
  const CustomTooltipSales = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md w-[100%] h-[auto] !bg-gray-200 border border-[rgba(87, 84, 84, 0.2)] dark:!bg-themeDark dark:!border-[rgba(255,255,255,0.1)] p-2">
          <p>
            <strong>Month:</strong> {label}
          </p>
          <p>
            <span style={{ color: "#8884d8" }}>Revenue:</span>{" "}
            {formatCurrency(payload[0].value)}
          </p>
          <p>
            <span style={{ color: "#1a9ced" }}>Expense:</span>{" "}
            {formatCurrency(payload[1].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div
        className="box_dashboard mb-4 w-full h-[250px] rounded-md border border-[rgba(0, 0, 0, 0.2)] bg-white dark:bg-themeDark 
      dark:!border-[rgba(255,255,255,0.1)] !py-1 !px-5 flex items-center 
      justify-between"
      >
        <div className="left_col flex flex-col gap-4">
          <h1 className="text-[35px] font-bold leading-10 dark:text-gray-100">
            Good Morning, <br />
            Cameron
          </h1>
          <p className="text-[18px] text-gray-700 dark:text-gray-400">
            {" "}
            Here’s What happening on your store today. See the statistics at
            once.{" "}
          </p>
          <Button
            className="!bg-dark !text-white !capitalize !font-[600] !px-4 dark:!bg-white dark:!text-black !hover:!bg-dark
          !hover:!text-white !rounded-md !text-[16px] !h-[50px] !w-[200px] flex items-center gap-2"
            variant="contained"
          >
            <FaPlus /> Add New Product
          </Button>
        </div>
        <div className="right_col w-[295px]">
          <img src="/dashboard.webp" alt="Dashboard" className="w-full" />
        </div>
      </div>
      <DashboardBoxes />

      <div className="flex w-full gap-3 my-3">
        <div className="card dark:bg-themeDark p-0 dark:border-[rgba(255,255,255,0.1)] w-[65%]">
          <div className="flex items-center justify-between mb-4 p-4">
            <div className="leftCol">
              <h2 className="text-[16px]">Total Profit</h2>
              <span className="text-[22px] font-bold">$8,950.00</span>
            </div>
            <div className="rightCol">
              <Button
                className="bg-primary !capitalize !font-[400] !px-4  !hover:!bg-dark !capitalize"
                variant="outlined"
                size="small"
              >
                Details
              </Button>
            </div>
          </div>
          <div className="p-5 pt-0">
            <div className="w-full rounded-xl border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] py-2 flex items-center justify-between px-4">
              {ranges.map((range) => (
                <span
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`flex items-center justify-center p-2 px-4 rounded-md text-[14px] cursor-pointer 
              ${selectedRange === range ? "bg-gray-300 dark:bg-gray-800" : ""}`}
                >
                  {range}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={profitData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="50%"
                      stopColor="#8884d8"
                      stopOpacity={0.8}
                    ></stop>
                    <stop
                      offset="95%"
                      stopColor="#8884d8"
                      stopOpacity={0}
                    ></stop>
                  </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  strokeWidth={2}
                  stroke="#8884d8"
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card dark:bg-themeDark p-0 dark:border-[rgba(255,255,255,0.1)] w-[35%]">
          <div className="flex items-center justify-between mb-4 p-4">
            <div className="leftCol">
              <h2 className="text-[18px] font-bold">Channel revenue</h2>
              <span className="text-[22px] font-bold">3.4%</span>
              <span className="text-[14px] pl-2">Growth Rate</span>
            </div>
            <div className="rightCol relative">
              <Button
                className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark !capitalize"
                variant="outlined"
                size="small"
                onClick={() => setisToggleSubMenu(!isToggleSubMenu)}
              >
                {selectedOption}
                <FaAngleDown
                  size={18}
                  className={`${
                    isToggleSubMenu ? "rotate-180" : ""
                  } dark:text-gray-300`}
                />
              </Button>
              {isToggleSubMenu && (
                <ul className="absolute mt-2 right-1 bg-white dark:bg-gray-800 shadow-md rounded-md p-1 z-50">
                  {["Monthly", "Annually", "Weekly"].map((item, i) => (
                    <li
                      key={i}
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md !text-[14px]"
                      onClick={() => {
                        setSelectedOption(item);
                        setisToggleSubMenu(false);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5 mb-6 p-4">
            <div className="box__ flex flex-col">
              <span className="flex w-full h-[5px] rounded-full bg-blue-400 mb-2"></span>
              <span className="font-[600]">28%</span>
            </div>
            <div className="box__ flex flex-col">
              <span className="flex w-full h-[5px] rounded-full bg-green-400 mb-2"></span>
              <span className="font-[600]">38%</span>
            </div>
            <div className="box__ flex flex-col">
              <span className="flex w-full h-[5px] rounded-full bg-orange-400 mb-2"></span>
              <span className="font-[600]">42%</span>
            </div>
          </div>
          <div className="p-4 py-6 bg-gray-200 dark:bg-[rgba(255,255,255,0.050)] rounded-md mt-3 ml-4 mr-4 grid grid-cols-3 gap-1">
            <div className="col_ flex items-center justify-center flex-col">
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400">
                <MdProductionQuantityLimits
                  className="dark:!text-themeDark"
                  size={25}
                />
              </span>
              <h3 className="text-[14px] font-[600] mt-1">$2.9K</h3>
              <p className="text-[12px]">Online store</p>
            </div>
            <div className="col_ flex items-center justify-center flex-col">
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-green-400">
                <BsShop className="dark:!text-themeDark" size={25} />
              </span>
              <h3 className="text-[14px] font-[600] mt-1">$2.9K</h3>
              <p className="text-[12px]">Online store</p>
            </div>
            <div className="col_ flex items-center justify-center flex-col">
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-orange-400 ">
                <TbSocial className="dark:!text-themeDark" size={25} />
              </span>
              <h3 className="text-[14px] font-[600] mt-1">$2.9K</h3>
              <p className="text-[12px]">Online store</p>
            </div>
          </div>
        </div>
      </div>

      <div className="salesChart pt-3">
        <div className="card !bg-white dark:!bg-themeDark p-5 w-full  dark:border-[rgba(255,255,255,0.1)]">
          <h2 className="text-[16px]">Sales Report</h2>
          <div className="w-full h-[400px] mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={salesData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="none" />
                <XAxis dataKey="name" scale="band" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip
                  formatter={(value) => formatCurrency(value)}
                  content={<CustomTooltipSales />}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="Revenue"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                  stroke="#8884d8"
                />
                <Bar
                  dataKey="Expense"
                  barSize={15}
                  fill="#1a9ced"
                  radius={[8, 8, 0, 0]}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <Orders />

      <div className="salesChart pt-3">
        <div className="card dark:bg-themeDark p-3 dark:border-[rgba(255,255,255,0.1)] w-[100%]">
          <h2 className="text-[16px]">Repeat Customer Rate</h2>
          <div className="w-full h-[400px] mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={CustomerData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid stroke="none" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltipRate />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="oldCustomer"
                  strokeWidth={2}
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="newCustomer"
                  strokeWidth={2}
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
