import Button from "../components/button";
import ButtonWarning from "../components/buttonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/Input";
import SubHeading from "../components/SubHeading";

export default function SignIn() {

    return <div className="h-screen flex justify-center ">

        <div className="rounded-lg bg-white w-100 p-2 h-max px-4 pt-16">
            <Heading label="Sign In" />
            <SubHeading label="Enter your credentials to access your account " />
            <div className="mt-2">
            <InputBox label="Email" placeholder="johnthedon@gmail.com" />
            </div>
            <div className="mt-2 pb-2">
            <InputBox label="Password" placeholder="12345678" />
            </div>
            <Button label="Signup" onClick={() => { }} />
            <ButtonWarning buttonText="Sign up" label="Don't have an account? " to={"/Sign up"} />

        </div>

    </div>
}