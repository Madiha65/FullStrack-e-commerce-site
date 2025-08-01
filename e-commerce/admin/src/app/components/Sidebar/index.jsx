"use client";
import { Button } from "@mui/material";
import { sidebarMenu } from "app/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { MyContext } from "app/Context/ThemeProvider";

export const Sidebar = () => {
  const [isToggleSubMenu, setisToggleSubMenu] = useState(false);
  const [toggleIndex, settoggleIndex] = useState(null);
  const context = useContext(MyContext);

  const toggleTab = (index) => {
    settoggleIndex(index);
    setisToggleSubMenu(!isToggleSubMenu);
  };

  return (
    <aside
      className={`h-screen max-h-screen overflow-y-scroll overflow-x-hidden p-3 border-r-[1px] 
   border-[rgbe(0, 0, 0, 0.1)] fixed top-0 left-0 bg-white dark:bg-medium transition-all ${
     context.isToggleSidebar === false ? "w-[18%]" : "w-[0%]"
   }`}
    >
      <Link href="/">
        {context.theme === "light" ? (
          <Image
            src="/logo.webp"
            width={130}
            height={40}
            style={{ height: "50px", width: "auto" }}
            alt="Logo"
          />
        ) : (
          <Image
            src="/logo-w.webp"
            width={130}
            height={40}
            style={{ height: "50px", width: "auto" }}
            alt="Logo"
          />
        )}
      </Link>

      <div className="sidebarMenu mt-4">
        {sidebarMenu?.length !== 0 && (
          <ul className="w-full">
            {" "}
            {sidebarMenu?.map((menu, index) => {
              return (
                <li className="w-full relative group" key={index}>
                  {menu?.items?.length > 0 ? (
                    <Button
                      variant="text"
                      className={`w-full !capitalize text-left !justify-start group-hover:!bg-gray-200
                         dark:group-hover:!bg-gray-800 
                        !text-medium gap-2
                        !font-[600] !text-[13px] !py-[8px] dark:!text-gray-200 ${
                          toggleIndex === index && isToggleSubMenu === true
                            ? "!bg-gray-200 dark:!bg-gray-800"
                            : ""
                        }`}
                      onClick={() => toggleTab(index)}
                    >
                      {menu?.icon}
                      {menu?.title}
                    </Button>
                  ) : (
                    <Link href={menu?.href}>
                      <Button
                        variant="text"
                        className="w-full !capitalize text-left !justify-start 
                        group-hover:!bg-gray-200 dark:group-hover:!bg-gray-800 !text-medium gap-2 !font-[600] !text-[13px] !py-[8px] 
                        dark:!text-gray-200"
                      >
                        {menu?.icon}
                        {menu?.title}
                      </Button>
                    </Link>
                  )}

                  {menu?.items?.length > 0 && (
                    <Button
                      className="!absolute flex items-center justify-center !min-w-[30px] !rounded-full !w-[30px] !h-[30px] 
                    z-[50] top-[5px] right-[10px] cursor-pointer !text-medium dark:text-gray-300"
                      onClick={() => toggleTab(index)}
                    >
                      <FaAngleDown
                        size={18}
                        className={`${
                          toggleIndex === index && isToggleSubMenu === true
                            ? "rotate-180"
                            : ""
                        } 
                      dark:text-gray-300`}
                      />
                    </Button>
                  )}
                  {menu?.items?.length > 0 && (
                    <Collapse
                      isOpened={toggleIndex === index ? isToggleSubMenu : false}
                    >
                      <div className="submenu w-full flex flex-col py-1">
                        {menu?.items?.map((item, index_) => {
                          return (
                            <Link
                              className="block w-full "
                              key={index_}
                              href={item?.href}
                            >
                              <Button
                                className="!capitalize !text-[13px] !text-left !justify-start hover:bg-gray-200 dark:hover:bg-gray-800  
                                w-full !text-medium
                                 dark:!text-gray-400 gap-2 !pl-3"
                              >
                                <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
                                {item?.title}
                              </Button>
                            </Link>
                          );
                        })}
                      </div>
                    </Collapse>
                  )}
                </li>
              );
            })}{" "}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
