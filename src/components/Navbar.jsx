import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import resume from "../assets/Resume/shannon-yazdani-resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
            class="hover:text-[#DB2777]"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            class="hover:text-[#DB2777]"
            to="about"
            offset={0}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            class="hover:text-[#DB2777]"
            to="skills"
            offset={0}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            class="hover:text-[#DB2777]"
            to="work"
            offset={0}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            class="hover:text-[#DB2777]"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            class="hover:text-[#DB2777]"
            onClick={handleClick}
            to="home"
            offset={-0}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            class="hover:text-[#DB2777]"
            onClick={handleClick}
            to="about"
            offset={-80}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            class="hover:text-[#DB2777]"
            onClick={handleClick}
            to="skills"
            offset={-80}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            class="hover:text-[#DB2777]"
            onClick={handleClick}
            to="work"
            offset={-70}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            class="hover:text-[#DB2777]"
            onClick={handleClick}
            to="contact"
            offset={-30}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
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
