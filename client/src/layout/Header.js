import React from "react";
import headerIcon from "./../assets/homeIcon.png";

const Header = () => {
  return (
    <header className=" body-font bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center ">
        <div>
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="#demo"
          >
            <img src={headerIcon} alt="" srcset="" width={"70px"} />
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
            <span className="ml-3 text-xl font-bold text-white">
              KuRF
              <br />
              <p className="text-xs font-normal">KUKI RESEARCH FORUM - INDIA</p>
            </span>
          </a>
        </div>
        <div className=" md:flex gap-2">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-left">
            <a className="mr-5 hover:text-gray-900" href="#objective">
              Objectives
            </a>

            <a className="mr-5 hover:text-gray-900" href="#about">
              About Us
            </a>
            <a className="mr-5 hover:text-gray-900" href="#footer">
              Info. Center
            </a>
          </nav>

          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-gray-800">
            Search
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
