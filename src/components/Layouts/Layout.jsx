import React from "react";

import customStyles from "./Layout.module.css";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useSelector } from "react-redux";
import { navbarState } from "../../store/redux-slices/UI-slice";

const Navbar = () => {
  const activeNavLinkHandler = ({ isActive }) => {
    return isActive
      ? "bg-active-link px-2 w-full inline-block"
      : "px-2 inline-block";
  };
  return (
    <nav
      className={`bg-primary-color text-white text-xl py-3 font-Montserrat h-fit w-fit border border-white  ${customStyles.navbar} absolute top-[90px] left-[5%] sm:relative sm:flex sm:left-0 sm:top-0 sm:flex-col sm:px-6 sm:py-8 sm:h-full sm:space-y-8 sm:border-none`}
    >
      <div className="hidden sm:flex justify-center ">
        <Logo />
      </div>

      <ul className=" space-y-4">
        <li>
          <NavLink to="/" className={activeNavLinkHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/New-Releases" className={activeNavLinkHandler}>
            New Releases
          </NavLink>
        </li>
        <li>
          <NavLink to="/Artsboardz" className={activeNavLinkHandler}>
            Artsboardz
          </NavLink>
        </li>
        <li>
          <NavLink to="/Leaderboardz" className={activeNavLinkHandler}>
            Leaderboardz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Layout = ({ children }) => {
  const isNavShown = useSelector(navbarState);
  return (
    <div
      className={`min-h-screen ${customStyles.layout} max-w-7xl mx-auto relative`}
    >
      <Header />
      {isNavShown && <Navbar />}
      <main className={`bg-red-900 min-h-full ${customStyles.main}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
