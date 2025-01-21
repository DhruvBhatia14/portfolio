import React, { useContext, useState, useEffect } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import emailjs from "emailjs-com";

const Contact = () => { 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    // Initialize EmailJS when the component mounts
    emailjs.init("04EFsw4NcgmFpidRR"); // Your public key
  }, []);

  const sendEmail = (event) => {
    event.preventDefault(); // Prevent default form submission
    
    emailjs
      .send("service_h4dca9g", "template_g9ala9m", {
        name: name,
        email: email,
        message: message,
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Form Submitted Successfully");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Form Submission Failed! Try Again");
        }
      );
  };


  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form id="contact-form">
              <div class="my-6">
                <label
                  for="name"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between ">
                {/* <div className="underline">
                  <a href="mailto:dbhatia2@ualberta.ca">
                    Send me email directly
                  </a>
                </div> */}
                <br></br>
                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400" type="submit" onClick = {sendEmail}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            {/* <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 8285631499
            </a> */}
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              dbhatia2@ualberta.ca
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="hello"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              Edmonton, Alberta
              <br />
              Canada
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
