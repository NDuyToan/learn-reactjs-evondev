import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Max 20 characters")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Max 20 characters")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            name="firstName"
            className="rounded-md p-4 border border-gray-300"
            placeholder="Enter your first name"
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="firstName" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            name="lastName"
            className="rounded-md p-4 border border-gray-300"
            placeholder="Enter your last name"
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="lastName" className="text-red-500 text-sm" />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 font-semibold text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
