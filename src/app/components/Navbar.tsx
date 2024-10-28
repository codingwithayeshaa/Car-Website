export default function Navbar(){
    return(
        <div>
            <header>
                <nav className="bg-black text-white h-4 py-2 px-10 justify-left">Download App via SMS</nav>
                <nav className="bg-black text-white h-4 py-3 px-10 flex items-end justify-end">Sign Up | Sign In</nav>

                <nav className="bg-black h-12 py-6 px-7 flex items-center justify-between ">

                  <div className="flex items-right ml-12">

                   <img src="/Image.png" alt="Imagelogo" height={150} width={150} className="mx-2"/>
                  
                 </div>

             <ul className="flex space-x-6 text-white ml-12">
               
                <li>Used Cars</li>
                <li>New Cars</li>
                <li>Bikes</li>
                <li>Auto Stores</li>
                <li>Videos</li>
                <li>Forums</li>
                <li>Blogs</li>
                <li>More</li>
            </ul>
             
            <button className=" py-1 px-5 flex items-end rounded-lg bg-red-800 text-white">Post an Ad</button>
          
          </nav>

       </header>

           </div>
    )
}