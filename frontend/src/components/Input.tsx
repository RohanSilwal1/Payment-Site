type InputBoxProps = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputBox({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputBoxProps) {
  return (
    <div className="pl-2">
      <div className="pt-2 text-sm font-medium pl-1">
        {label}
      </div>
      <div className="pt-1">
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className="text-sm w-full px-3 py-1 mt-1 border-2 rounded-xl border-gray-100 pb-2 invalid:bg-red-700 invalid:text-neutral-50 focus:outline-none shadow-md"
        />
      </div>
    </div>
  );
}
