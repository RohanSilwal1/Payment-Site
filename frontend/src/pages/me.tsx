import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Me() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  }, [token, navigate]); 

  return null; 
}