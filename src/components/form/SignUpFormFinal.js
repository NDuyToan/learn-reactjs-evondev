import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        term: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Please enter this field"),
        lastName: Yup.string().required("Please enter this field"),
        email: Yup.string().email().required('"Please enter this field"'),
        intro: Yup.string().required("Please enter this field"),
        job: Yup.string().required("Please enter this field"),
        term: Yup.boolean(),
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

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-4 rounded-md border border-gray-200"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="email" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Intro</label>
          <Field
            name="intro"
            placeholder="Introduce your self..."
            className="p-4 rounded-md border border-gray-200 h-[150px] resize-none"
            as="textarea"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Select your job</label>
          <Field
            type="text"
            name="job"
            placeholder="Enter your job"
            className="p-4 rounded-md border border-gray-200"
            as="select"
          >
            <option value="frontend">Frontend developer</option>
            <option value="backend">Backend developer</option>
            <option value="tester">Tester</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job" />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <Field
            name="term"
            type="checkbox"
            className="p-4 rounded-md border border-gray-200"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="term" />
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

export default SignUpFormFinal;
