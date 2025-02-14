import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import resume from "../assets/Resume/shannon-yazdani-resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sidebarAnimaiton, setSidebarAnimation] = useState(" close-animation ");
  const [sidebarAnimaitonText, setSidebarAnimationText] = useState(
    " close-animation-text "
  );
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setSidebarAnimation(nav ? " close-animation " : " open-animation");
    setSidebarAnimationText(
      nav ? " close-animation-text " : " open-animation-text "
    );
    if (nav) {
      setTimeout(() => setNav(!nav), 300);
    } else {
      setNav(!nav);
    }
  };
  return (
    <div className="fixed z-10 w-full h-[65px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <a href="/">
          <img
            src={Logo}
            alt="Logo Image"
            style={{ height: "65px", transform: "translateX(-25px) " }}
          />
        </a>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            class="transition ease-in-out hover:text-[#DB2777]"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            class="transition ease-in-out hover:text-[#DB2777]"
            to="about"
            offset={-80}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            class="transition ease-in-out hover:text-[#DB2777]"
            to="skills"
            offset={-80}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link
            class="transition ease-in-out hover:text-[#DB2777]"
            to="featured"
            offset={-80}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            class="transition ease-in-out hover:text-[#DB2777]"
            to="work"
            offset={-80}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li> */}
        <li>
          <Link
            class="transition ease-in-out hover:text-[#DB2777]"
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className={isActive ? "active md:hidden" : "md:hidden"}>
        <div onClick={handleClick} className="hamburger  md:hidden z-10">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line2"></span>
        </div>
      </div>

      {/* Mobile menu */}
      {!nav ? null : (
        <ul
          className={
            "absolute top-16 right-0  h-screen bg-[#0a192f] flex text-center flex-col pt-12  items-start w-64" +
            sidebarAnimaiton
          }
        >
          <li className={"py-6 text-4xl w-full " + sidebarAnimaitonText}>
            <Link
              class="hover:text-[#DB2777]"
              onClick={handleClick}
              to="home"
              offset={-0}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>

          <li className={"py-6 text-4xl w-full " + sidebarAnimaitonText}>
            {" "}
            <Link
              class="hover:text-[#DB2777]"
              onClick={handleClick}
              to="about"
              offset={-80}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className={"py-6 text-4xl w-full " + sidebarAnimaitonText}>
            {" "}
            <Link
              class="hover:text-[#DB2777]"
              onClick={handleClick}
              to="skills"
              offset={-80}
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li className={"py-6 text-4xl w-full " + sidebarAnimaitonText}>
            {" "}
            <Link
              class="hover:text-[#DB2777]"
              onClick={handleClick}
              to="featured"
              offset={-70}
              smooth={true}
              duration={1000}
            >
              WIP
            </Link>
          </li>
          <li className={"py-6 text-4xl w-full " + sidebarAnimaitonText}>
            {" "}
            <Link
              class="hover:text-[#DB2777]"
              onClick={handleClick}
              to="work"
              offset={-70}
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className={"py-6 text-4xl w-full " + sidebarAnimaitonText}>
            {" "}
            <Link
              class="hover:text-[#DB2777]"
              onClick={handleClick}
              to="contact"
              offset={-30}
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}

 
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/shannonyazdani/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/shan1y"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <button
              onClick={() =>
                (window.location = "mailto:shannonyazdani@gmail.com")
              }
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={resume}
              download={"shannon-yazdani-resume.pdf"}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
