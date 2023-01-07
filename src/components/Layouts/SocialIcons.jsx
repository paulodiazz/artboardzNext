import React from "react";
import TwitterIcon from "../assests/icons/TwitterIcon";
import DiscordIcon from "../assests/icons/DiscordIcon";
import WebIcon from "../assests/icons/WebIcon";

export const SocialIcons = () => {
  return (
    <div className="flex gap-2">
      <a href="/">
        <TwitterIcon />
      </a>
      <a href="/">
        <DiscordIcon />
      </a>
      <a href="/">
        <WebIcon />
      </a>
    </div>
  );
};
