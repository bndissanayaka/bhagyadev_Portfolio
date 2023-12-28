import React, { useRef } from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const form = useRef();
  const {
    register,
    handleSubmit,

    clearErrors,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    const serviceID = "service_lbaydpa";
    const templateID = "template_wwht3ir";
    emailjs
      .sendForm(serviceID, "YOUR_TEMPLATE_ID", form.current, templateID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="lv-contact-wrapper" ref={props.section4}>
      <div className="lv-skillsSec-title">
        <p className="flip_text2">Contact</p>
      </div>
      <div className="lv-contact-row2">
        Get in touch or shoot me an email directly on bndissanayaka@gmail.com
      </div>
      <div className="lv-contact-row3">
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="lv-contact-form"
          ref={form}
        >
          <label className="lv-contact-fieldLbl">Name </label> &nbsp;
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className="lv-contact-field"
            onInput={() => clearErrors("name")}
          />
          <div className="lv-details-errormsg">
            {errors?.name && errors.name.message}
          </div>
          <label className="lv-contact-fieldLbl">Email Address </label> &nbsp;
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Customer email required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
            placeholder="Enter your email address"
            className="lv-contact-field"
            onInput={() => clearErrors("email")}
          />
          <div className="lv-details-errormsg">
            {errors?.email && errors.email.message}
          </div>
          <label className="lv-contact-fieldLbl">Subject </label> &nbsp;
          <input
            type="text"
            name="subject"
            {...register("subject", { required: "Subject is required" })}
            placeholder="Enter your email subject"
            className="lv-contact-field"
            onInput={() => clearErrors("subject")}
          />
          <div className="lv-details-errormsg">
            {errors?.subject && errors.subject.message}
          </div>
          <label className="lv-contact-fieldLbl">Message</label> &nbsp;
          <textarea
            type="text"
            name="message"
            {...register("message", { required: "Message is required" })}
            placeholder="Enter your message"
            className="lv-contact-fieldarea"
            rows="4"
            cols="50"
            onInput={() => clearErrors("message")}
          />
          <div className="lv-details-errormsg">
            {errors?.message && errors.message.message}
          </div>
          <button type="submit" className="lv-contact-fieldSubmit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
