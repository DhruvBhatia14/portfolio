import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I am a third-year Software Engineering student at the University of Alberta with a deep passion for Machine Learning, Data Science, and Natural Language Processing (NLP). 
              During a co-op term as a Software Developer, I worked extensively on projects involving Named Entity Recognition (NER) and found great satisfaction in building and refining 
              models that transform unstructured data into actionable insights. The process of designing algorithms, fine-tuning LLM's, prompt engineering, and seeing their impact continues to fuel my curiosity 
              and drive in this field.
              <br />
              <br />
              Beyond Machine Learning, I am highly intrigued by quantitative development, where my strong mathematical foundation plays a pivotal role. The challenge of developing efficient 
              algorithms and analyzing large-scale financial data excites me, as it combines my analytical skills with my technical expertise. I aim to leverage this synergy between math, programming, 
              and problem-solving to contribute to impactful projects at the intersection of finance and technology.

            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Academics
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I have consistently excelled in my academic journey, maintaining a remarkable 3.9 GPA. 
              I achieved First Class Standing in my first, second and third year of studies, reflecting my commitment to academic excellence. 
              In recognition of my superior academic performance, I was awarded a prestigious scholarship worth $5,000 in September 2024. 
              This honor underscores my dedication to achieving high standards in my coursework and academic pursuits.
            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and reliable open-source software, 
              I design and develop intelligent models and efficient algorithms to create impactful, 
              user-focused applications at the intersection of Machine Learning, quantitative development, and software engineering.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
