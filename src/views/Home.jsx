import React from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="site-section hero-section">
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="text-left">
            <p className="section-kicker mb-5">Machine learning · software · systems</p>
            <h1 className="hero-title text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className="block text-white"
              >
                Hi, I am Dhruv
              </motion.span>
              <span className="accent block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Software Engineer",
                    1000,
                    "ML Engineer",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className="hero-copy mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              I am a Software Engineering student and currently work as a
              Machine Learning Developer at IBM Payments Center.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
              <a 
                className="accent-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium md:py-4 md:text-lg md:px-10"
                href="https://drive.google.com/file/d/1lUiUwMviXRyDM6TwZwHN1TPjdhnTpkXz/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="hero-visual md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
