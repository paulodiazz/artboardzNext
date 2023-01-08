import React from "react";

const NewReleaseImage = (props) => {
  return (
    <div className=" h-[266px] lg:h-[450px] ">
      <img src={props.image} alt="/" className="w-full h-full object-cover " />
    </div>
  );
};

export default NewReleaseImage;
