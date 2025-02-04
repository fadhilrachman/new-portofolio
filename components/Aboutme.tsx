import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Hello, I am a Software Engineer, started studying programming in 2021
          and started my career in 2022, my daily activity is working as a
          Fulltime Fullstack Developer and also when I took a job part time
          Freelance Web Developer. I am very interested in the world of software
          development and committed to continuing to learn and develop in this
          field.
        </p>
        <p>
          I am a graduate of MERN fullstack Bootcamp (MongoDB, ExpressJS,
          ReactJS, and NodeJS) 4 months fullstack bootcamp at Eduwork.id. At
          Bootcamp this I learned a lot about the entire technology stack MERN,
          including MongoDB database, ExpressJS framework for the side
          development server, ReactJS framework for front-end development, and
          NodeJS runtime environment.
        </p>
        <p>
          With educational background and work experience, I have Strong
          expertise in MERN based web application development. I am ready to
          face new challenges and continue to improve my skills as a Software
          Engineer.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
