
export default function AccordionItem() {
  return (
    <div className="flex mb-56  items-center">
        <div className=''>
        <h3 className='text-[#040345] text-[28px] mt-10 w-[100%] sm:text-left text-center sm:w-[270px] font-bold'>
          Sıkça Sorulan Sorular
        </h3>
        <p className='text-[#04034580] max-w-[270px] mt-[30px] text-[15px]'>
          BulutKlinik Hakkında sık sorulan sorular
        </p>
       <div className=" sm:mx-0 sm:block mx-auto flex justify-center items-center">
       <button className='text-[#fff] px-[32px] flex items-center h-14 mt-[30px] w-max rounded-[27px] bg-[#1a9d99]'>
          Tümünü gör
        </button>
       </div>
      </div>        </div>
  )
}
