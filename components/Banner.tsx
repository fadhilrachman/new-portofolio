import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <div className=" text-center md:text-left">
          <h1 className="text-5xl font-bold text-white">Fadhil Rahman </h1>
          <small className="text-sm   w-full">
            ( muhfadhilrachman@gmail.com )
          </small>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-lg tracking-wide text-center md:text-left">
          Passionate and seasoned Software Engineer with{" "}
          <span className="font-bold underline text-blue-300">
            {" "}
            2 years of experience{" "}
          </span>{" "}
          in both frontend and backend development. Proficient in TypeScript and
          well-versed in all aspects of web technologies. Collaborative team
          player dedicated to delivering efficient, scalable, and visually
          appealing web applications.
        </p>
      </div>
    </div>
  );
};

export default Banner;
