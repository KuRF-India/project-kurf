import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto mb-7">
          <h2 className="text-2xl font-medium title-font text-gray-900  text-center pb-7">
            ARTICLES
          </h2>
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Afrida Hussain
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {" "}
                  May 31, 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  24 hours in Manipur: From gun snatching to threat calls to a
                  sleepless night
                </h2>
                <p className="leading-relaxed">
                  With multiple calls from various Meitei people, as well as
                  someone claiming to be a senior official, indirectly warned
                  about facing consequences for filing a report on a gunfight
                  between 37 Assam Rifles and Arambai militants.
                </p>
                <Link to={"/article"}>
                  <p className="text-indigo-500 inline-flex items-center mt-4">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 mt-1"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
