"use client";
import { cn } from "@/utils/cn";
import staticEssentials from "../assets/essentialsEstate2-13-2024.png";
import staticHuff from "../assets/staticHuff.png";
import animatedHuff from "../assets/animatedHuff.gif";
import staticTraffic from "../assets/staticTraffic.png";
import animatedTraffic from "../assets/animatedTraffic.gif";
import imageNotFound from "../assets/image-not-found.jpg";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBuildingEstate,
  IconBinaryTree,
  IconTrafficCone,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Portfolio() {
  return (
    <div id="projects">
      <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center mt-20 mb-10">
        Projects
      </h1>
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            gif={item.gif}
            image={item.image}
            icon={item.icon}
            className={i === 0 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

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

const AnimatedSkeleton = ({
  image,
}: {
  image: string;
  className?: string;
}) => (
  Skeleton({ image, className:"object-contain" })
);

const items = [
  {
    title: "Essentials Estate",
    description:
      "Full stack web application designed to streamline tenant and owner rental interactions. It is built keeping in mind certain requirements and restrictions given by a Systems Analysis and Design class.",
    gif: (
      <AnimatedSkeleton
        image="https://github.com/bloopgoop/property-management/assets/104113781/5b0fe21f-a4dd-4696-9a3b-def43e4d13b9"
      />
    ),
    image: <Skeleton image={staticEssentials} />,
    icon: <IconBuildingEstate className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Huffman Algorithm",
    description: "Implementation of compression technique used to reduce the size of data files. Helps with storage and transferring files.",
    gif: <AnimatedSkeleton image={animatedHuff}/>,
    image: <Skeleton image={staticHuff} />,
    icon: <IconBinaryTree className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Traffic",
    description: "Used convolutional neural networks to distinguish between traffic signs.",
    gif: <AnimatedSkeleton image={animatedTraffic}/>,
    image: <Skeleton image={staticTraffic} />,
    icon: <IconTrafficCone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    image: <Skeleton image={imageNotFound}/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    image: <Skeleton image={imageNotFound}/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    image: <Skeleton image={imageNotFound}/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    image: <Skeleton image={imageNotFound}/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
