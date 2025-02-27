import React from "react";
import { useForm } from "react-hook-form";
import { FORM_FIELDS } from "../constants";
import axios from "axios";
import toast from "react-hot-toast";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (messageData) => {
    try {
      await axios.post("https://getform.io/f/bvrwydob", messageData);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  };

  const formFields = ({ id, label, name, placeholder, type }) => (
    <div className="flex flex-col mb-4" key={id}>
      <label htmlFor="name" className="block text-gray-800 mb-2 font-semibold">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="shadow appearance-none border bg-white border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight outline-none focus:outline-none focus:shadow-outline"
          {...register(name, { required: true })}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="shadow appearance-none border bg-white border-gray-400 rounded-lg py-2 pl-3 text-gray-700 leading-tight outline-none focus:outline-none focus:shadow-outline"
          {...register(name, { required: true })}
        />
      )}
      {errors[name] && <p>{name} is required.</p>}
    </div>
  );
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-5"> Contact Me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex justify-center items-center mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // action="https://getform.io/f/apjnpyea"
          // method="POST"
          className="bg-slate-200 p-10 rounded-lg w-100"
        >
          <h1 className="text-xl font-semibold mb-5">Send Your Message</h1>
          {/* Form Method */}

          {/* invisible field to trick spambots */}
          <input type="hidden" name="_gotcha" />
          {/* invisible field to trick spambots */}

          {FORM_FIELDS.map((field) => formFields(field))}
          <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-700 duration-300 cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
