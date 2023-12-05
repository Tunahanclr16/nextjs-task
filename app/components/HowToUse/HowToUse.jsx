"use client"
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../assets/HowToUse/image1.png";
import image2 from "../../assets/HowToUse/image2.png";
import image3 from "../../assets/HowToUse/image3.png";
import ht1 from "../../assets/HowToUse/ht1.svg"
import ht2 from "../../assets/HowToUse/ht2.svg"
import ht3 from "../../assets/HowToUse/ht3.svg"

export default function HowToUse() {
    // Seçili menünün durumunu takip etmek için olusturdum
  const [selectedMenu, setSelectedMenu] = useState("image1");

  // Menüye tıklanınca çağrılan fonksiyon
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const menuItems = [
    {
      image: ht1, // ht1 SVG dosyasının yolunu buraya ekleyin
      title: "Terapistinizle Eşleşin",
      description:
        "Hangi konuda terapi almak istediğinizi belirleyin. Başvuru nedeninize özel olarak yardım edebilecek terapistlerimizin içinden, kendiniz için en uygun olanını ile eşleşin.",
    },
    {
      image: ht2,
      title: "Seans Oluşturun",
      description:
        "Terapi seansınız için en uygun tarih ve saati, seanslar sekmesinden kolayca seçerek oluşturun. Seansınıza 24 saat kalana kadar iptal edebilirsiniz.",
    },
    {
      image: ht3, // ht3 SVG dosyasının yolunu buraya ekleyin
      title: "Görüşmeye Başlayın",
      description:
        "İstediğiniz yerden hemen terapistiniz ile sınırsız mesajlaşmaya ve online terapiye başlayın.",
    },
  ];
  // Seçilen menü öğesini bulma
  const selectedItem = menuItems.find((item, index) => `image${index + 1}` === selectedMenu);

  return (
   <>
    <div className="bg-white max-w-[1440px] xs:h-[1250px]  mx-auto">
      <h3 className="text-[#6d42ef] leading-[34px] text-[24px] sm:text-[32px] p-20 md:text-left text-center sm:block flex justify-center sm:max-w-[1750px] mx-auto">
        Nasıl Kullanırım?
      </h3>
      <div className="flex flex-col sm:flex-row justify-between items-center  md:h-[749px] max-w-[1440px] mx-auto pb-[300px]">
        <div className="sm:flex-col md:mt-32 gap-4 flex">
          <div className="flex sm:flex-col  items-center justify-center  sm:h-[500px] h-[0px] md:p-12 rounded-lg">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleMenuClick(`image${index + 1}`)}
                className={`flex items-center rounded-[16px] justify-center h-[76px] sm:h-[176px] w-[100px] sm:w-[500px] p-4 mb-5 cursor-pointer ${selectedMenu === `image${index + 1}` ? "bg-[#6d42ef14]" : ""}`}
              >
                <div className={`flex gap-4  items-center mx-auto h-12    rounded-full w-12 ${selectedMenu === `image${index + 1}` ? "bg-blue-500" : "bg-[#6d42ef14]"}`}>
                  <Image
                    src={item.image}
                    width={40}
                    height={40}
                    alt="Logo"
                    className={`object-cover   mx-auto flex justify-center items-center  w-6 ${selectedMenu === `image${index + 1}` ? "" : "filter brightness-50"}`}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="sm:flex hidden  xs:text-[14px] leading-4 sm:leading-[32px] text-[#6d42ef] font-normal items-center ml-4 mt-12">
                    {item.title}
                  </h3>
                  {/* Image'a tıklanınca görünecek description */}
                  <p className={`w-[408px] ml-4 hidden sm:block text-[16px] ${selectedMenu === `image${index + 1}` ? "" : "hidden"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Seçilen menüye göre gösterilecek resim ve description */}
        <div className="mt-10 md:mt-0 flex md:ml-10">
          <div className="relative">
          {selectedMenu === "image1" && (
          <Image
            src={image1}
            width={700}
            height={700}
            alt="Image"
            className="mx-auto object-cover"
          />
        )}
                {selectedMenu === "image2" && (
          <Image
            src={image2}
            width={700}
            height={700}
            alt="Image"
            className="mx-auto object-cover"
          />
        )}
          {selectedMenu === "image3" && (
          <Image
            src={image3}
            width={700}
            height={700}
            alt="Image"
            className="mx-auto object-cover"
          />
        )}
            <div className="sm:hidden mt-4">
              <p className="text-[15px] mx-auto text-center font-light xs:w-[400px] w-[100%] text-[#25165e]">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   </>
  );
}
