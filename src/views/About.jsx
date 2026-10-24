import React from "react";
import { techStack } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="site-section">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className="section-heading px-4 md:px-0 text-center"
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="section-kicker mt-12">
              A bit about me
            </h4>
            <p
              className="section-copy mt-4 text-xl text-justify"
            >
              I’m a Software Engineering student at the University of Alberta
              (2022–2027), currently working as a Machine Learning Developer at
              IBM. I enjoy building practical things with Python, LLMs, NLP,
              and multi-agent systems.
              <br />
              <br />
              I’ve also worked as a Teaching Assistant for CMPUT 272, leading
              seminars and office hours for 400+ students. It’s given me a
              chance to grow as a leader by mentoring others, making difficult
              ideas approachable, and helping people feel more confident
              solving problems.

            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="section-kicker mt-12">
              Academics
            </h4>
            <p
              className="section-copy mt-4 text-xl text-justify"
            >
              I maintain a 3.9/4.0 GPA with First Class Standing and was
              recently awarded the George and Margaret McNeill Engineering
              Co-op Scholarship (2025).
            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="section-kicker mt-12">
              Technologies and Tools
            </h4>
            <p
              className="section-copy mt-4 text-xl text-justify"
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
                className="tech-pill py-2 px-4 md:m-4 mx-2 mt-6 rounded-lg flex items-center cursor-pointer md:w-48 w-40"
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
