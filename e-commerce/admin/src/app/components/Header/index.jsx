"use client";

import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { MdMenuOpen, MdLightMode } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchBox from "../SearchBox";
import { MyContext } from "app/Context/ThemeProvider";
import Cookies from "js-cookie";
import { IoIosMenu } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { FaRegUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const changeTheme = () => {
    const newTheme = context.theme === "light" ? "dark" : "light";
    context.setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  const toggleNav = () => {
    context.setisToggleSidebar(!context.isToggleSidebar);
  };
  return (
    <header
      className={`flex fixed top-0 right-0 z-[100] px-4 py-3 justify-between shadow-md transition-all bg-white dark:!bg-themeDark
      ${context.isToggleSidebar === false ? "w-[82%]" : "w-[100%]"}`}
    >
      <div className="flex items-center gap-3">
        <Tooltip
          title={
            context.isToggleSidebar ? "Exit Full Screen" : "Enter Full Screen"
          }
          placement="bottom"
        >
          <Button
            className="!min-w-[45px] !w-[45px] !h-[45] !rounded-full !text-gray-800
         dark:!text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={toggleNav}
          >
            {context.isToggleSidebar === false ? (
              <MdMenuOpen size={25} />
            ) : (
              <IoIosMenu size={25} />
            )}
          </Button>
        </Tooltip>
        <SearchBox placeholder="Search Here....." width="450px" />
      </div>
      <div className="flex items-center gap-3">
        <Tooltip
          title={
            context.theme === "light"
              ? "Switch to Dark Mode"
              : "Switch to Light Mode"
          }
          placement="bottom"
        >
          <Button
            onClick={changeTheme}
            className="!min-w-[45px] !w-[45px] !h-[45px] !rounded-full !text-gray-800 dark:!text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {context.theme === "light" ? (
              <MdLightMode size={30} />
            ) : (
              <IoMoonSharp size={30} />
            )}
          </Button>
        </Tooltip>
        <Tooltip title="Notifications" placement="bottom">
          <Button className="!min-w-[45px] !w-[45px] !h-[45px] !rounded-full !text-gray-800 dark:!text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800">
            <IoIosNotificationsOutline size={30} />
          </Button>
        </Tooltip>

        <div className="flex items-center gap-3 ">
          <Button
            className="!min-w-[45px] !w-[45px] !h-[45px] !rounded-full flex items-center justify-center !p-0 !overflow-hidden
           !bg-medium dark:!bg-blue-600 !text-white"
            onClick={handleClickMenu}
          >
            <img src="/avatar.webp" className="w-full h-full object-cover" />
          </Button>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleCloseMenu}>
              <div className="flex items-center gap-2">
                <Button
                  className="!min-w-[45px] !w-[45px] !h-[45px] !rounded-full flex items-center justify-center !p-0 !overflow-hidden
                  !bg-medium dark:!bg-blue-600 !text-white"
                  onClick={handleClickMenu}
                >
                  <img
                    src="/avatar.webp"
                    className="w-full h-full object-cover"
                  />
                </Button>
                <div className="info flex flex-col">
                  <h3>Albert Flores </h3>
                  <p>admin1234@gmail.com</p>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseMenu}>
              <ListItemIcon>
                <FaRegUser size={24} />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <ListItemIcon>
                <IoMdSettings size={24} />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <ListItemIcon>
                <IoIosLogOut size={24} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
