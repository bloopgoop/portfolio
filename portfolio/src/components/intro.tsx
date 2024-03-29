"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "Kevin",
    },
    {
      text: "Zhu",
    },
    {
      text: "/",
    },
    {
      text: "bloopgoop",
      className: "text-green-500 dark:text-green-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[45rem] " id="intro">
      <TypewriterEffect words={words} />
      <div>

        Software Developer
      </div>
    </div>
  );
}
