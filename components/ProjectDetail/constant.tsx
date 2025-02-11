export const dataProject = [
  {
    id: 1,
    name: "Learning Management System",
    img: "/img/projects/lms.png",
    short_description:
      "Learning Management System (LMS) designed to facilitate online learning with interactive and easy to use experience",
    link: {
      github: "https://github.com/fadhilrachman/lms-porto",
      link: "https://lms-porto.vercel.app",
    },
    description: (
      <p>
        Learning Management System (LMS) designed to facilitate online learning
        with interactive and easy to use experience. This application allows
        users to find, register, and take various courses according to their
        interests
      </p>
    ),
    skills: [
      "Javascript",
      "Typescript",
      "Next Js",
      "Tailwind",
      "Express Js",
      "MYSQL",
    ],
    features: [
      "Payment Gateway",
      "Authentication JWT",
      "Oauth Google",
      "OTP Verification",
      "Admin dashboard",
    ],
  },
  {
    id: 2,
    name: "REST API HRIS",
    img: "/img/projects/hris.png",
    short_description:
      "HRIS API is a nestjs -based backend designed to support the Human Resource Information System (HRIS) system",
    link: {
      github: "https://github.com/fadhilrachman/hris_backend",
      link: "https://hris-backend-kappa.vercel.app/swagger/operator",
    },
    description: (
      <p>
        HRIS API is a nestjs -based backend designed to support the Human
        Resource Information System (HRIS) system. This API provides various
        endpoints for managing employee data, attendance, leave, and processing
        process efficiently
      </p>
    ),
    skills: ["Nest Js", "Typescript", "Prisma", "MYSQL"],
    features: [
      "Multi Role Access",
      "Log Activity",
      "Integration Google Maps API",
      "Data Visualization Dashboard",
    ],
  },
  {
    id: 3,
    name: "Web Donation",
    img: "/img/projects/sijum.png",
    short_description:
      "  Donation Web is an online donation platform that makes it easy for users to provide transparent and efficient assistance",
    link: {
      github: "https://github.com/fadhilrachman/sijum",
      link: "https://sijum.vercel.app/",
    },
    description: (
      <p>
        Donation Web is an online donation platform that makes it easy for users
        to provide transparent and efficient assistance. This website is
        designed to connect donors with various social, charity and humanity
        programs.
      </p>
    ),
    skills: [
      "Javascript",
      "Typescript",
      "Next Js",
      "Tailwind",
      "Express Js",
      "MYSQL",
    ],
    features: ["Authentication JWT", "Admin dashboard", "Payment Gateway"],
  },
];
