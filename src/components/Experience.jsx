import React from "react";
import { EXPERIENCE_ITEMS } from "../constants/experienceConstants";

export const Experience = () => {
  const experienceCard = ({ id, title, image }) => {
    return (
      <div
        key={id}
        className="h-[200px] w-[200px] flex flex-col items-center justify-center border-[2px] rounded-full shadow-md p-2 cursor-pointer hover:scale-105 duration-300 border-gray-200"
      >
        <img src={image} alt={title} className="w-[100px] aspect-auto  p-1 " />
        <div>
          <div className="text-xl m-2">{title}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-5"> Experience</h1>
      <p>I have more than 5 years of experience in the below technologies.</p>
      <div className="flex space-x-15 space-y-8 my-5 flex-wrap">
        {EXPERIENCE_ITEMS.map((cardItem) => experienceCard(cardItem))}
      </div>
    </div>
  );
};
