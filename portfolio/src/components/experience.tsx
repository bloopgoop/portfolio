import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";

function Block({
  role,
  company,
  link,
  date,
  items,
}: {
  role: string;
  company: string;
  link: string;
  date: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col mb-4 border-2 p-4 rounded">
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">
        {role} at{" "}
        <Highlight className="text-black dark:text-white">
          <a href={link} target="_blank" rel="noreferrer" className="underline">
            {company}
          </a>
        </Highlight>
      </h1>
      <div>
        <div className="text-base sm:text-md md:text-lg lg:text-xl italic mb-2">
          {date}
        </div>
        <ul className="list-disc list-inside">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const experiences = [
  {
    role: "Full Stack Engineering Intern",
    company: "DAuth Network",
    link: "https://www.dauth.network/",
    date: "Feb. 2024 - Present",
    items: [
      "Developed and maintained features across the front-end, back-end, and database of the DAuth Network platform.",
      "Participated in Agile development cycles and sprints to maintain high code quality and deliver features on time.",
      "Integrated third-party APIs to enhance the platform's functionality and user experience.",
    ],
  },
  {
    role: "Computer Information Systems Degree and Computer Science Minor",
    company: "Baruch College",
    link: "https://www.baruch.cuny.edu/",
    date: "Aug. 2020 - Aug. 2024",
    items: [
      "Completed courses in Data Structures & Algorithms, Systems Analysis and Design, Computer Networking, Cybersecurity, and Object-Oriented Programming.",
      "Participated in hackathons and coding competitions to apply theoretical knowledge to real-world problems.",
    ],
  },
];

export function Experience() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="h-full flex flex-row items-center"
    >
      <div className="flex flex-col px-4 overflow-auto" id="about">
        {experiences.map((experience) => (
          <>
            <Block {...experience} />
            <br></br>
          </>
        ))}
      </div>
    </motion.div>
  );
}
