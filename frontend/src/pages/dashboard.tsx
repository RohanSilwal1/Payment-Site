import UserLogo from "../components/userlogo";

export default function Dashboard() {
  return (
    <div className="   mx-auto max-w-5xl  ">
      <div className="flex justify-between mt-6 bg-neutral-100 rounded-2xl ">
        <p className="text-2xl font-medium ml-4">Payment app</p>
        <div className="flex justify-center items-center gap-2 text-xl mr-4">
          <div>Hello,</div>
          <div>User</div>
          <UserLogo />
        </div>
      </div>
      <hr className="mt-10 w-full" />
      <div className="text-xl font-medium mt-6 ml-4">
        <h1>Your Balance</h1>
      </div>
      <div className="text-xl font-medium mt-6 ml-4">
        <p>Users</p>
        <input
          placeholder="Search Users... "
          className=" w-full outline-none bg-gray-50 text-neutral-900  rounded-lg px-2 py-2 my-2 shadow-input"
        />
      </div>
    </div>
  );
}
