import { useNavigate } from "react-router-dom";
export default function ButtonWarning({
  label,
  to,
  buttonText,
}: {
  label: string;
  buttonText: string;
  to: string;
}) {
  const navigate = useNavigate();
  return (
    <div className=" py-2 text-sm flex justify-center  pl-2 px-2 ">
      <div>{label}</div>
      <div className="underline px-2">
        <button
          onClick={() => {
            navigate(`${to}`);
          }}
          className="hover:bg-neutral-100 hover:text-neutral-800 hover:cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
