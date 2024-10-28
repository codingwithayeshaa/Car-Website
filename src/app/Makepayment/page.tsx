import Link from "next/link";

export default function Form(){
    return(
        <div>
        <h1 className="text-3xl p-5 font-bold text-center uppercase">Enter your Details</h1>
       
       <div>
     {/* parent tag */}
       <form className=" mt-8 flex gap-4 justify-center items-center flex-col border">
        {/* children tag */}
          <input type="name" className="p-2 rounded-2xl w-2/6 border border-slate-800" placeholder="Enter your name" />
          <input type="Email" className=" p-2 rounded-2xl w-2/6 border border-slate-800" placeholder="Enter your Email Address" />
          <input type="password" className="p-2 rounded-2xl w-2/6 border border-slate-800" placeholder="Enter your Card number" />
          <input type="address" className="p-2 rounded-2xl w-2/6 border border-slate-800" placeholder="Enter your Address" />
          
          <Link href="/Thankyou"><button className="py-2 px-5 gap-4 rounded-lg bg-gray-600 text-white">Enter to confirm your order</button></Link>
       </form>
       </div>
        </div>
    )
};
