import Link from "next/link";

export default function FeaturedCar(){
    return(
        <div>
        <div>
            <h1 className="text-2xl px-4 font-semibold">Featured New Cars</h1>
            <p className="text-end text-blue-400 ml-6 mt-2">View All New Cars</p>
        </div>

        <div className=" flex mx-8 gap-8 text-lg text-slate-500">
            <p>Popular</p>
            <p>Upcoming</p>
            <p>Newly Launched</p>
        </div>

         <div className="flex mx-4 gap-4">

           <div className="flex justify-center w-1/4">
            <ul>
               <Link href="/Toyota-corolla"><img src="/toyota.jpg" alt="Toyota Corolla"/></Link>
                <li className="text-center text-blue-700 font-semibold">Toyota Corolla</li>
                <li className="text-green-500 text-center">PKR 59.7-75.5 Lacs</li>
                <li className="text-yellow-300 text-center font-normal">300+ Reviews</li>
            </ul>
           </div>

           <div className="w-1/4">
            <ul>
                <Link href="/Suzuki-alto"><img src="/Suzuki.jpg" alt="Suzuki Alto"/></Link>
                <li className="text-center text-blue-700 font-semibold">Suzuki Alto</li>
                <li className="text-green-500 text-center">PKR 23.3-30.5 Lacs </li>
                <li className="text-yellow-300 text-center font-normal">654+ Reviews</li>
            </ul>
           </div>

           <div className="w-1/4"> 
           <ul>
               <Link href="/Honda-city"><li><img src="/Hondacity.jpg" alt= "Honda City"/></li></Link>
                <li className="text-center text-blue-700 font-semibold">Honda City</li>
                <li className="text-green-500 text-center">PKR 46.5-58.5 Lacs </li>
                <li className="text-yellow-300 text-center font-normal">199+ Reviews</li>
            </ul>
           </div>
        
          <div className="w-1/4">
          <ul>
                <Link href="/Honda-civic"><li><img src="/Hondacivic.jpg" alt="Honda Civic"/></li></Link>
                <li className="text-center text-blue-700 font-semibold">Honda Civic</li>
                <li className="text-green-500 text-center">PKR 86.6-99.0 lacs</li>
                <li className="text-yellow-300 text-center font-normal">348+ Reviews</li>
            </ul>
          </div>
         </div>
        </div>
        
    )
}