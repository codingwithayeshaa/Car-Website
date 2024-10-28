import Link from "next/link";

export default function Home(){
    return(
        <div>
        <div className="flex justify-center px-10 font-bold text-2xl my-4">

            <h1>Honda Civic 2024 Price In Pakistan,Images,Reviews 7 Specs</h1>
        </div>

        <div className="flex justify-center max-w-screen-2xl py-4 ">
            <img src="/Hondacivic.jpg" alt="Honda-civic"/>
        </div>

        <div className="flex items-center justify-center gap-10 ">
        <button className="bg-gray-600 text-white text-center px-4 py-1 rounded-lg">Book a test Drive</button>
        <button  className="bg-gray-600 text-white text-center px-4 py-1 rounded-lg">Request Bank Finance</button>
        <button  className="bg-gray-600 text-white text-center px-4 py-1 rounded-lg">Visit Place</button>
        <button  className="bg-gray-600 text-white text-center px-4 py-1 rounded-lg">Car Inspection</button>
        </div>

        <div className="flex justify-center">
            <h1 className="flex justify-center mx-20 my-4 text-2xl">Vehicle Discription</h1>
            </div>

            <div className="flex space-x-6">
            <p className="text-center font-semibold">Horsepower:127-170HP  Engine:1500 CC   Max.Speed:260 KM            
                Suspension Type:Soft Suspension  Avg:11-14 KM per liter  Transmission:Automatic  Fuel Type:Petrol
                </p>
        </div>

        <div>
            <h1 className="text-center text-green-400 py-6">PKR 9,000,000</h1>
        </div>

        <div className="flex justify-center ">
           <Link href="/Makepayment"><button className="bg-black text-white text-center rounded-lg px-4 py-2">Make Payment</button></Link>
        </div>
        </div>
    )
}