import Link from "next/link";

export default function Form(){
    return(
        <div>
        <h1 className="text-3xl p-5 font-bold text-center uppercase">Enter your Details</h1>
       
       <div>
     {/* parent tag */}
       <form className="flex mt-4 gap-8 justify-center items-center flex-col border border-spacing-44">
        {/* children tag */}
          <input type="name" className="p-2 w-2/6 border border-slate-800 mt-8" placeholder="Enter your name" />
          <input type="Email" className=" p-2 w-2/6 border border-slate-800" placeholder="Enter your Email Address" />
          <input type="password" className="p-2 w-2/6 border border-slate-800" placeholder="Enter your Card number" />
          <input type="address" className="p-2 w-2/6 border border-slate-800" placeholder="Enter your Address" />
          
          <Link href="/Thankyou"><button className="border border-spacing-x-20 border-black text-black py-2 px-5 my-4">Enter to confirm your order</button></Link>
       </form>
       </div>
        </div>
    )
};
