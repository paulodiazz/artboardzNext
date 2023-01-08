import React from "react";
import { Link } from "react-router-dom";
import NewReleaseImage from "./NewReleaseImage";
import NewReleaseInfo from "./NewReleaseInfo";

const NewReleaseItem = ({ image, art, location, artist, links, id }) => {
  return (
    <li className="bg-primary-color border-2 border-light-purple">
      <Link to={`/new-releases/${id}`}>
        <NewReleaseImage image={image} />
      </Link>
      <div className="p-4">
        <NewReleaseInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
        />
      </div>
    </li>
  );
};

export default NewReleaseItem;
