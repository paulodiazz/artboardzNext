import React, { useRef } from "react";
import CameraIcon from "../assests/icons/CameraIcon";
import CloseIcon from "../assests/icons/CloseIcon";

const ProfileEditForm = ({ onCloseForm }) => {
  const nameRef = useRef();
  const nationalityRef = useRef();
  const twitterRef = useRef();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const formData = {
      name: nameRef.current.value,
      nationality: nationalityRef.current.value,
      twitter: twitterRef.current.value,
    };
    console.log(formData);
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className="bg-[#011740]  px-8 pb-10 pt-5  grid place-items-center gap-y-5 text-white font-Montserrat tracking-wide border-[#B8C0CC] border rounded-md absolute top-0 left-1/2 -translate-x-1/2 max-w-[98%] w-[520px]"
    >
      <button type="button" onClick={onCloseForm} className="w-fit ml-auto">
        <CloseIcon />
      </button>
      <div>
        <label
          htmlFor="image"
          className="rounded-full border border-white w-[190px] h-[190px] flex items-center justify-center"
        >
          <CameraIcon />
        </label>
        <input type="file" name="image" id="image" hidden />
      </div>
      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="Name"
          id="Name"
          ref={nameRef}
          className="bg-[#011335] border  px-3 border-white rounded h-10 focus:outline-blue-500 "
        />
      </div>
      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="Nationality">Nationality</label>
        <input
          type="text"
          name="Nationality"
          id="Nationality"
          ref={nationalityRef}
          className="bg-[#011335] border px-3  border-white rounded h-10 focus:outline-blue-500 "
        />
      </div>
      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="Twitter">Twitter</label>
        <input
          type="url"
          name="Twitter"
          id="Twitter"
          ref={twitterRef}
          className="bg-[#011335] border  px-3  border-white rounded h-10 focus:outline-blue-500 "
        />
      </div>
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          onClick={onCloseForm}
          className="font-Roboto border border-[#B8C0CC] rounded py-[8px] px-[24px]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="font-Roboto bg-[#6E028F] rounded py-[8px] px-[24px]"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
