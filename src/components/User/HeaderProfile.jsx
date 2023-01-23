import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import profileImage from "../../../public/images/ProfilePhoto.png";
import Link from "next/link";

const HeaderProfile = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link
        to="profile"
        className="block w-[40px] aspect-square border border-[#7EAAFF] rounded-full "
      >
        <Avatar
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFFG-hAuwWCF1wpo8rDXVEfoFI4_MTg0V8Q&usqp=CAU"
          }
          username={"profile"}
        />
      </Link>
      <span aria-hidden>
        <ChevronDownIcon className="w-4 text-[#7EAAFF]" />
      </span>
    </div>
  );
};

export default HeaderProfile;
