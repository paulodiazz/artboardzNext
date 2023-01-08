import React from "react";
import NewReleaseItem from "./NewReleaseItem";
import releaseImg from "../assests/images/new_release.png";

const DUMMY_RELEASES = [
  {
    id: "R1",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R2",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R3",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R4",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
];

const NewReleaseList = () => {
  return (
    <ul className="flex flex-col gap-8">
      {DUMMY_RELEASES.map((release) => {
        return (
          <NewReleaseItem
            key={release.id}
            id={release.id}
            image={release.image}
            art={release.source}
            location={release.location}
            artist={release.author}
            links={release.links}
          />
        );
      })}
    </ul>
  );
};

export default NewReleaseList;
