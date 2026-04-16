import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import LogoImg from '../../assets/logo.png'

const Navbar = () => {
  const links = [
    <li key="/">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-white bg-[#244D3F]" : ""
        }
      >
        <AiOutlineHome />
        Home
      </NavLink>
    </li>,
    <li key="/timeline">
      <NavLink
        to="/timeline"
        className={({ isActive }) =>
          isActive ? "text-white bg-[#244D3F]" : ""
        }
      >
        <RiTimeLine />
        TimeLine
      </NavLink>
    </li>,
    <li key="/stats">
      <NavLink
        to="/stats"
        className={({ isActive }) =>
          isActive ? "text-white bg-[#244D3F]" : ""
        }
      >
        <ImStatsDots />
        Stats
      </NavLink>
    </li>,
  ];

  return (
    <div className=" bg-base-100 shadow-sm ">
      <div className="navbar max-w-[1200px] mx-auto gap-4">
        <div className="flex-1">
          <img src={LogoImg} alt="keenkeeper logo" />
          {/* <a className=" text-xl">
            <span className="font-bold text-[#1F2937]">Keen</span> Keeper
          </a> */}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-1 md:gap-2 px0 md:px-1 text-[12px] md:text-sm font-semibold">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
