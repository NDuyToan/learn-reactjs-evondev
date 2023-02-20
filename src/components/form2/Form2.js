import React, { useState } from "react";

const Form2 = () => {
  const [formValues, setFormValues] = useState({
    phone: "",
    address: "",
  });
  const handleInputChange = (e) => {
    const type = e.target.type;
    setFormValues({
      ...formValues,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <div className="p-5">
      <h2>Form 2=========</h2>
      <div className="flex gap-x-3">
        <input
          type="number"
          name="phone"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="enter phone"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="enter address"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Form2;
