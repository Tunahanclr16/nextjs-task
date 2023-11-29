"use client"
import Logo from './Logo'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
export default function Navbar() {
    const [nav,setNav]=useState(true)
    const openNav=()=>{
        setNav(!nav)
    }
  return (
    <div>
      <div className="my-[28px] p-4">
        <div className="flex max-w-[1800px] mx-auto justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="cursor-pointer">
              <Logo/>
            </div>
            <ul className="md:flex hidden items-center text-[#322460] text-[14px] font-semibold gap-[20px]">
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
            <div>
                <Logo/>
            </div>
            <div className="flex justify-end p-4">
              <IoClose onClick={openNav} size={30} className="cursor-pointer" />
            </div>
            <ul className="flex flex-col h-screen pb-20 justify-center   items-center text-[#322460] text-[14px] font-semibold gap-[20px]">
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
              <button className="text-[#322460] py-[13px] px-[26px] font-bold text-[1rem]">GİRİŞ YAP</button>
              <button className="text-[#fff] rounded-[20px] bg-[#5636BE] py-[13px] px-[26px] hover:text-[#322460] transition-all text-[16px]">Hemen Kaydol</button>
            </ul>
          </div>
           
          <div className="hidden md:flex gap-3 items-center">
            <div className="flex ml-10 gap-2 bg-transparent text-[#322460] border-[#322460] border-[1px] rounded-[20px] py-[13px] px-[26px] items-center">
              <div className="flex items-center">
                        SVG
              </div>
              <span className="font-bold">TR</span>
            </div>
            <button className="text-[#322460] py-[13px] px-[26px] font-bold text-[1rem]">GİRİŞ YAP</button>
            <button className="text-[#fff] rounded-[20px] bg-[#5636BE] py-[13px] px-[26px] hover:text-[#322460] transition-all text-[16px]">Hemen Kaydol</button>
          </div>
        </div>
      </div>
    </div>
  )
}
