import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  const jobs = [
    {
      value: "",
      label: "Select your job",
    },
    {
      value: "fe-dev",
      label: "FE Developer",
    },
    {
      value: "be-dev",
      label: "BE Developer",
    },
    {
      value: "tester",
      label: "Tester",
    },
  ];
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
        term: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions."
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 max-w-[500px] mx-auto">
        <MyInput
          name="firstName"
          id="firstName"
          label="First Name"
          placeholder="Enter your first name"
        />
        <MyInput
          name="lastName"
          id="lastName"
          label="Last Name"
          placeholder="Enter your last name"
        />
        <MyInput
          name="email"
          id="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />

        <MyTextarea
          name="intro"
          id="intro"
          label="Intro"
          placeholder="Introduce your self..."
          rows="5"
        />

        <MySelect name="job" id="job" label="Your job" options={jobs} />

        <MyCheckbox name="term" id="term">
          <p>I accept the terms and conditions</p>
        </MyCheckbox>

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
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="rounded-md p-4 border border-gray-300"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm">{meta.error}</div>
      )}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="rounded-md p-4 border border-gray-300 resize-none"
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm">{meta.error}</div>
      )}
    </div>
  );
};

const MySelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="rounded-md p-4 border border-gray-300"
        {...field}
        {...props}
      >
        {options.length > 0 &&
          options.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
      </select>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm">{meta.error}</div>
      )}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  console.log("🚀 ~ file: SignUpFormFinal.js:164 ~ MyCheckbox ~ field:", field);
  // console.log("🚀 ~ file: SignUpFormFinal.js:164 ~ MyCheckbox ~ meta:", meta);

  return (
    <div>
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm">{meta.error}</div>
      )}
    </div>
  );
};
