import { useForm } from "react-hook-form";

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your first name"
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <div className="text-red-500 text-sm">Please fill out this field</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )}
        {}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your email"
          {...register("email")}
        />
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

export default SignUpFormHook;
