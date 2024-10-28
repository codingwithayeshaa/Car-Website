import Image from "next/image";

import Navbar from "./components/Navbar";

import HeroSection from"./componentt/HeroSection";

import FeaturedCar from "./NewCar component/FeaturedCar";

import Link from "next/link";

import Form  from "./Makepayment/page";

import Thankyou from "./Makepayment/page";

import Suzukialto from "./Suzuki-alto/page";

import Payment from "./Makepayment/page";

import Hondacity from "./Honda-city/page";

import Paymentpage from "./Makepayment/page";

import Hondacivic from "./Honda-civic/page";

import payment from "./Makepayment/page";

export default function Home(){
  return(
    <div>
     <HeroSection />
     <FeaturedCar />
    </div>
  
  )
}
