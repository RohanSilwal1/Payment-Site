import UserLogo from "../components/userlogo";

export default function Dashboard() {
  return (
    <div className="   mx-auto max-w-5xl  ">
      <div className="flex justify-between mt-6 bg-neutral-100 rounded-2xl">
        <p className="text-2xl font-medium ml-4">Payment app</p>
        <div className="flex justify-center items-center gap-2 text-xl mr-4">
          <div>Hello,</div>
          <div>User</div>
          <UserLogo />
        </div>
      </div>
        <hr className="mt-10 w-full"/>
      <div className="text-xl font-medium mt-6 ml-4">
        <h1 >Your Balance</h1>
      </div>
      <div className="text-xl font-medium mt-6 ml-4">
        <p>Users</p>
        <input placeholder="Search Users... " className="mt-4 border rounded-sm border-neutral-300 px-3 w-full border-b-2 border-b-neutral-500"/>
      </div>
    </div>
  );
}
