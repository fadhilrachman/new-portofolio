"use client";
import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/CV.pdf"; // Path ke file di folder public
    link.download = "CV_Fadhil.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
        <button
          onClick={() => {
            handleDownloadCV();
          }}
          className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300"
        >
          Download My CV
        </button>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/fadhilrachman" />
        {/* <SocialLink title="Youtube" link="https://www.youtube.com/@rendii_renaldii" /> */}
        {/* <SocialLink title="Instagram" link="https://www.instagram.com/rendii_renaldii" /> */}
        {/* <SocialLink title="Discord" link="https://discord.com/invite/M53VjNcJWX" /> */}
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/muhammad-fadhil-rahman-856096247/"
        />
        <SocialLink
          title="Gmail"
          link="mailto:muhfadhilrachman@gmail.com"
          // link="https://www.linkedin.com/in/muhammad-fadhil-rahman-856096247/"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-5 mt-4">
        <p>muhfadhilrachman@gmail.com</p>
        <p>+62881022077883</p>
      </div>
    </div>
  );
};

export default Contact;
