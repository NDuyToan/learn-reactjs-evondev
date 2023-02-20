import React, { useState } from "react";
import useInputChange from "../../hooks/useInputChange";

const Form = () => {
  const { formValues, handleInputChange } = useInputChange({
    fullName: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formValues.fullName === "") {
      setNameError("your full name is empty");
    } else {
      setNameError("");
    }
  };
  console.log("form", formValues);
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullName"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="enter full name"
            onChange={handleInputChange}
          />
          {nameError}
        </div>
        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="enter email"
          onChange={handleInputChange}
        />
        {/* <input
          type="checkbox"
          name="hobby"
          id=""
          onChange={handleInputChange}
        /> */}
        <button type="submit" className="p-3 rounded text-white bg-blue-500">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
