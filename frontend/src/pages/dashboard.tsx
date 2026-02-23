import axios from "axios";
import UserLogo from "../components/userlogo";
import { useEffect, useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
type UserType = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
};
export default function Dashboard() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [balance, Setbalance] = useState(0);
  const [users, setUser] = useState<UserType[]>([]);
  const [filter, setFilter] = useState("");
  const [FirstName, setFirstName] = useState("User");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  //this is just an eg

  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  }, [token, navigate]);

  async function getbalance() {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/account/balance`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      Setbalance(response.data.Balance);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getbalance();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/v1/user/bulk?filter=${filter}`,
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          },
        );
        setUser(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [filter]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/user/username`, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setFirstName(response.data.firstName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);
  return (
    <div className="   mx-auto max-w-5xl  ">
      <div className="flex justify-between mt-6 bg-neutral-100 rounded-2xl ">
        <p className="text-2xl font-medium ml-4">Payment app</p>
        <div className="flex justify-center items-center gap-2 text-xl mr-4">
          <div>Hello,</div>
          <div>{FirstName}</div>
          <UserLogo />
        </div>
      </div>
      <hr className="mt-10 w-full" />
      <div className="text-xl font-medium mt-6 ml-4 flex gap-4">
        <h1>Your Balance :</h1> {balance && <p>{Number(balance).toFixed(2)}</p>}
      </div>
      <div className="text-xl font-medium mt-6 ml-4">
        <p>Users</p>
        <input
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search Users... "
          className=" w-full outline-none bg-gray-50 text-neutral-900  rounded-lg px-2 py-2 my-2 shadow-input"
        />
      </div>
      <div>
        {users?.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

function User({ user }: { user: UserType }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName?.[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful"></div>
      <Button
        label={"Send Money"}
        onClick={() => {
          navigate(`/send?id=${user._id}&name=${user.firstName}`);
        }}
      />
    </div>
  );
}
