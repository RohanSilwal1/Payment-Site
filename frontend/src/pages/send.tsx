import logo from "../assets/user-icon.svg"
export default function Send() {
  return (
      <div className="h-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white w-md h-80 shadow-input shadow-xl border border-neutral-300">
          <h1 className="text-center text-3xl font-bold tracking-tight my-8">Send Money</h1>

          
          <div className="flex gap-5 items-center">
          <div className="ml-10 size-12 bg-green-500 rounded-full ">
            </div>
            <h1 className="font-semibold text-2xl ">Friend's Name</h1>
          </div>
          <div className="ml-10 mt-2 max-w-sm">

          <h1 className=" text-neutral-950 text-lg">Amount (in Rs)</h1>
          <input type="text" placeholder="Enter Amount" className="mt-3 p-2 w-full focus:outline-none shadow-input rounded-sm" />
          <button className="bg-green-500 w-full mt-4 py-2 rounded-sm shadow-md text-white"> Initiate Transfer</button>
          </div>
        </div>
      </div>
  );
}
