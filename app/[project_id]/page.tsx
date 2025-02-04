"use client";
import Stack from "@/components/ProjectDetail/Stack";
import Title from "@/components/Title";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { dataProject } from "@/components/ProjectDetail/constant";
import { useParams } from "next/navigation";
import Features from "@/components/ProjectDetail/Features";
import ImgProject from "@/components/ProjectDetail/ImgProject";
const page = () => {
  const { project_id } = useParams();
  const data = dataProject.find((val) => val.id == Number(project_id));
  // https://www.heroui.com/images/hero-card-complete.jpeg
  return (
    <div className="w-full min-h-[100vh] pb-20 bg-gray-950 text-gray-300 px-4 ">
      <div className="max-w-screen-xl mx-auto pt-20 space-y-6   ">
        <div className="flex justify-between items-end border-b border-slate-700">
          <h3 className="text-5xl font-semibold  pb-2 ">{data?.name}</h3>
          <a
            href={data?.link.link}
            target="_blank"
            className="font-medium underline cursor-pointer text-xl"
          >
            {data?.link.str}
          </a>
        </div>

        <div className="!mt-12">
          <Title text="About Project" icon={<FaProjectDiagram />} />
          <div className="text-lg tracking- flex flex-col ">
            {data?.description}
          </div>
        </div>

        <Stack skills={data?.skills as string[]} />
        <Features skills={data?.features as string[]} />
        <ImgProject />
      </div>
    </div>
  );
};

export default page;
