import React from "react";
import EditIcon from "../assests/icons/EditIcon";
import TwitterIconsOutline from "../assests/icons/TwitterIconsOutline";
import Avatar from "./Avatar";

const MainProfile = ({ image, username, location }) => {
  return (
    <div className="bg-primary-color p-4 text-white font-Montserrat flex gap-5 items-center tracking-wide">
      <div className="w-[120px] h-[120px] rounded-full relative">
        <Avatar image={image} username={username} />
        <div className="w-[32px] aspect-square bg-[#0E1528] rounded-full absolute top-2/3 right-0 flex items-center justify-center">
          <EditIcon />
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold">{username}</p>
        <p className="text-base font-medium">{`${location.city}, ${location.country}`}</p>
      </div>
      <div>
        <a href="/">
          <TwitterIconsOutline />
        </a>
      </div>
    </div>
  );
};

export default MainProfile;
