import React from "react";
import NewReleaseImage from "./NewReleaseImage";

export const DetailsCard = ({ image, title, desc }) => {
  return (
    <div>
      {title && <h2 className="text-2xl font-medium pb-3">{title}</h2>}
      {desc && <p className="text-base">{desc}</p>}
      {image && (
        <div className="mt-6">
          <NewReleaseImage image={image} />
        </div>
      )}
    </div>
  );
};
