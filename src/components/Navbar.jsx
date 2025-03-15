import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import logo from "../assets/Pic.png";
import { NAV_ITEMS } from "../constants";

export const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = React.useState(false);

  const renderNavItems = () => {
    return NAV_ITEMS.map(({ id, name }) => (
      <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
        <Link
          to={name}
          duration={500}
          smooth={true}
          offset={-80}
          activeClass="active"
          onClick={() =>
            showMobileMenu && setshowMobileMenu((prevState) => !prevState)
          }
        >
          {name}
        </Link>
      </li>
    ));
  };

  return (
    <>
      <div
        name="Navbar"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white z-10"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 justify-center items-center">
            <img src={logo} alt="" className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-lg cursor-pointer">
              Nishcha<span className="text-green-500 text-xl">l</span>
              <p>Web Developer</p>
            </h1>
          </div>
          <div>
            {/* Desktop Navbar */}
            <ul className="hidden md:flex space-x-8">{renderNavItems()}</ul>
            <div
              className="md:hidden flex items-center"
              onClick={() => setshowMobileMenu((prevState) => !prevState)}
            >
              {showMobileMenu ? (
                <IoCloseSharp size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {showMobileMenu && (
          <div className="bg-white w-full h-screen fixed top-16 left-0 right-0 z-10">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-8 text-xl font-semibold">
              {renderNavItems()}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
