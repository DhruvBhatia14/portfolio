import React from "react";
import AirpadCard from "../components/AirpadCard";
import RnnCard from "../components/RnnCard";
import MedocCard from "../components/MedocCard";
import SatCard from "../components/SatCard";
import VerifireCard from "../components/VerifireCard"

const Projects = () => {
  return (
    <div
      id="projects"
      className="site-section"
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <p className="section-kicker text-center">Selected work</p>
        <h2 className="section-heading px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="section-kicker mt-16">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <AirpadCard />
          <RnnCard />
          <MedocCard />
          <SatCard />
          <VerifireCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
