import { Formik, Form, Field, ErrorMessage, useField } from "formik";
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
        email: Yup.string().email().required("Please enter this field"),
        intro: Yup.string().required("Please enter this field"),
        job: Yup.string().required("Please enter this field"),
        term: Yup.boolean().oneOf([true], "Please select terms and conditions"),
      })}
      onSubmit={(values) => {
        console.log("values", values);
      }}
      autoComplete="off"
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <MyInput
          label="First Name"
          placeholder="Enter your first name"
          name="firstName"
          id="firstName"
        ></MyInput>
        <MyInput
          label="Last Name"
          placeholder="Enter your last name"
          name="lastName"
          id="lastName"
        ></MyInput>
        <MyInput
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
          id="email"
        ></MyInput>
        <MyTextArea
          label="Intro"
          placeholder="Introduce your self..."
          name="intro"
          id="intro"
        ></MyTextArea>

        <MySelect label="Select your job" name="job" id="job">
          <option value="frontend">Frontend developer</option>
          <option value="backend">Backend developer</option>
          <option value="tester">Tester</option>
        </MySelect>
        <MyCheckbox name="term">
          <p>I accept the terms and conditions</p>
        </MyCheckbox>

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

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-200"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <textarea
        className="p-4 rounded-md border border-gray-200 h-[150px] resize-none"
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-200"
        {...field}
        {...props}
      ></select>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex gap-2 items-center cursor-pointer">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
