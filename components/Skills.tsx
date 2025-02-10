import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput title="Tailwind" />
        <SkillsInput title="Reactjs" />
        <SkillsInput title="VueJs" />
        <SkillsInput title="Nextjs" />
        <SkillsInput title="NestJs" />
        <SkillsInput title="Nodejs" />
        <SkillsInput title="ExpressJs" />

        <SkillsInput
          title="Laravel"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="MYSQL" />
        <SkillsInput title="MongoDb" />
        <SkillsInput title="Git" />
        <SkillsInput title="Github" />
        {/* <SkillsInput title="Brand & LogoDesign" link="https://dribbble.com/" /> */}
        {/* <SkillsInput title="Website Design" link="https://themeforest.net/" /> */}
        {/* <SkillsInput title="Vercel" link="https://vercel.com/" /> */}
      </div>
    </div>
  );
};

export default Skills;
