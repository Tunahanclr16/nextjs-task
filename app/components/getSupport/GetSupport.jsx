export default function GetSupport() {
    return (
        <div className="max-w-[1100px]  sm:max-w-[1400px] mx-auto">
        <div className="flex md:flex-row items-center justify-center flex-col gap-4 sm:gap- mt-6">
        <SupportItem
            imageUrl="https://terapizone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-1.688954d9.png&w=64&q=75"
            title="15 Gün İçinde İade İmkanı"
            description="15 Gün İçinde İade İmkanı"
          />
          <SupportItem
            imageUrl="https://terapizone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-2.ea0781a5.png&w=96&q=75"
            title="Güvendesiniz,endişelenmeyin"
            description="Terapizone kişisel bilgilerinizi ve video görüşmelerinizi kayıt altına almaz."
          />
          <SupportItem
            imageUrl="https://terapizone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-3.92f45995.png&w=64&q=75"
            title="24 Saate Kadar Seans İptali"
            description="Planlarda değişiklik olduğunda, seansınıza 24 saat kalana kadar iptal edebilirsiniz."
          />
          <SupportItem
            imageUrl="https://terapizone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-4.2c91936b.png&w=96&q=75"
            title="7/24 Canlı Destek"
            description="Terapizone, ihtiyacınız olduğu her an size destek olmak için yanınızda!"
          />
        </div>
  </div>
    );
  }
  
  function SupportItem({ imageUrl, title, description }) {
    return (
      <div className="flex md:flex-col mx-auto flex-row items-center gap-1 xs:gap-2 sm:gap-0">
        <img
          src={imageUrl}
          width={62}
          height={62}
          alt="Support Item"
          className="object-cover flex items-center"
        />
        <div className="flex flex-col mx-auto items-center text-center">
          <h3 className="text-#25165e w-[320px] font-medium text-base xs:text-lg leading-6 mt-5">{title}</h3>
          <p className="mt-2 text-[#5b677d] w-[300px] text-[14px] xs:text-[16px] leading-6">{description}</p>
        </div>
      </div>
    );
  }
  