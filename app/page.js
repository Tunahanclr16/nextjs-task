import AboutUs from "./components/About/AboutUs";
import Hero from "./components/Hero/Hero";
import HowToUse from "./components/HowToUse/HowToUse";
import Slider from "./components/Slider/Slider";
import GetSupport from "./components/getSupport/GetSupport";

export default function Home() {
  return (
    <div >
      <Hero/>
      <div className=" h-[1000px] xs:h-[100%] sm:h-[900px] md:h-[800px]">
      <HowToUse/>
      </div>
      <AboutUs/>
      <GetSupport/>
      <div className="bg-gray-50 ">
      <Slider/>
      </div>
    </div>
    )
}
