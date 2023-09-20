import { useFormik } from "formik";

const SignUpForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Please enter this field";
    } else if (values.firstName?.length > 10) {
      errors.firstName = "Please enter less than 10 characters";
    }
    if (!values.lastName) {
      errors.lastName = "Please enter this field";
    } else if (values.lastName?.length > 10) {
      errors.lastName = "Please enter less than 10 characters";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-200"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.errors.firstName ? (
          <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-200"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.errors.lastName ? (
          <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div>
        <button
          className="w-full bg-blue-500 text-white font-semibold p-4 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
