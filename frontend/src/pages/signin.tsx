import { useState } from "react";
import Button from "../components/button";
import ButtonWarning from "../components/buttonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/Input";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

  async function signin(): Promise<void> {
    setmessage("");
    try {
      const response = await axios.post(`${backendUrl}/api/v1/user/signin`, {
        username: email,
        password: password,
      });
      let token = response.data.token;
      if (token.startsWith("Bearer ")) {
        token = token.substring(7);
      }
      localStorage.setItem("token", token);
      setmessage("Signin successful!");
      navigate("/dashboard")
    } catch (error: any) {
      if (error.response) {
        setmessage(error.response.data.message || "Signin Failed");
      } else {
        setmessage("Server not reachable");
      }
    }
  }

  return (
    <div className="h-screen flex justify-center ">
      <div className="rounded-lg bg-white w-100 p-2 h-max px-4 pt-16">
        <Heading label="Sign In" />
        <SubHeading label="Enter your credentials to access your account " />
        <div className="mt-2">
          <InputBox
            label="Email"
            placeholder="johnthedon@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2 pb-2">
          <InputBox
            label="Password"
            placeholder="12345678"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="text-center bg-red-400 rounded-2xl text-neutral-950 font-semibold">
          {message && <p>{message}</p>}
        </div>
        <Button
          label="Signup"
          onClick={() => {
            signin();
          }}
        />
        <ButtonWarning
          buttonText="Sign up"
          label="Don't have an account? "
          to={"/dashboard"}
        />
      </div>
    </div>
  );
}
