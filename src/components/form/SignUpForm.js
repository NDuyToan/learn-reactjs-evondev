import { useFormik } from "formik";
import * as Yup from "yup";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "Max 20 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }
  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string().max(20, "Max 20 characters").required("Required"),
      lastName: Yup.string().max(20, "Max 20 characters").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log("formik1122", formik);

  return (
    <form onSubmit={formik.handleSubmit} className="p-10 max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your first name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your last name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full p-4 bg-blue-500 font-semibold text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
