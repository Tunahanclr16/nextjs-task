import Image from 'next/image';

export default function Hero() {
  return (
   <div className='bg-[#ABAAF3] -mt-1'>
     <div className="flex items-center  md:flex-row flex-col  max-w-[1200px] mx-auto justify-center">
      <div className='flex flex-col md:p-2'>
        <h2 className="text-black md:text-left text-center mx-auto md:mx-0  font-semibold text-3xl lg:text-7xl  md:text-6xl md:leading-[82px] mt-4 md:w-[600px]">Online terapi ile değişimi başlat! </h2>
        <p className='text-center md:mx-0 mx-auto md:text-left mt-2 md:mt-4 text-[16px] font-semibold sm:text-base md:text-3xl md:max-w-[550px]'>
          Hemen sana en uygun psikolog ile eşleş ve değişime başla  
        </p>
        <button className='text-white bg-[#2E224F]  font-bold mx-1 text-2xl py-4 w-60 text-center justify-center items-center mt-4  rounded-2xl hidden md:flex'>Hemen Başla</button>
      </div>
      <div className="relative h-full w-full md:w-auto md:h-auto">
        <Image
          src="https://www.psikologofisi.com/assets/img/slider.webp"
          alt="Slider Image"
          width={1200}
          height={1200}
          className='mx-auto object-cover '
/>
      </div>
    </div>
   </div>
  );
}