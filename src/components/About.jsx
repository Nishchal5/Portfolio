import React from "react";
import {
  ACHIEVEMENTS_AND_AWARDS,
  EDUCATION_AND_TRAINING,
  MISSION_STATEMENT,
  PROFESSION_EXPERIENCE,
  RESUME,
  SKILLS_AND_EXPERTISE,
} from "../constants/aboutConstants";
import NishchalResume from "../assets/Nishchal_Verma_CV React.pdf";

export const About = () => {
  const aboutDetails = (aboutData, downloadResume = false) => (
    <>
      <div name="aboutDetail">
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          {aboutData.heading}
        </h1>
        <ul>
          {aboutData.list.map((item, idx) => (
            <li className="text-justify" key={idx}>
              {item}
            </li>
          ))}
        </ul>
        {downloadResume && (
          <a
            href={NishchalResume}
            className="my-2"
            download="Download Resume"
            target="_blank"
            rel="noreferrer"
          >
            <br />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Download Resume
            </button>
          </a>
        )}
      </div>
    </>
  );

  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-3xl font-bold mb-5"> About</h1>
        <p className="text-justify">
          Hello, I'm Nishchal, a passionate Web developer with a keen eye for
          MERN Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting
          impression.Possesses a deep understanding of React ecosystem and its
          core principles, as well as a strong command over JavaScript and
          related technologies.
        </p>
        <div name="Education">{aboutDetails(EDUCATION_AND_TRAINING)}</div>
        <div name="Skills">{aboutDetails(SKILLS_AND_EXPERTISE)}</div>
        <div name="Professional Experience">
          {aboutDetails(PROFESSION_EXPERIENCE)}
        </div>
        <div name="Certification">{aboutDetails(ACHIEVEMENTS_AND_AWARDS)}</div>
        <div name="MissonStatement">{aboutDetails(MISSION_STATEMENT)}</div>
        <div name="Resume">{aboutDetails(RESUME, true)}</div>
      </div>
    </>
  );
};
