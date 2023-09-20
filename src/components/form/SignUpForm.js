import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
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
