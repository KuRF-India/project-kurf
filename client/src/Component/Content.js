import React from "react";

const Content = () => {
  return (
    <>
      {/* hero-content */}
      <section
        className="text-gray-600 body-font bg-hero-background bg-cover  "
        id="articles"
      >
        <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
              “SHINE THE NATION”
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="ml-2 mb-8 leading-relaxed lg:w-3/4">
              Kuki Research Forum is an intellectual group of Kukis` in India
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-8">
                Coming Soon
              </button>
            </div>
          </div>
          {/* <div className="lg:max-w-lg md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={idea}
              style={{ heihg: "150px" }}
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Content;
