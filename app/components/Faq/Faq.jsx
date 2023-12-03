"use client"
import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
import AccordionItem from './AccordionItem';
export default function Faq() {
    const accordionData=[
        {
            title:"Bulutklinik nedir?",
            desc:" Bulutklinik içerisinde binlerce doktorun bulunduğu bir sağlık platformudur   Danışanların doktorlar ile online olarak görüşebilmeleri, kişilerin tüm sağlık verilerini tek merkezden yönetebilmeleri, isterler ise bu sağlık verilerini diledikleri doktorlar ile paylaşabilecekleri özellikler barındırır. Bu sayede dilediğiniz yerden ve istediğiniz zaman sistem üzerindeki hekimlere erişim sağlayabilirsiniz.",
        },
        {
            title:"Online doktor görüşmesini ne zaman kullanmalıyım?",
            desc:" Hastaneye gitmenize gerek olup olmadığına karar veremiyorsanız.        Acil olmayan sebeplerle hastaneye gitmeyi düşündüğünüz zaman.   Laboratuvar testlerinizin sonuçlarını doktorlara yorumlatmak istediğinizde.    Sağlık sorunlarınız hakkında uzman doktorlardan görüş almak istediğinizde.    Doktorunuz tarafından size konulan teşhisi ikinci bir doktora danışmak istediğinizde      Doktora gitmeyi aklınızdan geçiriyor ama vakit bulamıyorsanız. Sizin için en doğru doktoru arıyorsanız.",
        },
        {
        title:"Bu sistem güvenli mi?",
        desc:"Bulutklinik sahip olduğu güvenlik sertifikaları ile dünya standartlarında bir veri güvenliği sağlamaktadır. KVKK ile tam uyumludur. Ayrıca tüm veriler Türkiye içerisinde bulunan veri merkezlerimizde güvenle saklanmaktadır.Özellikle yapılacak online görüntülü görüşmeler sistem tarafından asla kayıt altına alınamaz.P2P teknolojisi ile uçtan uca şifreli bir şekilde görüntü aktarımı sağlanır.",
        },
        {
            title:"Uzmanlardan nasıl randevu alabilirim?",
            desc:"Çok basit bir şekilde bu sistemden faydalanabilirsiniz. Üye Ol: Sistemde temel birkaç bilginiz ile kolaylıkla üye olabilirsiniz.  Uygun Zaman Seç: Dilediğiniz hekimin uygun olduğu bir zaman için randevu almalısınız.  Ödeme Yap: Hekimin belirlediği ücreti kredi kartınız ile güvenle ödeyebilirsiniz. Hekimin Aramasını Bekle: Randevu saatinizde hekim sizi mobil uygulamamız üzerinden arayacaktır. Uygulamayı indirdiğinizden ve kullanıcı girişi yaptığınızdan emin olun."
        }
    ]
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-[#edf8f4] '>
    <div className='max-w-[1200px]   items-center flex flex-col sm:flex-row justify-center mx-auto'>
    <AccordionItem/>
      <div className='  md:mt-12 max-w-[800px] sm:bottom-0 relative bottom-44 text-center w-full  flex flex-col items-center mb-20 text-xl gap-4'>
        {accordionData.map((item, index) => (
          <div key={index} className='w-full h-full items-center justify-between gap-5 flex flex-col space-x-4'>
            <button
              className='w-full text-left py-2 px-4 rounded-md focus:outline-none relative'
              onClick={() => toggleAccordion(index)}
            >
              <div className='flex items-center justify-between'>
                <span>{item.title}</span>
                <div className='transform transition-transform duration-300  '>
                <FaCaretDown
                      className={`w-8 h-8 rounded-full bg-white shadow hover:bg-green-500 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      style={{ transition: 'transform 0.5s ease' }}
                    />                </div>
              </div>
              <div className='border border-gray-500 mt-1'></div>

            </button>
            <div className={`overflow-hidden transition-max-height duration-500 ${activeIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className='p-4 mt-2 max-w-[755px] text-[14px] text-left rounded-md'>
                  <p>{item.desc}</p>
                </div>
              </div>    
          </div>
        ))}
      </div>
    </div>
  </div>

  )
}
