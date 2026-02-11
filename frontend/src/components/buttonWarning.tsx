

export default function ButtonWarning({label,to,buttonText}:{label:string,buttonText:string,to:string}){

    return <div className=" py-2 text-sm flex justify-center  pl-2 px-2">
        <div>
        {label}
        </div>
        <div className="underline px-2">
        <link className="pointer  pl-1 cursor-pointer underline" href={to} />
        {buttonText}
        </div>
    </div>
}