import React from "react";
import TwitterIconsOutline from "../assests/icons/TwitterIconsOutline";

export const PatronsCard = ({ image, name, twitter, country, assets }) => {
  return (
    <div className="flex space-x-3 px-2">
      <div>
        <img className="object-cover w-24 h-24 rounded-full border border-2 border-light" src={image} alt="Rounded avatar" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex">
          <h2 className="flex-none font-semibold">{name}</h2>
          <a className="flex-initial" href={twitter}><TwitterIconsOutline className=" pl-1 w-5" /></a>
        </div>
        <div>
          <p className="lead">{country}</p>
          <p>{assets} assets</p>
        </div>
      </div>
    </div>
    // <div>
    //   {title && (
    //     <h2 className="text-2xl md:text-3xl font-medium pb-3">{title}</h2>
    //   )}
    //   {desc && <p className="text-base md:text-xl">{desc}</p>}
    //   {image && (
    //     <div className="mt-6">
    //       <NewReleaseImage image={image} />
    //     </div>
    //   )}
    // </div>
  );
};
