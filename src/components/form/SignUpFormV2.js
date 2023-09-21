import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Please enter this field")
          .max(10, "Please enter less than 10 characters"),
        lastName: Yup.string()
          .required("Please enter this field")
          .max(10, "Please enter less than 10 characters"),
      })}
      onSubmit={(values) => {
        console.log("values", values);
      }}
      autoComplete="off"
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">First Name</label>

          <Field
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-200"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-200"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName" />
          </div>
        </div>
        <div>
          <button
            className="w-full bg-blue-500 text-white font-semibold p-4 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
