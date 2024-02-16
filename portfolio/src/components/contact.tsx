import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Contact() {
  return (
    <div
      className="flex flex-row items-center justify-center h-[40rem]"
      id="contact"
    >
      <a href="https://github.com/bloopgoop" className="p-5 rounded-full hover:bg-green-100 flex items-center">
        <IconBrandGithub className="w-8 h-8" />
        Github
      </a>
      <a href="https://www.linkedin.com/in/kevin-zhu-8b1741238/" className="p-5 rounded-full hover:bg-green-100 flex items-center">
        <IconBrandLinkedin className="w-8 h-8" />
        LinkedIn
      </a>
      <a href="mailto: zhu.kevin12@gmail.com" className="p-5 rounded-full hover:bg-green-100 flex items-center">
        <IconMail className="w-8 h-8" />
        zhu.kevin12@gmail.com
      </a>
    </div>
  );
}