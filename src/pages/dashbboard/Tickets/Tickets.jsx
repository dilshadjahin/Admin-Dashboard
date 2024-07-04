import { Link } from "react-router-dom";


export default function Tickets() {
  return (
   <div className="bg-white">
     <div className="flex justify-between bg-[#ECF2FF] px-6 py-10">
        <div className="">
            <h2 className="text-black font-semibold text-2xl">Ticket Apps</h2>
            <Link className="text-grey-400">Home - </Link> <Link>Tickets</Link>
        </div>
        <div className="flex gap-6">
           
            <button className="bg-[#687EFF] text-white  w-[110px] rounded-md"> My Tickets</button>
            <button className="bg-[#687EFF] text-white  w-[120px] rounded-md">Create</button>
        </div>
    </div>
   </div>
  )
}
