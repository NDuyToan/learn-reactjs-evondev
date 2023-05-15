import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup
    .string()
    .required("Please enter this filed")
    .max(10, "Must be at most 10 characters"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting, isDirty, dirtyFields }, //isDirty: 1 trong cac truong da nhap thi true
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchShowAge = watch("showAge", false); // you can supply default value as second argument

  const onSubmit = (values) => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log("values", values);
    //   }, 2000);
    // });

    if (isValid) {
      console.log("send data");
      reset({
        firstName: "lala",
        lastName: "lili",
        email: "",
      });
    }
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
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors?.firstName?.message}
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
      <div className="flex  flex-col gap-2 mt-4">
        <label htmlFor="">
          <input type="checkbox" {...register("showAge")} className="" />
        </label>
        {watchShowAge && (
          <input
            type="number"
            name=""
            id=""
            className="rounded-md p-4 border border-gray-300"
            placeholder="enter your age"
          />
        )}
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full p-4 bg-blue-500 font-semibold text-white rounded-md"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
