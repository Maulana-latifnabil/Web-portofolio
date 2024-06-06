import React from "react";
import Work from "../Components/Work";
import ImageUploader from "../Components/ImageUploader";

import {
  personalDetails,
  workDetails,
  eduDetails,
  eduOrganizational,
  eduInformation,
} from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section className="w-full">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 w-full">{personalDetails.about}</p>
      </section>

      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education Level
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Organizational and Commite Experience
        </h1>
        {React.Children.toArray(
          eduOrganizational.map(
            ({ Position, Company, Location, Type, Duration, Image }) => (
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                image={Image}
              />
            )
          )
        )}
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Additional Information
        </h1>
        <p className="text-content py-8 w-full border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-dark-heading dark:text-light-heading font-bold">
            Technical Skills:
          </h2>
          Have studied the programming languages HTML, CSS, JavaScript, PHP,
          Java, Dart and use the CodeIgniter, Tailwind, Laravel, Bootstrap,
          Springboot, React.js, Node.js, Vue.js and Flutter frameworks. Able to
          use MySQL, PostgreSQL, MongoDB and MariaDB databases.
        </p>
        <p className="text-content py-8 w-full border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-dark-heading dark:text-light-heading font-bold">
            Soft Skills:
          </h2>
          Time Management | Problem Solving | TeamWork | Communication | Public
          Speaking | Leadership | Information Analysis | Kreatif & Inovatif.
        </p>
        <p className="text-content py-8 w-full border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-dark-heading dark:text-light-heading font-bold">
            Languages:
          </h2>
          Indonesia(active) | English(passive).
        </p>
        <p className="text-content py-8 w-full border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-dark-heading dark:text-light-heading font-bold">
            Certification:
          </h2>
          Security Data Speaker | Community Service Program | Learn Web
          Programming Basics | Cloud Practitioner Essentials (Learn AWS Cloud
          Basics) | Learn JavaScript Programming Basics | Learn to Create a Web
          Front-End for Beginners | Learn to Create Back-End Applications for
          Beginners.
        </p>
        <p className="text-content py-8 w-full border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-dark-heading dark:text-light-heading font-bold">
            Interest:
          </h2>
          Frontend Developer | Backend Developer | Fullstack Developer |
          Software Engineer | Web Developer | Android Developer.
        </p>
        <p className="text-content py-8 w-full border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-dark-heading dark:text-light-heading font-bold">
            Hobby:
          </h2>
          Football | Futsal | Games.
        </p>
      </section>
    </main>
  );
}

export default About;
