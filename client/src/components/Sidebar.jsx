import React from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/assets/logo.svg";
import { useSelector } from "react-redux";
import Anchor from "./Anchor";
const Sidebar = ({ isSideMenu, setIsSideMenu }) => {
  const user = useSelector((state) => state.user.user);
  // const { displayName } = user;
  return (
    <div
      className={`w-2 min-h-screen max-h-screen bg-secondary relative ${
        isSideMenu ? `w-2` : `flex-[.3] xl:flex-[.2] text-white`
      } duration-300 px-3 py-6`}
    >
      {/* anchor for show/hide */}
      <Anchor isSideMenu={isSideMenu} setIsSideMenu={setIsSideMenu} />
      {/* side-bar items */}
      <div className="overflow-hidden w-full flex flex-col gap-4">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-72 h-auto object-contain" />
        </Link>

        <p className="text-gray-400 hover:text-gray-200 w-full text-center text-lg">
          Hello, {user?.displayName ? user.displayName : "Friend! "}
        </p>

        <Link
          to={"/newProject"}
          className="w-full text-center py-2 border-gray-200 hover:border-2 rounded-md duration-200
                    group"
        >
          <p className="text-gray-400 group-hover:text-gray-200 cursor-pointer">
            Start Coding
          </p>
        </Link>

        <Link
          to={"/"}
          className="flex items-center gap-2 w-full justify-center text-gray-400"
        >
          <MdHome /> Home
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;