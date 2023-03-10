import React from "react";
import { Link } from "react-router-dom";
import ArtBoardzInfo from "./ArtBoardInfo";

const ArtBoardzItem = ({ image, art, location, artist, links, id }) => {
  return (
    <li className="bg-primary-color border-2 border-light-purple">
      <Link to={`/artboardz/${id}`} className=" h-[266px] md:h-[228px] block">
        <img src={image} alt="/" className="w-full h-full object-cover " />
      </Link>
      <div className="p-4">
        <ArtBoardzInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
        />
      </div>
      <button className="bg-active-link rounded-md p-2 font-semibold w-11/12 mx-auto block tracking-wide text-base my-4">
        Floor: 340
      </button>
    </li>
  );
};

export default ArtBoardzItem;
