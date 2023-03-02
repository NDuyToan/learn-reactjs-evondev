const SignUpFormHook = () => {
  return (
    <form className="p-10 max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your first name"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your last name"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="rounded-md p-4 border border-gray-300"
          placeholder="Enter your email"
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
