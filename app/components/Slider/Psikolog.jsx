"use client";
import Image from "next/image";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import Star from "./Star";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

// import required modules
import { FreeMode,Navigation } from 'swiper/modules';
import SliderBtn from "@/app/ui/SliderBtn";
export default function Psikolog() {
  return (
    <>
   <Swiper
        slidesPerView={1}
        spaceBetween={30}
        rewind={true}
        freeMode={true}
        breakpoints={{
          1071: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600:{
            slidesPerView: 1,
            spaceBetween: 20,
          }
        }}
        navigation={
          true
        }
        modules={[Navigation,FreeMode]}
                className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuV3lPM0x4OGxpRVZJeG9Vb1FRUnpSQT09/IMG/1669387019273520.jpg"
                width={150}
                height={150}
                alt=""
                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className="text-[#4a4a4a] text-lg font-bold ">
                  Ebrar Sultan Güner
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuWTYvaE5KYUp5cU5mOTVsSXJUWkF4QT09/IMG/1656919864759223.png"
                width={150}
                height={150}
                alt=""
                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className="text-[#4a4a4a] text-center text-lg font-bold ">
            Vefa Doğan
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuUXdodWNXOFMxMlhuVVMyZjFhd0ZSZz09/IMG/1686296572306446.png"
                width={150}
                height={150}
                alt=""
                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className=" text-center text-[#4a4a4a] text-lg font-bold ">
              Çağla Nur Yılmaz
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuVmc5Tm1UaGRnUDlZTFU0RWljam9JUT09/IMG/1689749032870658.png"
                width={150}
                height={150}
                alt=""

                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className="text-[#4a4a4a] text-lg font-bold ">
                Görkem Erva Demir                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuV3lPM0x4OGxpRVZJeG9Vb1FRUnpSQT09/IMG/1669387019273520.jpg"
                width={150}
                height={150}

                alt=""
                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className="text-[#4a4a4a] text-lg font-bold ">
                  Ebrar Sultan Güner
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuaFEwQ0R6SFd0OTh0L0JOWlRMcnpvUT09/etc/1699021102697687.png"
                width={150}
                alt=""
                height={150}

                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className="text-[#4a4a4a] text-lg font-bold ">
                Birce Begüm  Güvel
                                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuSzM1VVoxUUVhZk5IbmlYa1ZFL1pZUT09/etc/1701238374838241.png"
                width={150}
                height={150}
                alt=""
                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className="text-[#4a4a4a] text-lg font-bold ">
            Berkan Çelik
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex mx-auto  mt-2 items-center justify-center">
            <div className="flex flex-col items-center rounded border-gray-50 shadow-lg w-[300px] xs:w-[350px] md:w-[400px]   h-full px-4 py-4 bg-white">
              <Image
                src="https://api.hidoctor.health/assets/users/I1MhQGUuSVg2WFMrU1JYdVI3M0lqRlkwaE9aQT09/IMG/1689854122642452.png"
                width={150}
                height={150}
                alt=""
                className="object-cover border-green-500 border-2 rounded-full"
              />
              <div className="mb-3 relative bottom-3 z-[5px] bg-green-100 w-20 rounded-full border border-green-500 py-1 text-xs font-semibold">
                <p className="text-center ">Çevrim içi</p>
              </div>
              <Star />
              <div>
                <h2 className="text-[#4a4a4a] text-lg font-bold ">
              Melisa Aydaş
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 text-center">
                  Uzman Klinik Psikolog
                </p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <GoDeviceCameraVideo size={20} />{" "}
                  <span className="text-xs text-gray-600">219</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone size={20} />{" "}
                  <span className="text-xs text-gray-600">36</span>
                </div>
                <div className="flex items-center gap-1">
                  <TfiWorld size={20} />{" "}
                  <span className="text-xs text-gray-600">TR</span>
                </div>
              </div>
              <div className="flex max-w-[300px] cursor-pointer flex-wrap items-center justify-center text-sm mt-2">
                <a
                  href=""
                  className="my-1 mr-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-150 transition-all"
                >
                  Kaygı(Anksiyete)
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Depresyon
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Kişilik Bozuklukları
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Travma Sonrası Stres Bozukluğu
                </a>
                <a className="my-1 mr-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-black hover:border-transparent hover:bg-gray-100">
                  Cinsel İşlev Bozukluğu
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <p className="font-semibold flex items-center border-b cursor-pointer text-black text-lg">
                  Eğitim ve Sertfikaları Gör <FaChevronRight size={20} />
                </p>
              </div>
              <div className="flex mt-3 text-sm font-semibold text-[#575757] items-center">
                <span>₺</span>
                <span>420/Seans</span>
                <span>(Minimum Tutar)</span>
              </div>
              <div className="flex pb-2 pt-4 text-xs flex-col justify-center items-center">
                <button className="text-center cursor-pointer my-2 w-60 rounded-full bg-[#34A0A4] p-2 align-middle text-xs font-medium text-white md:w-[64]">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
            <SliderBtn title="Tüm Pisikologlar"/>
      </Swiper>
    </>
  );
}
