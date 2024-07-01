import { cn } from "@/utils/cn";
import staticEssentials from "../assets/essentialsEstate2-13-2024.png";
import staticHuff from "../assets/staticHuff.png";
import animatedHuff from "../assets/animatedHuff.gif";
import staticNetwork from "../assets/staticNetwork.png";
import animatedNetwork from "../assets/animatedNetwork.gif";
import staticMushroomBot from "../assets/staticMushroomBot.png";
import animatedMushroomBot from "../assets/animatedMushroomBot.gif";
import simplify from "../assets/simplify.gif";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

const Skeleton = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src={image}
      alt="Skeleton"
      className={cn("w-full h-full object-cover rounded-xl", className)}
    />
  </div>
);

const AnimatedSkeleton = ({ image }: { image: string; className?: string }) =>
  Skeleton({ image, className: "object-contain" });

const items = [
  {
    title: "Simplify",
    description: "Desktop application that provides a fully offline music player experience. Allows users to listen to music, create playlists, and manage their music library without an internet connection.",
    gif: <AnimatedSkeleton image={simplify} />,
    image: <Skeleton image={simplify} />,
    link: "https://bloopgoop.github.io/docs/simplify/"
  },
  {
    title: "Essentials Estate",
    description:
      "Full stack web application designed to streamline tenant and owner rental interactions. Fulfills requirements given by a Systems Analysis and Design class.",
    gif: (
      <AnimatedSkeleton image="https://github.com/bloopgoop/property-management/assets/104113781/5b0fe21f-a4dd-4696-9a3b-def43e4d13b9" />
    ),
    image: <Skeleton image={staticEssentials} />,
    link: "https://bloopgoop.github.io/docs/essentials-estate/"
  },
  {
    title: "Mushroom Bot",
    description:
      "Implementation of machine learning algorithms to navigate through a game environment.",
    gif: <AnimatedSkeleton image={animatedMushroomBot} />,
    image: <Skeleton image={staticMushroomBot} />,
    link: "https://bloopgoop.github.io/docs/mushroom-bot/"
  },
  {
    title: "Huffman Algorithm",
    description:
      "Implementation of compression technique used to reduce the size of data files. Helps with storage and transferring files.",
    gif: <AnimatedSkeleton image={animatedHuff} />,
    image: <Skeleton image={staticHuff} />,
    link: "https://bloopgoop.github.io/docs/huffman/"
  },
  {
    title: "Network",
    description:
      "Full stack web application to simulate a social network.",
    gif: <AnimatedSkeleton image={animatedNetwork} />,
    image: <Skeleton image={staticNetwork} />,
    link: "https://bloopgoop.github.io/docs/network/"
  },
];

function Projects() {
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
    <div id="projects" className="h-3/4 lg:w-3/4 px-4 block box-border overflow-auto">
      <HoverEffect items={items} />
    </div>
  </motion.div>
  );
}


export { Projects }