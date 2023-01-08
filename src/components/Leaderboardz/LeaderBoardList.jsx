import React from "react";
import LeaderboardItem from "./LeaderBoardItem";
import photo from "../assests/images/ProfilePhoto.png";

const DUMMY_LEADERS = [
  {
    image: photo,
    name: "Fridge scnmc cdjkfv cvnjkdx bkdscjk ",
    amount: 20,
  },
  {
    image: photo,
    name: "Fridge Arinze",
    amount: 20,
  },
  {
    image: photo,
    name: "Fridge",
    amount: 20,
  },
  {
    image: photo,
    name: "Fridge",
    amount: 20,
  },
  {
    image: photo,
    name: "Fridge",
    amount: 20,
  },
  {
    image: photo,
    name: "Fridge",
    amount: 20,
  },
];

const LeaderBoardList = () => {
  return (
    <ul className="bg-primary-color p-4 grid gap-3 rounded-lg">
      {DUMMY_LEADERS.map((leader, index) => {
        return (
          <div className="border-b border-white last-of-type:border-none">
            <LeaderboardItem
              key={index}
              position={index + 1}
              image={leader.image}
              name={leader.name}
              amount={leader.amount}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default LeaderBoardList;
