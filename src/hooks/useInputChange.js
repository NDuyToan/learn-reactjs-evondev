import { useState } from "react";

export default function useInputChange(initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const type = e.target.type;
    setFormValues({
      ...formValues,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return {
    formValues,
    handleInputChange,
  };
}
