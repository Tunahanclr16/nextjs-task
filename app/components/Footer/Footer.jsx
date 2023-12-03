import Image from "next/image";

const Footer = () => {

  return (
    <footer className="bg-[#322460] py-10">
      <div className="max-w-[1650px] mt-24 overflow-hidden mx-auto grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 p-3 sm:p-0 xs:gap-12 md:gap-24">
        <div className="text-white">
          <h3 className="text-[21px] leading-7 font-bold tex-[#fff] mb-4">
            Terappin
          </h3>
          <ul className="flex text-left flex-col gap-2">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Nasıl Çalışır
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Hakkımızda
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Psikologlarımız
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Kurumsal
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                S.S.S.
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Testler
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Terapist Başvurusu
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-[21px] leading-7 font-bold tex-[#fff] mb-4">
            Testler
          </h3>
          <ul className="flex text-left flex-col whitespace-nowrap gap-2">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Schutte Duygusal Zeka Ölçeği
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Beck Depresyon Testi
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Empati Ölçeği
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Beyaz Ayı Supresyon Envanteri
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Warwick - Edinburgh Mental İyi Oluş Ölçeği
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Yeme Tutumu Testi
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Liebowitz Sosyal Fobi Belirtileri Ölçeği
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Beck Anksiyete Ölçeği
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-[21px] leading-7 font-bold tex-[#fff] mb-4">
            Yasal
          </h3>
          <ul className="flex text-left flex-col whitespace-nowrap gap-2">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Kullanıcı Sözleşmesi
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Çerez ve Gizlilik Politikaları
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                KVKK Aydınlatma Metni
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-[21px] leading-7 font-bold tex-[#fff] mb-4 w-[300px]">
            Uygulamayı İndir
          </h3>
          <ul className="flex text-left flex-col whitespace-nowrap gap-2">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/images/market-icons/app_store_download.webp"
                width={150}
                alt=""
                height={150}
                className="object-cover"
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/images/market-icons/google_play_download.webp"
                width={150}
                alt=""
                height={150}
                className="object-cover"
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/images/market-icons/huawei_app_gallery_download.webp"
                width={150}
                height={150}
                alt=""
                className="object-cover"
              />
            </li>
          </ul>
        </div>
        <div className="text-white ">
          <Image
            src="https://terappin.com/new-site/images/terappin-logo-vector.svg"
            alt=""
            width={150}
            height={150}
            className="object-cover"
          />
          <ul className="flex text-left  mt-3  sm:mt-10 whitespace-nowrap gap-3">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/new-site/images/icons/social/instagram.svg"
                width={39}
                alt=""
                height={39}
                className="object-cover"
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/new-site/images/icons/social/twitter.svg"
                width={39}
                alt=""
                height={39}
                className="object-cover"
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/new-site/images/icons/social/facebook.svg"
                width={39}
                alt=""
                height={39}
                className="object-cover"
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/new-site/images/icons/social/linkedin.svg"
                width={39}
                alt=""
                height={39}
                className="object-cover"
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <Image
                src="https://terappin.com/new-site/images/icons/social/youtube.svg"
                width={39}
                alt=""
                height={39}
                className="object-cover"
              />
            </li>
          </ul>
          <div className="mt-8 flex flex-col">
            <Image
              src="https://terappin.com/new-site/images/etbis.webp"
              width={72}
              height={72}
              alt=""
              className="object-cover"
            />
            <span className="text-[#fff] text-xs mt-2">Copyright © 2023</span>
            <span className="text-[#fff] text-xs mt-2">
              Terappin Teknoloji A.Ş. Tüm hakları saklıdır.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center max-w-[1650px] mx-auto justify-between">
        <div className=" mt-12 sm:mt-20">
          <Image
            src="https://terappin.com/new-site/images/ssl.png"
            alt=""
            height={150}
            width={150}
            className="object-cover"
          />
        </div>
        <div className=" mt-4  sm:mt-20">
          <Image
            src="https://terappin.com/new-site/images/bitmap.png"
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
