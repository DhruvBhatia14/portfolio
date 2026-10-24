import React, { useState, useEffect } from "react";
import { contactLinks } from "../constants";
import emailjs from "emailjs-com";

const Contact = () => { 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    emailjs.init("04EFsw4NcgmFpidRR");
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();
    
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


  return (
    <div
      id="contact"
      className={
        "site-section pt-24 md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <p className="section-kicker text-center">Have a project in mind?</p>
        <h2 className="section-heading px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="section-kicker mt-12">
            Connect with me
          </h4>
          <p className="section-copy text-xl">
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
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="contact-input text-sm block w-full p-3"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="contact-input text-sm block w-full p-3"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="contact-input text-sm block p-3"
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
                <button className="accent-button text-white px-4 py-2 w-40" type="submit" onClick = {sendEmail}>
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
