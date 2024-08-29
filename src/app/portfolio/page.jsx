"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "UML Generator from C++ Code",
    desc: "Developed a tool for reverse engineering UML class diagrams from existing C++ code. It generates class diagrams with inheritances and associations.",
    img: "/UML.png",
    link: "https://github.com/abhinav-dholi/CppToUML",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "AI Access Management System",
    desc: "An AI-based access management IoT system that provides premises access to registered users with real-time identity detection.",
    img: "/IOT.jpeg",
    link: "https://github.com/abhinav-dholi/Access-Management-System",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "ICMP Smurf Attack",
    desc: "Executed a Smurf Attack to simulate a Denial-of-Service (DoS) scenario, highlighting network vulnerabilities.",
    img: "/smurf-attack.png",
    link: "https://github.com/abhinav-dholi/Smurf-Attack",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "MVC Image Manipulation Software",
    desc: "A Java app for advanced image editing, featuring histogram analysis, color correction, image compression, levels adjustment, filters like - blur, dithering, sepia, etc using optimized algorithms and scalable design practices. (code provided on request)",
    img: "/MVC.png",
    link: "#",
  },
  {
    id: 5,
    color: "from-red-300 to-orange-300",
    title: "TheDailyBlog",
    desc: "Developed a full-stack React blogging website using JavaScript, React, Node.js, and Postgres, ensuring robust functionality and seamless user experience.",
    img: "/blog.jpg",
    link: "https://client-red-psi.vercel.app/",
  },
  {
    id: 6,
    color: "from-orange-300 to-yellow-300",
    title: "Face PAD using Vision Transformer",
    desc: "Used Vision Transformers to detect presentation attacks in facial recognition systems, enhancing security by detecting fake images.",
    img: "/dummy.png",
    link: "https://github.com/abhinav-dholi/ViT_Face_PAD/blob/main/Research_Submission.pdf",
  },
  {
    id: 7,
    color: "from-yellow-300 to-green-300",
    title: "Steganography Analysis",
    desc: "Analyzed the efficiency of image steganography by varying the number of LSB bits used, optimizing techniques for secure data hiding.",
    img: "/dummy.png",
    link: "https://github.com/abhinav-dholi/SteganographyAnalysis",
  },
  {
    id: 8,
    color: "from-green-300 to-teal-300",
    title: "Patient Monitoring System",
    desc: "Created an IoT-based patient monitoring system using Arduino, enabling real-time health and location tracking.",
    img: "/dummy.png",
    link: "https://github.com/abhinav-dholi/Patient_Monitoring_System/tree/main",
  },
  {
    id: 9,
    color: "from-teal-300 to-blue-300",
    title: "ATS Tracking System using Google Gemini",
    desc: "Developed a resume summarizer and job matching system using NLP techniques, integrating Google’s generative AI model.",
    img: "/dummy.png",
    link: "https://github.com/abhinav-dholi/ATS-System-Gemini",
  },
  {
    id: 10,
    color: "from-blue-300 to-indigo-300",
    title: "CoolCoder",
    desc: "A collaborative coding tool using the MERN stack with real-time code synchronization and video conferencing features.",
    img: "/dummy.png",
    link: "https://github.com/abhinav-dholi/Cool-Coder",
  },
  {
    id: 11,
    color: "from-indigo-300 to-purple-300",
    title: "React Banking App using Redux",
    desc: "Developed a banking application using React and Redux, focusing on efficient state management and core banking functionalities.",
    img: "/dummy.png",
    link: "https://github.com/abhinav-dholi/BankingApp-Redux",
  },
  {
    id: 12,
    color: "from-purple-300 to-pink-300",
    title: "Advanced Blogging Website using Next.js 14",
    desc: "Built a blogging platform using Next.js 14 and MongoDB Atlas, featuring dynamic routing, secure authentication, and content management.",
    img: "/dummy.png",
    link: "https://github.com/abhinav-dholi/Advanced-Blogging-App-Next14",
  },
  {
    id: 13,
    color: "from-pink-300 to-red-300",
    title: "My Portfolio Website",
    desc: "Created a personal portfolio using Next.js 13 with advanced animations via Framer Motion, SMTP API integration, and Tailwind CSS.",
    img: "/dummy.png",
    link: "https://abhinavdholi.com/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-93%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[1200vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center">
          <h1 className="text-8xl">My Works</h1>
          {/* <Link href="/AbhinavDholi_Resume.pdf" download>
            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
            résumé
            </button>
          </Link> */}
          {/* SKILL SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center justify-center gap-8 text-white text-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Repo / Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Card for More Projects */}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-500">
              <div className="flex flex-col gap-8 text-white">
                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                  More Projects
                </h1>
                <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                  Explore more of my work on GitHub. From AI-driven projects to
                  full-stack web applications, see the diverse range of projects
                  I&apos;ve been working on.
                </p>
                <Link
                  href="https://github.com/abhinav-dholi"
                  target="_blank"
                  className="flex justify-end"
                >
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                    Visit My GitHub
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Summer&apos;25 or Full Time Opportunities
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
