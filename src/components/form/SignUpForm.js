import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Please enter this field")
        .max(10, "Please enter less than 10 characters"),
      lastName: Yup.string()
        .required("Please enter this field")
        .max(10, "Please enter less than 10 characters"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  console.log("🚀 ~ file: SignUpForm.js:28 ~ SignUpForm ~ formik:", formik);

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
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-200"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-200"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
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
