import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import profileImage from "../assests/images/ProfilePhoto.png";

const HeaderProfile = () => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar image={profileImage} borderColor="#7EAAFF" username={"profile"} />
      <span aria-hidden>
        <ChevronDownIcon className="w-4 text-[#7EAAFF]" />
      </span>
    </div>
  );
};

export default HeaderProfile;
