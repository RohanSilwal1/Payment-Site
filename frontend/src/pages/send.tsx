import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Send() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name") || "";
  const [amount, setAmount] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  async function transfer() {
    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/account/transfer`,
        {
          to: id,
          amount: amount,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        },
      );
      setmessage(response.data.message);
      console.log(message);

      navigate("/dashboard");
    } catch (error: any) {
      if (error.response) {
        setmessage(error.response.data.message);
      } else {
        setmessage("Something went wrong");
      }
    }
  }
  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white w-md h-85 shadow-input shadow-xl border border-neutral-300">
        <h1 className="text-center text-3xl font-bold tracking-tight my-8">
          Send Money
        </h1>
        <div className="flex gap-5 items-center">
          <div className="ml-10 size-12 bg-green-500 rounded-full flex items-center justify-center text-neutral-50 ">
            <p className="mx-auto">{name[0].toUpperCase()}</p>
          </div>

          <h1 className="font-semibold text-2xl ">{name}</h1>
        </div>
        <div className="ml-10 mt-2 max-w-sm">
          <h1 className=" text-neutral-950 text-lg">Amount (in Rs)</h1>
          <input
            type="text"
            placeholder="Enter Amount"
            className="mt-3 p-2 w-full focus:outline-none shadow-input rounded-sm"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="bg-green-500 w-full mt-4 py-2 rounded-sm shadow-md text-white"
            onClick={() => {
              transfer();
            }}
          >
            {" "}
            Initiate Transfer
          </button>
          {message && (
            <p className="text-center mt-2 bg-green-600 w-fit mx-auto text-neutral-50 text-lg rounded-xl font-semibold transition-all duration-1000">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
