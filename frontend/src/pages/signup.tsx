import Button from "../components/button";
import ButtonWarning from "../components/buttonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/Input";
import SubHeading from "../components/SubHeading";

export default function Signup() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="rounded-lg bg-white w-100 p-2 h-max px-4 pt-9">
        <Heading label="Sign up" />
        <SubHeading label="Enter your information to create an account " />
        <InputBox label="First Name" placeholder="John the" type="text" />
        <InputBox label="Last Name" placeholder="Don" type="text" />
        <InputBox
          label="Email"
          placeholder="johnthedon@gmail.com"
          type="email"
        />
        <InputBox label="Password" placeholder="12345678" type="password" />
        <Button label="Signup" onClick={() => {}} />
        <ButtonWarning
          buttonText="Sign in"
          label="Already have an account? "
          to={"/signin"}
        />
      </div>
    </div>
  );
}
