import React from 'react';
import portfolio from '../assets/image/portfolio.png';

const Portfolio = () => {
  return (
    <section className="py-[200px]">
      <div className="container">
        <h2 className="text-center text-[96px] font-semibold leading-[120%] tracking-[0.96px] w-full max-w-[650px] mx-auto bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          Texnologiya va Tajribani Birlashtiring
        </h2>

        <ul className='space-y-[80px] pt-[120px]'>
          <li className="flex flex-col lg:flex-row items-center gap-[48px]">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white">
              <button
                style={{
                  background:
                    'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                  boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                }}
                className="text-[#FFFFFF] text-[20px] rounded-[48px] px-[32px] py-[16px] leading-[100%] mx-auto cursor-pointer"
              >
                01
              </button>
              <h3 className="text-[48px]  font-bold leading-[120%] mt-[32px]">
                Telegram botlar
              </h3>
              <p className="text-lg text-[#ffffff99] leading-relaxed mt-[16px] leading-[140%]">
                Manasoft Telegram botlar, mobil ilovalar, web-saytlar hamda CRM
                va ERP tizimlari orqali biznesingizni avtomatlashtirib, uni
                keyingi bosqichga olib chiqishga yordam beradi. Bizning
                ishonchli va tezkor IT yechimlarimiz iOS va Android
                platformalari uchun sifatli ilovalar yaratish, zamonaviy
                web-saytlar ishlab chiqish hamda biznes jarayonlarini
                optimallashtirishga qaratilgan.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full">
                <img
                  src={portfolio}
                  alt="Manasoft Preview"
                  className="w-full h-auto"
                  width={630}
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col lg:flex-row items-center gap-[48px]">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white">
              <button
                style={{
                  background:
                    'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                  boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                }}
                className="text-[#FFFFFF] text-[20px] rounded-[48px] px-[32px] py-[16px] leading-[100%] mx-auto cursor-pointer"
              >
                02
              </button>
              <h3 className="text-[48px]  font-bold leading-[120%] mt-[32px]">
                Telegram botlar
              </h3>
              <p className="text-lg text-[#ffffff99] leading-relaxed mt-[16px] leading-[140%]">
                Manasoft Telegram botlar, mobil ilovalar, web-saytlar hamda CRM
                va ERP tizimlari orqali biznesingizni avtomatlashtirib, uni
                keyingi bosqichga olib chiqishga yordam beradi. Bizning
                ishonchli va tezkor IT yechimlarimiz iOS va Android
                platformalari uchun sifatli ilovalar yaratish, zamonaviy
                web-saytlar ishlab chiqish hamda biznes jarayonlarini
                optimallashtirishga qaratilgan.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full">
                <img
                  src={portfolio}
                  alt="Manasoft Preview"
                  className="w-full h-auto"
                  width={630}
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col lg:flex-row items-center gap-[48px]">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white">
              <button
                style={{
                  background:
                    'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                  boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                }}
                className="text-[#FFFFFF] text-[20px] rounded-[48px] px-[32px] py-[16px] leading-[100%] mx-auto cursor-pointer"
              >
                03
              </button>
              <h3 className="text-[48px]  font-bold leading-[120%] mt-[32px]">
                Telegram botlar
              </h3>
              <p className="text-lg text-[#ffffff99] leading-relaxed mt-[16px] leading-[140%]">
                Manasoft Telegram botlar, mobil ilovalar, web-saytlar hamda CRM
                va ERP tizimlari orqali biznesingizni avtomatlashtirib, uni
                keyingi bosqichga olib chiqishga yordam beradi. Bizning
                ishonchli va tezkor IT yechimlarimiz iOS va Android
                platformalari uchun sifatli ilovalar yaratish, zamonaviy
                web-saytlar ishlab chiqish hamda biznes jarayonlarini
                optimallashtirishga qaratilgan.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full">
                <img
                  src={portfolio}
                  alt="Manasoft Preview"
                  className="w-full h-auto"
                  width={630}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
