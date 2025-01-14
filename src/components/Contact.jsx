import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Resume/shannon-yazdani-resume.pdf";
AOS.init();

const Contact = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(formValues, e));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values, e) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "please enter your name";
    }
    if (!values.email) {
      errors.email = "please enter your email";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format";
    }
    if (!values.message) {
      errors.message = "please enter a message";
    }

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      //if no errors, submit the form
    } else {
      e.preventDefault();
    }
    return errors;
  };

  return (
    <>
      <div
        name="contact"
        className="w-full pb-20 md:flex bg-[#0a192f] flex flex-col justify-center items-center p-4"
      >
        <form
          onSubmit={handleSubmit}
          data-aos-duration="1000"
          data-aos="fade-up"
          method="POST"
          action="https://getform.io/f/5b7a8336-8523-4dd7-afd2-123ddb0263d5"
          className="flex justify-center flex-col max-w-[600px] w-full "
        >
          <div className="pb-8 mt-4  md:mt-0">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 pt-4 pb-0">
              If you're looking for someone who’s highly motivated and who
              enjoys being pushed creatively, let's chat! Submit the form below
              or shoot me an e-mail - shannonyazdani at gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p className="text-error mb-2 md:mb-4">{formErrors.name}</p>
          <input
            className=" p-2 bg-[#ccd6f6]"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="text-error mb-2 md:mb-4">{formErrors.email}</p>
          <textarea
            className="bg-[#ccd6f6] p-2 resize-none"
            name="message"
            rows="6"
            placeholder="Message"
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
          <p className="text-error">{formErrors.message}</p>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
          <div className="lg:hidden flex text-white pb-8">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shannonyazdani/"
              target="_blank"
              className="flex flex-col items-center w-full text-gray-300"
            >
              {" "}
              <FaLinkedinIn size={30} />
              LinkedIn
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/shan1y"
              className="flex flex-col items-center w-full text-gray-300"
            >
              {" "}
              <FaGithub size={30} /> GitHub
            </a>
            <button
              onClick={() =>
                (window.location = "mailto:shannonyazdani@gmail.com")
              }
              className="flex flex-col items-center w-full text-gray-300"
            >
              <HiOutlineMail size={30} />
              Email
            </button>
            <a
              className="flex flex-col items-center w-full text-gray-300"
              href={resume}
              download="shannon-yazdani-resume.pdf"
            >
              <BsFillPersonLinesFill size={30} />
              Resume
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
