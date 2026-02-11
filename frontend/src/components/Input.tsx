export default function InputBox({label,placeholder}:{label:string,placeholder:string}){

    return <div className="pl-2 ">
        <div className="pt-2 text-sm font-medium pl-1 ">
            {label}
            </div>
            <div className="pt-1">
        <input placeholder={placeholder} className="text-sm w-full px-3 py-1 mt-1  border-2 rounded-xl border-gray-100 pb-2"/>
            </div>
    </div>
}