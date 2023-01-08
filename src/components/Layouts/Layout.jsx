import React from "react";

import customStyles from "./Layout.module.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import { navbarState } from "../../store/redux-slices/UI-slice";
import Navbar from "../Navigation/Navbar";
import { SocialIcons } from "./SocialIcons";

const Layout = ({ children }) => {
  const navBarState = useSelector(navbarState);
  const isNavShown = window.innerWidth > 640 ? true : navBarState;

  return (
    <div
      className={`h-screen ${customStyles.layout} max-w-7xl mx-auto relative`}
    >
      <Header />
      {isNavShown && <Navbar />}
      <main
        className={`bg-primary-purple  min-h-full ${customStyles.main} overflow-y-auto sm:bg-transparent flex flex-col`}
      >
        <div
          className={`${customStyles.backdrop} w-1/3 h-full absolute top-0 left-1/2`}
        ></div>
        {children}
        <div className="w-fit mx-auto mt-auto flex items-center flex-col sm:hidden ">
          <SocialIcons />
          <div>
            <p className="text-white font-Montserrat">Pool ID: d19db...44</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
