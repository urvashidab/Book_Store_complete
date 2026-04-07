import React from "react";
import img from "../assets/books.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 w-full">
      {/* left side */}
      <img
        src={img}
        alt="BooksPhoto"
        className="object-cover h-[70vh] w-full rounded hidden lg:block"
      />

      {/* right side */}
      <div className="flex flex-col gap-5 px-2 max-w-2xl lg:max-w-xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-semibold tracking-wider uppercase text-primaryText dark:text-darkText">
          About This Project
        </h2>

        <p className="text-mutedText text-lg dark:text-darkMuted leading-relaxed">
          This <span className="font-semibold">Book Store Manager</span> is a
          full-stack MERN application designed to demonstrate complete CRUD
          functionality. Users can easily add, edit, update, and delete book
          records through a clean and responsive interface.
        </p>

        <p className="text-mutedText text-lg dark:text-darkMuted leading-relaxed">
          The frontend is built using{" "}
          <span className="font-semibold">React</span> with{" "}
          <span className="font-semibold">Context API</span> for global state
          management, while the backend uses{" "}
          <span className="font-semibold">Node.js, Express, and MongoDB</span>{" "}
          to securely store and manage book data.
        </p>

        <p className="text-mutedText text-lg dark:text-darkMuted leading-relaxed">
          Additional features include{" "}
          <span className="font-semibold">dark mode support</span>,{" "}
          <span className="font-semibold">toast notifications</span> for user
          feedback, and <span className="font-semibold">form validation</span>{" "}
          to improve usability and overall user experience.
        </p>

        {/* contact section */}
        <div className="pt-4 border-t border-borderColor dark:border-darkBorder">
          <h3 className="text-xl font-medium text-primaryText dark:text-darkText mb-6 uppercase tracking-wider">
            Contact
          </h3>

          <div className="flex gap-8 flex-wrap">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-mutedText dark:text-darkMuted underline hover:text-primaryText dark:hover:text-darkText transition"
              href="mailto:urvashi.ucoe@gmail.com"
            >
              urvashi.ucoe@gmail.com
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className="text-mutedText dark:text-darkMuted tracking-wide hover:text-primaryText dark:hover:text-darkText transition"
              href="https://github.com/urvashidab"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
