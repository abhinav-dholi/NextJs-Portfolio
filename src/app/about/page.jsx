"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/about.jpeg"
              alt="Abhinav Dholi"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I am Abhinav Dholi, a dynamic and inquisitive Software Development Engineer 
              with a strong foundation in computational design principles. My expertise lies 
              in Full Stack Development, Cloud and Container technologies, and Machine Learning. 
              I am passionate about leveraging technology to solve complex problems and create 
              innovative solutions. With a background in Product Management and Agile methodologies, 
              I bring a holistic approach to development that combines technical excellence with strategic vision.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            &quot;Innovation distinguishes between a leader and a follower.&quot; – Steve Jobs
            </span>
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
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {/* List of skills */}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript/TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Docker
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Kubernetes
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS & Azure
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tensorflow
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Pytorch
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                huggingface_hub
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                OpenAI
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Gemini
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Amazon Bedrock
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Product Management
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Agile Methodologies
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Strategic Negotiation
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg.white hover:text-black">
                Time and Resource Management
              </div>
            </motion.div>
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
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Product and GenAI Research Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm hidden sm:block">
                    <ul className="list-disc list-inside">
                      <li>Revamped project management processes, saving $120,000 annually.</li>
                      <li>Conducted market surveys and interviews for new revenue streams.</li>
                      <li>Collaborated with Analytics team to implement generative AI solutions in chronic disease management.</li>
                      <li>Processed 130,000 hours of call transcripts for sentiment analysis.</li>
                    </ul>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jun 2024 - Dec 2024 (expected)
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AMC Health, New York, NY, USA
                  </div>
                  {/* LOGO */}
                  <Image
                    src="amc_health.png" // Replace with actual path to AMC logo
                    alt="AMC Logo"
                    width={80}
                    height={40}
                    className="mt-4"
                  />
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Research Assistant
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm hidden sm:block">
                    <ul className="list-disc list-inside">
                      <li>Developed a Presentation Attack Detection (PAD) system for face spoofing attacks using Vision Transformers.</li>
                      <li>Performed rigorous error evaluations, demonstrating the model&apos;s superiority over state-of-the-art methodologies.</li>
                    </ul>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2022 - Jul 2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Indian Institute of Technology, Indore, MP, India
                  </div>
                  {/* LOGO */}
                  <Image
                    src="/IIT.png" // Replace with actual path to IIT logo
                    alt="IIT Logo"
                    width={80}
                    height={40}
                    className="mt-4"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          {/* EDUCATION CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={educationRef}
          >
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* EDUCATION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    MS in Computer Science
                  </div>
                  {/* EDUCATION DESC */}
                  <div className="p-3 text-sm">
                    <ul className="list-disc list-inside">
                      <li>Programming Design Paradigm</li>
                      <li>Database Management System</li>
                      <li>Algorithms</li>
                      <li>Web Development</li>
                    </ul>
                  </div>
                  {/* EDUCATION DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Sep 2023 - Dec 2025 (expected)
                  </div>
                  {/* EDUCATION SCHOOL */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Northeastern University, Boston, MA, USA
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* EDUCATION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    BTech in Computer Science
                  </div>
                  {/* EDUCATION DESC */}
                  <div className="p-3 text-sm">
                    <ul className="list-disc list-inside">
                      <li>Operating Systems</li>
                      <li>Object Oriented Programming</li>
                      <li>Machine Learning</li>
                      <li>Computer Architecture</li>
                    </ul>
                  </div>
                  {/* EDUCATION DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2023
                  </div>
                  {/* EDUCATION SCHOOL */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Vellore Institute of Technology, Vellore, TN, India
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
