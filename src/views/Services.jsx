import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
// import { motion } from "framer-motion";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Services = () => {
  const theme = useContext(ThemeContext);
  let workIconStyles = { background: "#3b82f6" };
  let schoolIconStyles = { background: "#3b82f6" };

  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="services"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Experiences
        </h2>
        <div className="">
          <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center ">
          <VerticalTimeline>
        {serviceData.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.key}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              {/* <h1>{element.detail}</h1> */}
              <h2 className="vertical-timeline-element-title">
              <b>{element.detail}</b> 
              {/* <br></br> */}
              </h2>
              <h2 className="vertical-timeline-element-title">
              {element.title}
              </h2>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
                <br></br>
                {element.date} 
              </h5>
              <p id="description">{element.description}</p>
              {/* <br></br> */}
              <h5>{element.grade}</h5>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
