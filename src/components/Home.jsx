import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { ReactTyped } from "react-typed";
import { ABOUT_ME } from "../constants";
import image from "../assets/photo.avif";
import { SOCIAL_MEDIA_LINKS } from "../constants";

export const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </div>

            <p className="text-sm md:text-base flex flex-col space-y-2 justify-center text-justify">
              {ABOUT_ME.map((para, index) => (
                <span key={index}>{para}</span>
              ))}
            </p>
            <div className="flex flex-col md:flex-row justify-between space-y-6">
              {/* Social Media Icons */}
              <div className="space-y-3">
                <h1 className="font-bold text-center md:text-left">
                  Available on
                </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href={SOCIAL_MEDIA_LINKS.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookSquare className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href={SOCIAL_MEDIA_LINKS.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  {/* <li>
                    <FaYoutube className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  </li> */}
                  <li>
                    <a
                      href={SOCIAL_MEDIA_LINKS.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIAL_MEDIA_LINKS.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Technologies */}
              <div className="space-y-3">
                <h1 className="font-bold text-center md:text-left">
                  Currently working on
                </h1>
                <ul className="flex justify-around md:space-x-5">
                  <li>
                    <SiReact className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    {" "}
                    <SiMongodb className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <SiTailwindcss className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <SiJavascript className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center order-1 mt-8">
            <img
              src={image}
              alt="Developer's Pic"
              className="rounded-full md:w-[450px]"
            />
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </>
  );
};
