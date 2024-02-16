export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[45rem]" id="about">
      <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center mt-20 mb-10">
        About
      </h1>
      <img
        src="https://avatars.githubusercontent.com/u/104113781?s=400&u=2e87a3bae3b068f0f53414bce84a5b14bb573b10&v=4"
        alt="Kevin Zhu"
        className="w-40 h-40 rounded-full mb-10"
      />
      <div className="flex flex-row sm:w-[40rem] sm:gap-40">
        <div>
          <h2 className="text-base sm:text-xl md:text-xl lg:text-2xl font-bold mb-5">
            Hi, I'm a developer
          </h2>
          <p>
            I am a software developer with experience in full-stack web
            development and AI. I am always looking for new opportunities to
            learn and grow.
          </p>
        </div>

        <div>
          <h2 className="text-base sm:text-xl md:text-xl lg:text-2xl font-bold mb-5">
            Skills
          </h2>

          <div className="grid grid-cols-4 col-span-10 gap-1 min-w-36">
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                width="36"
                height="36"
                alt="Git"
              />
            </a>

            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="36"
                height="36"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
              />
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                width="36"
                height="36"
                alt="Python"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                width="36"
                height="36"
                alt="React"
              />
            </a>

            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
                width="36"
                height="36"
                alt="PostgreSQL"
              />
            </a>
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"
                width="36"
                height="36"
                alt="Django"
              />
            </a>
            <a
              href="https://www.tensorflow.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg"
                width="36"
                height="36"
                alt="TensorFlow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
