"use client"
import Logo from './Logo'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('TR');
  const [isEngSelected, setIsEngSelected] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsEngSelected(language === 'ENG');
  };

  const languageOptions = [
    { label: 'TR', value: 'Turkish' },
    { label: 'ENG', value: 'English' },
    { label: 'DE', value: 'German' },
  ];

  return (
    <div className='bg-[#ABAAF3]'>
      <div className="my-[28px] p-4">
        <div className="flex max-w-[1800px] mx-auto justify-between items-center">
          <div className="flex items-center gap-20">
            <div className="cursor-pointer">
              <Logo/>
            </div>
            <ul className="md:flex hidden items-center text-navBlack text-[16px] font-semibold gap-[20px]">
              <li>
                <a href="">NASIL ÇALIŞILIR</a>
              </li>
              <li>
                <a href="">HAKKIMIZDA</a>
              </li>{" "}
              <li>
                <a href="">PSİKOLOGLARIMIZ</a>
              </li>{" "}
              <li>
                <a href="">S.S.S</a>
              </li>{" "}
              <li className="flex items-center gap-1">
                <a href="">TESTLER</a>
                <span className="rounded-lg text-xs mt-3 px-1 bg-[#e8E9FD]">Yeni</span>
              </li>
            </ul>
          </div>
            <div className='md:hidden' onClick={openNav}>
          <FaBars size={25} />
            </div>
            {nav && (
            <div className="md:hidden fixed z-50 top-0 left-0 w-full h-full bg-black/50" onClick={openNav}></div>
          )}
          <div
            className={`md:hidden fixed bg-white z-50 h-screen w-[350px] top-0 left-0 transform ${
              nav ? 'translate-x-0' : '-translate-x-full'
            } transition-transform ease-in-out duration-300`}
          >
            <div className='p-2'>
                <Logo/>
            </div>
            <div className="flex justify-end p-8 xs:p-4">
              <IoClose onClick={openNav} size={30} className="cursor-pointer" />
            </div>
            <ul className="flex flex-col h-screen pb-20 justify-center   items-center text-navBlack text-[14px] font-semibold gap-[20px]">
            <li>
                <a href="">NASIL ÇALIŞILIR</a>
              </li>
              <li>
                <a href="">HAKKIMIZDA</a>
              </li>{" "}
              <li>
                <a href="">PSİKOLOGLARIMIZ</a>
              </li>{" "}
              <li>
                <a href="">S.S.S</a>
              </li>{" "}
              <li className="flex mx-auto items-center gap-1">
                <a href="" className=''>TESTLER</a>
                <span className="rounded-lg text-xs mt-3 px-1 bg-[#e8E9FD]">Yeni</span>
              </li>
              <button className="text-navBlack py-[13px] px-[26px] font-bold text-[1rem]">GİRİŞ YAP</button>
              <button className="text-[#fff] rounded-[20px] bg-[#5636BE] py-[13px] px-[26px] hover:bg-navBlack transition-all text-[16px]">Hemen Kaydol</button>
            </ul>
          </div>
           
          <div className="hidden md:flex gap-3 items-center">
          <div
              className={`bg-transparent text-[#322460] border-navBlack border-[1px] rounded-[20px] px-[30px] py-[13px] cursor-pointer`}
              onClick={() => selectLanguage(isEngSelected ? 'TR' : 'ENG')}
            >
              <div className="flex gap-2 items-center">
                <TfiWorld size={20} />
                <span className="font-bold text-lg">{isEngSelected ? 'ENG' : 'TR'}</span>
                {isEngSelected ? <FiChevronUp className="absolute top-3 right-3" /> : <FiChevronDown className="absolute top-3 right-3" />}
              </div>
              <div className={`absolute top-full left-0 mt-2 bg-white p-2 w-[120px] border border-gray-200 rounded transition-all duration-300 ${isEngSelected ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {languageOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => {
                      setSelectedLanguage(option.label);
                      setIsEngSelected(option.label === 'ENG');
                    }}
                    className={`block w-full text-left py-1 px-2 text-[#322460] ${selectedLanguage === option.label ? 'font-semibold' : ''}`}
                  >
                    {option.value}
                  </button>
                ))}
              </div>
              </div>
            <button className="text-navBlack py-[13px] px-[26px] font-bold text-[1rem]">GİRİŞ YAP</button>
            <button className="text-[#fff] rounded-[20px] bg-[#5636BE] py-[13px] px-[26px] hover:bg-navBlack transition-all text-[16px]">Hemen Kaydol</button>
          </div>
        </div>
      </div>
    </div>
  )
}
