import benefit1 from "../../assets/GetSupport/benefit-1.png"
import benefit2 from "../../assets/GetSupport/benefit-2.png"
import benefit3 from "../../assets/GetSupport/benefit-3.png"
import benefit4 from "../../assets/GetSupport/benefit-4.png"
import Image from "next/image"

export default function GetSupport() {
  return (
    <div className="max-w-[1200px]   sm:max-w-[1200px] mx-auto">
      <div className="flex md:flex-row items-center justify-center flex-col gap-4 sm:gap-1 mt-6">
        <SupportItem
          imageUrl={benefit1}
          title="15 Gün İçinde İade İmkanı"
          description="15 Gün İçinde İade İmkanı"
        />
        <SupportItem
          imageUrl={benefit2}
          title="Güvendesiniz,endişelenmeyin"
          description="Terapizone kişisel bilgilerinizi ve video görüşmelerinizi kayıt altına almaz."
        />
        <SupportItem
          imageUrl={benefit3}
          title="24 Saate Kadar Seans İptali"
          description="Planlarda değişiklik olduğunda, seansınıza 24 saat kalana kadar iptal edebilirsiniz."
        />
        <SupportItem
          imageUrl={benefit4}
          title="7/24 Canlı Destek"
          description="Terapizone, ihtiyacınız olduğu her an size destek olmak için yanınızda!"
        />
      </div>
    </div>
  );
}

function SupportItem({ imageUrl, title, description }) {
  return (
    <div className="flex items-center ">
      <div className="flex md:flex-col xs:pl-2 pl-4   mx-auto flex-row items-center gap-2 xss:gap-1 xs:gap-2 sm:gap-0">
        <Image
          src={imageUrl}
          alt="Support Item"
          className="object-cover  w-[52px]    flex items-center"
        />
        <div className="flex flex-col xss:mx-auto  xss:items-center xss:text-center">
          <h3 className="text-#25165e w-[320px] font-medium text-sm xss:text-base xs:text-lg leading-6 mt-5">{title}</h3>
          <p className="mt-2 text-[#5b677d] w-[250px]  xss:w-[300px] text-[12px] xss:text-[14px] xs:text-[16px] leading-6">{description}</p>
        </div>
      </div>
    </div>
  );
}
