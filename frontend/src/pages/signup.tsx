import { useEffect, useState } from "react";
import Button from "../components/button";
import ButtonWarning from "../components/buttonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/Input";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  //this is just an eg
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  async function signup() {
    setmessage("");
    try {
      const response = await axios.post(`${backendUrl}/api/v1/user/signup`, {
        firstName: firstName,
        lastName: lastName,
        username: email,
        password: password,
      });
      setmessage("Signup successful!");
      navigate("/signin");
    } catch (error: any) {
      if (error.response) {
        setmessage(error.response.data.message || "Signup Failed");
      } else {
        setmessage("Server not reachable");
      }
    }
  }

  return (
    <div className="h-screen flex justify-center ">
      <div className="rounded-lg bg-white w-100 p-2 h-max px-4 pt-9">
        <Heading label="Sign up" />
        <SubHeading label="Enter your information to create an account " />
        <InputBox
          label="First Name"
          placeholder="John the"
          type="text"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <InputBox
          label="Last Name"
          placeholder="Don"
          type="text"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <InputBox
          label="Email"
          placeholder="johnthedon@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <InputBox
          label="Password"
          placeholder="12345678"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button
          label="Signup"
          onClick={() => {
            signup();
          }}
        />
        <div className="text-center bg-red-400 rounded-2xl text-neutral-950 font-semibold">
          {message && <p>{message}</p>}
        </div>

        <ButtonWarning
          buttonText="Sign in"
          label="Already have an account? "
          to={"/signin"}
        />
      </div>
    </div>
  );
}
