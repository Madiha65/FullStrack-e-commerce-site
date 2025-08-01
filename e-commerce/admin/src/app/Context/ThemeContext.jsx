"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MyContext } from "./ThemeProvider";
import Sidebar from "app/components/Sidebar";
import Header from "app/components/Header";
import { opacity } from "@mui/icons-material";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isToggleSidebar, setisToggleSidebar] = useState(false);

  useEffect(() => {
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const values = { theme, setTheme, isToggleSidebar, setisToggleSidebar };

  return (
    <MyContext.Provider value={values}>
      <div className="main flex">
        <div
          className={`sidebarWrapper transition-all ${
            isToggleSidebar === false
              ? "w-[18%] opacity-100"
              : "w-[0%] opacity-0"
          } h-screen`}
        >
          <Sidebar />
        </div>
        <div
          className={`rightContent transition-all ${
            isToggleSidebar === false ? "w-[82%]" : "w-[100%]"
          }`}
        >
          <Header />
          <div className="afterHeader" style={{ marginTop: "90px" }} />
          <div className="px-4">{children}</div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default ThemeProvider;
