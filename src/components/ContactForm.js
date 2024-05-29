import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (formData) => {
    emailjs
      .sendForm(
        "service_r65pc3a",
        "template_a81jljc",
        form.current,
        "tY7vYLy69LFAIduyZ"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Mesajul tău a fost trimis");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Eroare la trimiterea mesajului");
        }
      );
  };

  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <div className='relative'>
      <form
        ref={form}
        className='flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md h-1/2 justify-center'
        onSubmit={handleSubmit(onSubmit)}>
        <label className='w-full max-w-md'>
          <div className='border border-gray-200 rounded-lg flex items-center gap-2 p-2'>
            <input
              type='text'
              className='grow p-2 rounded-lg'
              placeholder='Numele tău'
              {...register("from_name", { required: true })}
            />
          </div>
          {errors.from_name && (
            <span className='text-red-500 text-sm'>This field is required</span>
          )}
        </label>

        <label className='w-full max-w-md'>
          <div className='border border-gray-200 rounded-lg flex items-center gap-2 p-2'>
            <input
              type='email'
              className='grow p-2 rounded-lg'
              placeholder='Emailul tău'
              {...register("from_email", { required: true })}
            />
          </div>
          {errors.from_email && (
            <span className='text-red-500 text-sm'>This field is required</span>
          )}
        </label>

        <label className='w-full max-w-md'>
          <div className='border border-gray-200 rounded-lg p-2'>
            <textarea
              className='w-full p-2 h-32 resize-none rounded-lg'
              placeholder='Mesajul tău'
              {...register("message", { required: true })}></textarea>
          </div>
          {errors.message && (
            <span className='text-red-500 text-sm'>This field is required</span>
          )}
        </label>

        <button
          type='submit'
          className='btn btn-primary bg-yellow-200 border-none mt-4'>
          Trimite
        </button>
      </form>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
};

export default ContactForm;
