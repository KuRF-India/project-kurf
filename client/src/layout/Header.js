import React from "react";
import headerIcon from "./../assets/homeIcon.png";

const Header = () => {
  return (
    <header className=" body-font bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center ">
        <div>
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="#content"
          >
            <img src={headerIcon} alt="" width={"70px"} />

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
        </div>
      </div>
    </header>
  );
};

export default Header;
