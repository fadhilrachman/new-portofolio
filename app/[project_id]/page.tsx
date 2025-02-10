"use client";
import Stack from "@/components/ProjectDetail/Stack";
import Title from "@/components/Title";
import React from "react";
import { FaChrome, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { dataProject } from "@/components/ProjectDetail/constant";
import { useParams } from "next/navigation";
import Features from "@/components/ProjectDetail/Features";
import ImgProject from "@/components/ProjectDetail/ImgProject";
import { GiGlobe } from "react-icons/gi";
const ProjectDetail = () => {
  const { project_id } = useParams();
  const data = dataProject.find((val) => val.id == Number(project_id));
  // https://www.heroui.com/images/hero-card-complete.jpeg
  return (
    <div className="w-full min-h-[100vh] pb-20 bg-gray-950 text-gray-300 px-4 ">
      <div className="max-w-screen-xl mx-auto pt-20 space-y-6   ">
        <div className="flex justify-between items-center border-b border-slate-700">
          <h3 className="text-5xl font-semibold  pb-2 ">{data?.name}</h3>
          <div className="mb-2 flex space-x-4">
            <a href={data.link.link} target="_blank">
              <p className="border border-blue-800 p-4 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-full duration-300">
                {/* {title} */}
                <FaChrome className="h-6 w-6" />
                {/* cuyy */}
              </p>
            </a>
            <a ref={data.link.github} target="_blank">
              <p className="border border-blue-800 p-4 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-full duration-300">
                {/* {title} */}
                <FaGithub className="h-6 w-6" />
                {/* cuyy */}
              </p>
            </a>
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
