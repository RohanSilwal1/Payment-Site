
export default function Heading({label}:labelType){

    return <div className="text-2xl font-bold flex justify-center ">
            {label}
            
    </div>
}

interface labelType{
    label:string
}