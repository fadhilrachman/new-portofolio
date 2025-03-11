"use client";
import Stack from "@/components/ProjectDetail/Stack";
import Title from "@/components/Title";
import React, { useRef } from "react";
import { FaChrome, FaGithub, FaGlobe, FaProjectDiagram } from "react-icons/fa";
import { dataProject } from "@/components/ProjectDetail/constant";
import { useParams } from "next/navigation";
import Features from "@/components/ProjectDetail/Features";
import ImgProject from "@/components/ProjectDetail/ImgProject";
import { GiGlobe } from "react-icons/gi";
const ProjectDetail = () => {
  const ref = useRef();
  const { project_id } = useParams();
  const data = dataProject.find((val) => val.id == Number(project_id));
  // https://www.heroui.com/images/hero-card-complete.jpeg
  return (
    <div className="w-full min-h-[100vh] pb-20 bg-gray-950 text-gray-300  ">
      <img
        src={data?.img}
        alt=""
        className="hidden sm:block w-full h-[400px] shadow-xl shadow-slate-900 object-cover object-top"
      />
      <div className="max-w-screen-xl px-4 mx-auto pt-20 space-y-6   ">
        <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-700">
          <h3 className="text-3xl md:text-5xl font-semibold  pb-2 ">
            {data?.name}
          </h3>
          <div className="mb-2 flex space-x-4">
            <a target="_blank" href={data.link.link}>
              <p className=" bg-gray-700  p-2 md:p-4 text-lg tracking-wide  text-white hover:text-white hover:border-blue-600 rounded-full duration-300">
                {/* {title} */}
                <FaGlobe />
                {/* cuyy */}
              </p>
            </a>

            {data?.link?.github && (
              <a href={data.link.github} target="_blank">
                <p className=" bg-gray-700  p-2 md:p-4 text-lg tracking-wide  text-white hover:text-white hover:border-blue-600 rounded-full duration-300">
                  {/* {title} */}
                  <FaGithub />
                  {/* cuyy */}
                </p>
              </a>
            )}
          </div>
        </div>

        <div className="!mt-12">
          <Title text="About Project" icon={<FaProjectDiagram />} />
          <div className="text-lg tracking- flex flex-col ">
            {data?.description}
          </div>
        </div>

        <Stack skills={data?.skills as string[]} />
        <Features skills={data?.features as string[]} />
        {/* <ImgProject /> */}
      </div>
    </div>
  );
};

export default ProjectDetail;
