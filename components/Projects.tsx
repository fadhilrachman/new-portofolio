"use client";
import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import { dataProject } from "./ProjectDetail/constant";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {dataProject.map((val, index) => {
          return (
            <ProjectCard
              img={val.img}
              title={val.name}
              id={val.id}
              link={val.link.link}
              description={val.short_description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
