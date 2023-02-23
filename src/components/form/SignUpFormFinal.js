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
        firstName: Yup.string()
          .max(20, "Max 20 characters")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Max 20 characters")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        term: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 max-w-[500px] mx-auto">
        <MyInput
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
        />
        {/* <div className="flex flex-col gap-2">
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
        </div> */}
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
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            className="rounded-md p-4 border border-gray-300"
            placeholder="Enter your email"
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="email" className="text-red-500 text-sm" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="intro">Intro</label>
          <Field
            as="textarea"
            rows="5"
            name="intro"
            className="rounded-md p-4 border border-gray-300"
            placeholder="Introduce your self..."
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="intro" className="text-red-500 text-sm" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="job">Your job</label>
          <Field
            name="color"
            component="select"
            className="rounded-md p-4 border border-gray-300"
          >
            <option value="">Select your job</option>
            <option value="dev">Developer</option>
            <option value="teacher">Teacher</option>
            <option value="tester">Tester</option>
          </Field>
          <div className="text-red-500 text-sm">
            <ErrorMessage name="intro" className="text-red-500 text-sm" />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Field type="checkbox" name="term" />
          <p> I accept the terms and conditions</p>

          <div className="text-red-500 text-sm">
            <ErrorMessage name="intro" className="text-red-500 text-sm" />
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

export default SignUpFormFinal;

const MyInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="rounded-md p-4 border border-gray-300"
        {...props}
      />
      <div className="text-red-500 text-sm">
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
};
