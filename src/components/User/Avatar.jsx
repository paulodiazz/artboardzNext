import React from "react";

const Avatar = ({ image, username, borderColor }) => {
  const AvatarClass = `border-${borderColor} border w-12 aspect-square rounded-full object-cover`;
  return <img src={image} alt={username} className={AvatarClass} />;
};

export default Avatar;
