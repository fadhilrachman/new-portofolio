import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const data = [
    {
      title: "Frontend Developer ",
      date: "March 2022 - August 2022",
      company: "Sagara Technology - Fulltime",
      jobdesk: [
        " - Integration of backend APIs into React JS web applications",
        " - Implement the slicing design provided by the team UI/UX uses the ANT Design CSS framework and Bootstrap",
        "- Used SASS to achieve responsive Leverage React-Hook-Form for efficient form handling and validation",
        "- Process data from the backend using state management Redux-saga",
      ],
    },
    {
      title: "Fullstack Developer  ",
      date: "July 2023 - August 2024",
      company: "Bahawan Integrasi Nusantara - Fulltime",
      jobdesk: [
        " - Created interactive websites using React/Next JS Typescript with the Chakra UI CSS framework and Tailwind CSS",
        " - Created a REST API using Express/Next JS",
        "- Tidyed up some dirty code to clean code",
        "- Created API speck on postman before create API",
      ],
    },
    {
      title: "Frontend Developer   ",
      date: "August 2024 - Present",
      company: "Arnatech - Partime",
      jobdesk: [
        " - Maintenance existed website used Next JS",
        " - Used ANTD for framework CSS",
        "- Tidyed up some dirty code to clean code",
        "- Process data from the backend using state management Zustand",
      ],
    },
  ];
  return (
    <div className="wrapper">
      <Title text="Work Experiences" icon={<MdWork />} />
      <div className="space-y-4">
        {data.map((val, i) => {
          return (
            <div className="flex space-x-4" key={i}>
              <div className="rounded-full w-12 h-12 border flex justify-center items-center border-blue-600">
                <MdWork className="text-2xl " />
              </div>
              <div className="py-2 space-y-2 text-lg">
                <h3 className="text-xl">{val.title}</h3>
                <div className="text-slate-400">
                  <h4>{val.company}</h4>
                  <h4 className="text-white">{val.date}</h4>
                </div>
                <ol className="list-none text-slate-300 font-light space-y-2">
                  {val.jobdesk.map((valJob, iJob) => (
                    <li key={iJob}>{valJob}</li>
                  ))}
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
