import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import profileImage from "../assests/images/ProfilePhoto.png";
import { Link } from "react-router-dom";

const HeaderProfile = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link to="profile" className="block w-[40px] aspect-square">
        <Avatar image={profileImage} username={"profile"} />
      </Link>
      <span aria-hidden>
        <ChevronDownIcon className="w-4 text-[#7EAAFF]" />
      </span>
    </div>
  );
};

export default HeaderProfile;
