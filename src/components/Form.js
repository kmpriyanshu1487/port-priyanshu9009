import "./FormStyle.css";
import { useRef } from "react";
import emailjs from "emailjs-com"; 
import React from "react";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3ux5ub", 
        "template_uhm6iwi", 
        form.current,
        "aKBx3O43fvy02q5qK" 
      )
      .then(
        (result) => {
          // console.log("SUCCESS!", result.text);
          alert("SUCCESS!", result.text);
        },
        (error) => {
          // console.log("FAILED...", error.text);
          alert("FAILED...", error.text);
        }
      );
    e.target.reset();
  };


  return (
    <div className="form">
      <form onSubmit={sendEmail} ref={form}> 
        <label>Your Name</label>
        <input type="text" name="user_name" />

        <label>Email</label>
        <input type="email" name="user_email" />

        <label>Subject</label>
        <input type="text" name="subject" /> 

        <label>Message</label>
        <textarea
          cols="30"
          rows="6"
          placeholder="Enter your message.."
          name="message"
        ></textarea>

        <button className="btn" type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;