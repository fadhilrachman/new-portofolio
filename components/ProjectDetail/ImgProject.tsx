import React from "react";
import Title from "../Title";
import { GiSkills } from "react-icons/gi";
import BaseImg from "../base-image";

const ImgProject = () => {
  return (
    <div className="">
      <Title text="Image" icon={<GiSkills />} />
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
        <BaseImg
          alt="img"
          src={"https://www.heroui.com/images/hero-card-complete.jpeg"}
        />
        <BaseImg
          alt="img"
          src={"https://www.heroui.com/images/hero-card-complete.jpeg"}
        />
        <BaseImg
          alt="img"
          src={"https://www.heroui.com/images/hero-card-complete.jpeg"}
        />
        <BaseImg
          alt="img"
          src={"https://www.heroui.com/images/hero-card-complete.jpeg"}
        />
        {/* {skills.map((val, index) => {
        return <SkillsInput title={val} key={index} />;
      })} */}
      </div>
    </div>
  );
};

export default ImgProject;
