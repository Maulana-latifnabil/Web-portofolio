import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    vue,
    php,
    java,
    python,
    laravel,
    codeigniter,
    nodejs,
    tailwind,
    springboot,
    bootstrap,
    flutter,
    dart,
    mysql,
    postgresql,
    monggodb,
    mariadb,
    vscode,
    git,
    github,
    npm,
    postman,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={vue} title="Vue" alt="" />
        <img src={dart} title="Dart" alt="" />
        <img src={php} title="PHP" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={nodejs} title="Node.js" alt="" />
        <img src={codeigniter} title="CodeIgniter" alt="" />
        <img src={springboot} title="Springboot" alt="" />
        <img src={laravel} title="Laravel" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={flutter} title="Flutter" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Database
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Databases that I have studied
        </p>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={mysql} title="MySQL" alt="" />
        <img src={postgresql} title="PostgeSQL" alt="" />
        <img src={monggodb} title="MonggoDB" alt="" />
        <img src={mariadb} title="MariaDB" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">Tools that I have used</p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
