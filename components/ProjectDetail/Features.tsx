import { GrTechnology } from "react-icons/gr";
import Title from "../Title";
import SkillsInput from "../SkillsInput";

const Features = ({ skills }: { skills: string[] }) => {
  return (
    <div className="">
      <Title text="System Highlights" icon={<GrTechnology />} />
      <div className="flex gap-4 flex-wrap">
        {skills.map((val, index) => {
          return <SkillsInput title={val} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Features;
