import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      fullname: data.fullname,
      email: data.email,
      phoneno: data.phoneno,
      message: data.message,
    };
    try {
      const res = await axios.post("http://localhost:4001/api/contects", contactInfo);
      console.log(res.data);
      toast.success("message submitted successfully");
    } catch (err) {
      console.log(err);
      const errorMessage = err.response && err.response.data && err.response.data.message 
        ? err.response.data.message 
        : "An unexpected error occurred";
      toast.error("Error: " + errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="flex flex-col bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl p-5">
        <div className="flex items-center justify-between bg-gray-700 p-4 rounded-t-xl">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-10 space-y-10 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-pink-600 text-2xl font-bold uppercase">Contact</h1>
            <h1 className="text-pink-600 text-2xl font-bold uppercase">Us</h1>
            <div className="mt-auto text-xs text-gray-400">CONTACT INFO: +91 9313352882</div>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <input {...register("fullname", { required: true })} className="w-full p-3 bg-transparent border-b border-gray-500 text-gray-300 placeholder-gray-500 focus:border-gray-300 outline-none" placeholder="NAME" />
                {errors.fullname && <p className="text-red-500">This field is required</p>}
                <input {...register("email", { required: true })} className="w-full p-3 bg-transparent border-b border-gray-500 text-gray-300 placeholder-gray-500 focus:border-gray-300 outline-none" placeholder="EMAIL" />
                {errors.email && <p className="text-red-500">This field is required</p>}
                <input {...register("phoneno", { required: true })} className="w-full p-3 bg-transparent border-b border-gray-500 text-gray-300 placeholder-gray-500 focus:border-gray-300 outline-none" placeholder="CONTACT NO" />
                {errors.phoneno && <p className="text-red-500">This field is required</p>}
                <input {...register("message", { required: true })} className="w-full p-3 bg-transparent border-b border-gray-500 text-gray-300 placeholder-gray-500 focus:border-gray-300 outline-none" placeholder="MESSAGE" />
                {errors.message && <p className="text-red-500">This field is required</p>}
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <button type="button" className="text-pink-600 hover:text-pink-500 transition">CANCEL</button>
                <button type="submit" className="text-pink-600 hover:text-pink-500 transition">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
