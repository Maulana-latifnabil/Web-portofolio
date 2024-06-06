import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section py-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold transition duration-500 ease-in-out transform hover:scale-105">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-2xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6 transition duration-500 ease-in-out transform hover:scale-110">
        <a href={`mailto:${email}`} className="hover:text-blue-500">
          {email}
        </a>
      </h3>
      <span className="text-center text-content text-xl font-light block pt-4">
        or
      </span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6 transition duration-500 ease-in-out transform hover:scale-110">
        <a href={`tel:${phone}`} className="hover:text-green-500">
          {phone}
        </a>
      </h3>
    </main>
  );
}

export default Contact;
