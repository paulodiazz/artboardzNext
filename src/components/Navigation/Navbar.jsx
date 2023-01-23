import React from "react";
import customStyles from "../Layouts/Layout.module.css";
import Link from "next/link";
import { Logo } from "../Layouts/Logo";
import { useDispatch } from "react-redux";
import { UIAction } from "../../store.bck/redux-slices/UI-slice";
import { SocialIcons } from "../Layouts/SocialIcons";

const Navbar = () => {
  const dispatch = useDispatch();

  const activeNavLinkHandler = ({ isActive }) => {
    return isActive
      ? "bg-active-link px-2 w-full inline-block"
      : "px-2 inline-block";
  };

  const toggleNavbarHandler = () => {
    dispatch(UIAction.toggleNavbar());
  };

  return (
    <nav
      className={`bg-primary-color text-white text-xl py-3 font-Montserrat h-fit w-fit border border-white  ${customStyles.navbar} z-50 absolute top-[90px] left-[5%] sm:relative sm:flex sm:left-0 sm:top-0 sm:flex-col sm:px-6 sm:py-8  sm:h-full sm:gap-y-8 sm:border-none`}
    >
      <div className="hidden sm:flex justify-center ">
        <Logo />
      </div>

      <ul className=" space-y-4">
        <li onClick={toggleNavbarHandler}>
          <Link href="/home" className={activeNavLinkHandler}>
            Home
          </Link>
        </li>
        <li onClick={toggleNavbarHandler}>
          <Link href="/new-Releases" className={activeNavLinkHandler}>
            New Releases
          </Link>
        </li>
        <li onClick={toggleNavbarHandler}>
          <Link href="/artboardz" className={activeNavLinkHandler}>
            Artsboardz
          </Link>
        </li>
        <li onClick={toggleNavbarHandler}>
          <Link href="/Leaderboardz" className={activeNavLinkHandler}>
            Leaderboardz
          </Link>
        </li>
      </ul>
      <div className="hidden sm:flex mx-auto mt-auto w-fit">
        <SocialIcons />
      </div>
    </nav>
  );
};
export default Navbar;
