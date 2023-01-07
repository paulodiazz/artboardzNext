import React from "react";

import customStyles from "./Layout.module.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import { navbarState } from "../../store/redux-slices/UI-slice";
import Navbar from "../Navigation/Navbar";

const Layout = ({ children }) => {
  const navBarState = useSelector(navbarState);
  const isNavShown = window.innerWidth > 680 ? true : navBarState;

  return (
    <div
      className={`h-screen ${customStyles.layout} max-w-7xl mx-auto relative`}
    >
      <Header />
      {isNavShown && <Navbar />}
      <main
        className={`bg-light-purple  min-h-full ${customStyles.main} overflow-y-auto`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
