import React from "react";

const Avatar = ({ image, username, borderColor }) => {
  const AvatarClass = `w-full h-full rounded-full object-cover`;
  return <img src={image} alt={username} className={AvatarClass} />;
};

export default Avatar;
