import React from "react";
import TwitterIconsOutline from "../assests/icons/TwitterIconsOutline";

const MainProfile = ({ image, username, location }) => {
  return (
    <div className="bg-primary-color p-4">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
        <img
          src={image}
          alt={username}
          className=" w-full h-full object-cover"
        />
      </div>
      <div>
        <p>{username}</p>
        <p>{location.city}</p>
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
