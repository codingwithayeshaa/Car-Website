export default function Home(){
    return(
         <div>
         <h1 className="text-white text-2xl px-60 py-6">Sell Your Cars on Pakwheels and Get the Best Price</h1>
        <div className="flex justify-between gap-4 p-26">
            <div className="flex flex-col items-center">
           <p className="bg-white text-2xl text-blue-800 px-16 py-2">Post Your Ad On Pakwheel</p>
             <ul className="text-black text-start px-46 py-2">
                <li>Post your Ad for free in 3 easy steps</li>
                <li>Get Genuine offers from Verified Buyers</li>
                <li>Sell your Car fast at the Best Price</li>
             </ul>

             <button className="bg-red-600 text-white my-2 py-1 px-6 rounded-lg">Post Your Ad</button>
             </div>

             <h1 className="font-medium text-black justify-between ml-30 py-24">OR</h1>
         
         <div className="flex flex-col items-center">
          <p className="bg-white text-2xl text-blue-800 px-20 py-2">Try Pakwheels Sell It For Me</p>
         <ol className="text-black text-left px-36 py-2">
            <li>Dedicated Sales Expert to Sell your Car</li>
            <li>We Bargain for you and share the Best offer</li>
            <li>We ensure Safe and Secure Transaction</li>
         </ol>
         
           <button className="bg-blue-500 text-white my-2 py-1 px-6 rounded-lg">Register Your Car</button>
      </div>
      </div> 
       </div> 
    )
}