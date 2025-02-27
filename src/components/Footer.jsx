import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { SOCIAL_MEDIA_LINKS } from "../constants";

export const Footer = () => {
  return (
    <>
      <hr className="border-gray-300" />
      <footer className="py-12">
        <div
          name="Footer"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20"
        >
          <div className="flex flex-col items-center justify-between">
            <div className="flex space-x-12">
              <a
                href={SOCIAL_MEDIA_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={24} className="cursor-pointer" />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={24} className="cursor-pointer" />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={24} className="cursor-pointer" />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={24} className="cursor-pointer" />
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 flex flex-col items-center">
              <p>&copy; 2025 Nishchal Verma. All rights reserved.</p>
              <p>Supportive Partner ❤️ Aniket</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
