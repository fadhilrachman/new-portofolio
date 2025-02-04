import { GiSkills } from "react-icons/gi";
import Title from "../Title";
import SkillsInput from "../SkillsInput";

const Stack = ({ skills }: { skills: string[] }) => {
  return (
    <div className="">
      <Title text="Stack" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        {skills.map((val, index) => {
          return <SkillsInput title={val} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Stack;
