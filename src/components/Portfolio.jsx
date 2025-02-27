import React from "react";
import { CARD_ITEMS } from "../constants";

export const Portfolio = () => {
  const card = ({ id, title, image, description, gitubLink }) => {
    return (
      <div
        key={id}
        className="md:w-[300px] md:h-[400px]  border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-105 duration-300 border-gray-200"
      >
        <img
          src={image}
          alt={title}
          className="w-[130px] h-[130px] p-1 rounded-full border-[2px] border-gray-300 "
        />
        <div>
          <div className="font-bold text-xl m-2">{title}</div>
          <p className="px-2 text-gray-700">{description}</p>
        </div>
        <div className="flex justify-around px-4 py-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Video
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Source Code
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-5"> Portfolio</h1>
      <span className="font-semibold underline">Featured Projects</span>
      <div className="flex space-x-5 space-y-5 my-5 flex-wrap">
        {CARD_ITEMS.map((cardItem) => card(cardItem))}
      </div>
    </div>
  );
};
