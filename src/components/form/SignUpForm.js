import { useState } from "react";
import useHandleChange from "./useHandleChange";

const SignUpForm = () => {
  const { values, handleInputChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: false,
  });
  console.log("values", values);

  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullName"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default SignUpForm;
