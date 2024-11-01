import Link from "next/link";
export default function Suzukialto(){
    return(
        <div>
        <div className="flex justify-center px-10 font-bold text-2xl my-6">

            <h1>Suzuki Alto VX 2024 Price In Pakistan,Images,Reviews 7 Specs</h1>
        </div>

        <div className="flex justify-center max-w-screen-2xl py-4 ">
            <img src="/Suzuki.jpg" alt="Suzuki-Alto"/>
        </div>

        <div className="flex items-center justify-center gap-10 ">
        <button className="border border-spacing-x-20 border-black bg-white text-black text-center px-4 py-1 rounded-lg">Book a test Drive</button>
        <button  className="border border-spacing-x-20 border-black bg-white text-black text-center px-4 py-1 rounded-lg">Request Bank Finance</button>
        <button  className="border border-spacing-x-20 border-black bg-white text-black text-center px-4 py-1 rounded-lg">Visit Place</button>
        <button  className="border border-spacing-x-20 border-black bg-white text-black text-center px-4 py-1 rounded-lg">Car Inspection</button>
        </div>

        <div className="flex justify-center">
            <h1 className="font-semibold mx-20 my-8 text-2xl">Vehicle Discription</h1>
            </div>

            <div className="flex space-x-6">
            <p className="text-center font-semibold">Cylinders:2  Engine:658 CC  Condition:7/10  Driven:140 KM/H            
                Suspension Type:Soft Suspension  Avg:18-20 KM per liter  Transmission:Automatic/Manual  Fuel Type:Patrol
                </p>
        </div>

        <div>
            <h1 className="text-center text-green-500 py-6">PKR 23,00,000</h1>
        </div>

        <div className="flex justify-center ">
          <Link href="/Makepayment"><button className="border border-spacing-x-20 bg-black text-white text-center rounded-lg px-4 py-2">Make Payment</button></Link>
        </div>
        </div>
    )
}