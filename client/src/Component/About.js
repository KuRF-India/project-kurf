import React from "react";

const About = () => {
  return (
    <>
      <section className=" body-font bg-gray-800" id="about">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h2 className="text-gray-100 font-medium title-font tracking-wider text-2xl">
              ABOUT US
            </h2>
            <p className="text-gray-300 mb-4">Vision</p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Independent and not-for-profit organization, the Kuki Research
              Forum aims to promote and generate objective research,
              intellectual discussions and debates on issues concerning the
              Kuki.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
