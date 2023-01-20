import React from "react";
import TwitterIconsOutline from "../assests/icons/TwitterIconsOutline";

export const PatronsCard = ({ image, name, twitter, country, assets }) => {
  return (
    <div className="flex space-x-3 px-2 py-4">
      <div>
        <img className="object-cover w-24 h-24 rounded-full border border-2 border-light" src={image} alt="Rounded avatar" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex">
          <h2 className="flex-none font-semibold">{name}</h2>
          {twitter &&
            <a className="flex-initial" href={twitter}><TwitterIconsOutline className="ml-2 w-4" /></a>
          }
        </div>
        <div>
          <p className="lead">{country}</p>
          <p>{assets} assets</p>
        </div>
      </div>
    </div>
  );
};
