export default function Home(){
    return(
      <section>
         <div>
         <h1 className="text-black text-2xl px-60 py-6">Sell Your Cars on Pakwheels and Get the Best Price</h1>
        <div className="flex justify-center items-start space-x-8 mt-10">
            <div className="pr-3 border border-r-6 border-gray-600 p-8 w-4/12 ">
           <h3 className=" text-xl  font-bold text-blue-800 mb-4">Post Your Ad On Pakwheel</h3>
             <ul className="text-black space-y-2">
                <li>Post your Ad for free in 3 easy steps</li> 
                <li>Get Genuine offers from Verified Buyers</li>
                <li>Sell your Car fast at the Best Price</li>
             </ul>

             <button className="bg-red-600 text-white my-2 py-1 px-6 rounded-lg">Post Your Ad</button>
             </div>

             <span className=" flex font-semibold text-black mt-24">OR</span>
         
         <div className="pr-3 border border-r-6 border-gray-600 p-8 w-4/12">
          <h3 className=" text-xl font-bold text-blue-800 mb-4">Try Pakwheels Sell It For Me</h3>
         <ul className="text-black space-y-2">
            <li>Dedicated Sales Expert to Sell your Car</li>
            <li>We Bargain for you and share the Best offer</li>
            <li>We ensure Safe and Secure Transaction</li>
         </ul>
         
           <button className="bg-blue-500 text-white my-2 py-1 px-6 rounded-lg">Register Your Car</button>
      </div>
      </div> 
       </div> 
       </section>
    )
}