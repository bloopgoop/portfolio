import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconEdit
} from "@tabler/icons-react";
import { motion } from "framer-motion";

function Platform({
  icon,
  href,
  name,
}: {
  icon: JSX.Element;
  href: string;
  name: string;
}) {
  return (
    <a
      href={href}
      className="p-5 rounded-full hover:text-green-400 text-lg flex items-center"
    >
      {icon}
      {name}
    </a>
  );
}

const contacts = [
  {
    icon: <IconBrandGithub className="w-8 h-8" />,
    href: "https://github.com/bloopgoop",
    name: "Github",
  },
  {
    icon: <IconBrandLinkedin className="w-8 h-8" />,
    href: "https://www.linkedin.com/in/kevin-zhu-8b1741238/",
    name: "LinkedIn",
  },
  {
    icon: <IconMail className="w-8 h-8" />,
    href: "mailto: zhu.kevin12@gmail.com",
    name: "zhu.kevin12@gmail.com"
  },
  {
    icon: <IconEdit className="w-8 h-8" />,
    href: "https://bloopgoop.github.io/docs/",
    name: "Blog"
  }
]

export function Contact() {
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
      className="h-full flex flex-row justify-center items-center"
    >
      <div
        className="flex flex-col items-center justify-center"
        id="contact"
      >
        {
          contacts.map((contact) => (
            <Platform {...contact} />
          ))
        }
      </div>
    </motion.div>
  );
}
