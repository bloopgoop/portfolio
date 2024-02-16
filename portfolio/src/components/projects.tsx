"use client";
import { cn } from "@/utils/cn";
import staticEssentials from "../assets/essentialsEstate2-13-2024.png";
import staticHuff from "../assets/staticHuff.png";
import animatedHuff from "../assets/animatedHuff.gif";
import staticTraffic from "../assets/staticTraffic.png";
import animatedTraffic from "../assets/animatedTraffic.gif";
import staticCommerce from "../assets/staticCommerce.png";
import animatedCommerce from "../assets/animatedCommerce.gif";
import staticNetwork from "../assets/staticNetwork.png";
import animatedNetwork from "../assets/animatedNetwork.gif";
import staticMushroomBot from "../assets/staticMushroomBot.png";
import animatedMushroomBot from "../assets/animatedMushroomBot.gif";
import staticUchewb from "../assets/staticUchewb.png";
import animatedUchewb from "../assets/animatedUchewb.gif";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconRobot,
  IconMoneybag,
  IconNetwork,
  IconBuildingEstate,
  IconBinaryTree,
  IconTrafficCone,
  IconMushroom,
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
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            link={item.link}
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

const AnimatedSkeleton = ({ image }: { image: string; className?: string }) =>
  Skeleton({ image, className: "object-contain" });

const items = [
  {
    title: "Essentials Estate",
    description:
      "Full stack web application designed to streamline tenant and owner rental interactions. It is built keeping in mind certain requirements and restrictions given by a Systems Analysis and Design class.",
    gif: (
      <AnimatedSkeleton image="https://github.com/bloopgoop/property-management/assets/104113781/5b0fe21f-a4dd-4696-9a3b-def43e4d13b9" />
    ),
    image: <Skeleton image={staticEssentials} />,
    icon: <IconBuildingEstate className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/bloopgoop/property-management"
  },
  {
    title: "Huffman Algorithm",
    description:
      "Implementation of compression technique used to reduce the size of data files. Helps with storage and transferring files.",
    gif: <AnimatedSkeleton image={animatedHuff} />,
    image: <Skeleton image={staticHuff} />,
    icon: <IconBinaryTree className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/bloopgoop/huffman"
  },
  {
    title: "Traffic",
    description:
      "Used convolutional neural networks to distinguish between traffic signs.",
    gif: <AnimatedSkeleton image={animatedTraffic} />,
    image: <Skeleton image={staticTraffic} />,
    icon: <IconTrafficCone className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/bloopgoop/CS50AI/tree/main/week5/traffic"
  },
  {
    title: "Mushroom Bot",
    description:
      "Implementation of machine learning algorithms to navigate through a game environment.",
    gif: <AnimatedSkeleton image={animatedMushroomBot} />,
    image: <Skeleton image={staticMushroomBot} />,
    icon: <IconMushroom className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/bloopgoop/mushroombot"
  },
  {
    title: "Network",
    description:
      "Full stack web application to simulate a social network.",
    gif: <AnimatedSkeleton image={animatedNetwork} />,
    image: <Skeleton image={staticNetwork} />,
    icon: <IconNetwork className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/bloopgoop/network"
  },
  {
    title: "Commerce",
    description:
      "Full stack web application to simulate an auctions site.",
    gif: <AnimatedSkeleton image={animatedCommerce} />,
    image: <Skeleton image={staticCommerce} />,
    icon: <IconMoneybag className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/bloopgoop/auctions"
  },
  {
    title: "Uchewb",
    description:
      "Discord bot to play youtube audio.",
    gif: <AnimatedSkeleton image={animatedUchewb} />,
    image: <Skeleton image={staticUchewb} />,
    icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/bloopgoop/ytbot"
  },
];
