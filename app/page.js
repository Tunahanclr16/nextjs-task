import AboutUs from "./components/About/AboutUs";
import Faq from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import HowToUse from "./components/HowToUse/HowToUse";
import Slider from "./components/Slider/Slider";
import GetSupport from "./components/getSupport/GetSupport";

export default function Home() {
  return (
    <div >
      <Hero/>
      <div className=" sm:-mt-0 -mt-7 h-[820px] xs:h-[1050px] sm:h-[900px] md:h-[800px]">
      <HowToUse/>
      </div>
      <AboutUs/>
      <GetSupport/>
      <div className="bg-gray-50 ">
      <Slider/>
      </div>
      <Faq/>
    </div>
    )
}
