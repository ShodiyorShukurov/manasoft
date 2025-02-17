import React from 'react';
import cardLogo1 from '../assets/logo/card-logo1.svg';
import analytics from '../assets/image/analytics-card1.svg';
import liner from '../assets/image/card2-bg.svg';
import card3img1 from '../assets/image/card3-img1.jpg';
import card3img2 from '../assets/image/card3-img2.jpg';
import card3img3 from '../assets/image/card3-img3.jpg';
import card3img4 from '../assets/image/card3-img4.jpg';
import card3img5 from '../assets/image/card3-img5.jpg';
import card4logo from '../assets/logo/card4-logo.svg';



const Services = () => {
  return (
    <section className="mt-[80px]">
      <div className="container">
        <button
          style={{
            background:
              'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
            boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px)',
          }}
          className="text-[#FFFFFF] text-[16px] sm:text-[20px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] leading-[100%] mx-auto cursor-pointer w-full sm:w-auto block mt-[32px]"
        >
          Nima uchun aynan biz
        </button>

        <h2 className="text-center text-white text-[28px] sm:text-[48px] leading-[100%] font-medium mt-[48px] sm:mt-[64px] tracking-[0.48px]">
          Nima uchun aynan Manasoft?
        </h2>

        <p className="text-center text-white text-[16px] sm:text-[20px] leading-[100%] mt-[16px] sm:mt-[24px] tracking-[0.20px] w-full max-w-[886px] mx-auto">
          Biznesingizni samarali rivojlantirish uchun ishonchli IT hamkor
          kerakmi? Manasoft sizga zamonaviy, tezkor va ishonchli yechimlar
          taqdim etadi!
        </p>

        <ul className="flex  gap-[24px] mt-[48px] cursor-pointer justify-center md:justify-start">
          {/* Card 1 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[24px] text-center hover:scale-[1.05] transition-transform duration-300 w-full sm:w-[300px] md:w-[350px] lg:w-auto">
            <h3
              className={`text-[32px] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]`}
            >
              UX tadqiqotlar
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px]">
              Foydalanuvchi tadqiqoti orqali biznesingizni yanada
              rivojlantirish.
            </p>
            <div className="bg-[#ffffff0a] rounded-[12px] border border-[#ffffff66] h-[264px] relative mt-[32px] overflow-hidden">
              <div className="flex gap-[8px] items-center px-[32px] pt-[32px]">
                <img src={cardLogo1} alt="logo" width={24} height={24} />
                <p className="text-[14px] text-[#33C6AB]">
                  14.12% yaxshilanish
                </p>
              </div>
              <img
                src={analytics}
                alt="analytics"
                className="absolute -bottom-3 w-[324px]"
              />
            </div>
          </li>

          {/* Card 2 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] px-[32px] pt-[24px] text-center w-full max-w-[600px]">
            <h3 className="text-[32px] font-bold leading-[42px] text-[#FBFBFB] w-full max-w-[540px] mx-auto">
              Manasoft – IT yechimlaringiz markazi
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full max-w-[490px] mx-auto">
              Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun Telegram
              botlar, mobil ilovalar va veb-saytlar yaratish bo‘yicha eng
              ishonchli hamkoringiz!
            </p>
            <div className="bg-[#ffffff0a] rounded-[12px] rounded-b-[0] border border-[#ffffff66] border-b-[transparent] mt-[18px] px-[22px] pt-[26px]">
              <img src={liner} alt="liner" />
            </div>
          </li>

          {/* Card 3 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] px-[24px] py-[32px] text-center w-full sm:w-[300px] md:w-[350px] lg:w-auto">
            <h3 className="text-[24px] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]">
              Bizning mijozlarimiz
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full min-w-[300px] mx-auto">
              Manasoft bilan ishlaydigan har bir mijoz – biz uchun muhim!
            </p>
            <div className="bg-[#ffffff0a] rounded-[50%] border border-[#ffffff66] h-[264px] w-[264px] mt-[32px] mx-auto flex justify-center items-center group">
              <div className="bg-[#ffffff0a] rounded-[50%] border border-[#ffffff66] h-[208px] w-[208px] flex justify-center items-center space-x-[-22px] group-hover:space-x-0 transition-all duration-1000 ease-in-out">
                {[card3img5, card3img4, card3img3, card3img2, card3img1].map(
                  (img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="cardimg"
                      width={42}
                      height={42}
                      className="rounded-[50%] transition-all duration-1000 ease-in-out"
                    />
                  )
                )}
              </div>
            </div>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-[24px] mt-[24px] justify-center md:justify-start">
          {/* Card 1 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[32px] w-full sm:w-[300px] md:w-[350px] lg:w-[49%] relative overflow-hidden">
            <h3 className="text-[24px] sm:text-[28px] font-bold leading-[120%] text-[#FBFBFB] mt-[10px]">
              Texnologiyalar olamiga yo‘lingiz
            </h3>
            <p className="text-[#9B9CA1] text-[14px] sm:text-[16px] mt-[16px] w-full max-w-[531px]">
              Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda CRM va
              ERP tizimlari orqali biznesingizni avtomatlashtirib, uni keyingi
              bosqichga olib chiqishga yordam beradi.
            </p>

            <ul className="flex  w-full items-end gap-[16px]">
              <li className="bg-[#ffffff0a] rounded-[12px] border border-[#ffffff66] border-b-0 rounded-b-none overflow-hidden pt-[20px] pl-[20px] pb-[10px] mt-[20px] absolute -bottom-[20px] left-[20px]  w-[45%]">
                <p className="text-[#fff] text-[30px] font-medium">$3453.00</p>
                <div className="rounded-[12px] border-8 border-[#333333] w-[80%] mt-[16px]"></div>
                <div className="rounded-[12px] border-8 border-[#333333] w-[80%] mt-[9px]"></div>
              </li>

              <li className="bg-[#ffffff0a] rounded-[12px] border border-[#ffffff66]  border-b-0 rounded-b-none overflow-hidden pt-[20px] pl-[20px] pb-[10px] absolute bottom-0 right-[20px] w-[45%]">
                <p className="text-[#fff] text-[18px] font-medium">
                  MonthlyInvoice
                </p>
                <div className="flex gap-[12px] mt-[20px]">
                  <div className="w-[44px] h-[44px] rounded-[50%] bg-[#FBADE0] flex justify-center items-center">
                    <img src={card4logo} alt="" />
                  </div>

                  <div>
                    <h5 className="text-[#fff] text-[14px]">
                      John Client_download.Pdf
                    </h5>
                    <div className="rounded-[12px] border-4 border-[#333333] w-[100%] mt-[11px]"></div>
                  </div>

                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="13"
                      viewBox="0 0 3 13"
                      fill="none"
                    >
                      <path
                        d="M3 1.39771C3 0.62897 2.37103 -2.74931e-08 1.60229 -6.10959e-08C0.833549 -9.46986e-08 0.204579 0.62897 0.204579 1.39771C0.204579 2.16645 0.833548 2.79542 1.60229 2.79542C2.37103 2.79542 3 2.16645 3 1.39771Z"
                        fill="#A4A4A4"
                      />
                      <path
                        d="M3 11.1817C3 10.4129 2.37103 9.78397 1.60229 9.78397C0.833548 9.78397 0.204578 10.4129 0.204578 11.1817C0.204578 11.9504 0.833548 12.5794 1.60229 12.5794C2.37103 12.5794 3 11.9504 3 11.1817Z"
                        fill="#A4A4A4"
                      />
                      <path
                        d="M3 6.2897C3 5.52096 2.37103 4.89199 1.60229 4.89199C0.833548 4.89199 0.204579 5.52096 0.204579 6.2897C0.204579 7.05844 0.833548 7.68741 1.60229 7.68741C2.37103 7.68741 3 7.05844 3 6.2897Z"
                        fill="#A4A4A4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </li>

          {/* Card 2 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[32px] w-full sm:w-[300px] md:w-[350px] lg:w-[49%]">
            <h3 className="text-[32px] sm:text-[48px] font-bold leading-[120%] text-[#FBFBFB] w-full max-w-[540px]">
              Biznesingizni birga rivojlantiramiz!
            </h3>
            <p className="text-[#9B9CA1] text-[14px] sm:text-[16px] mt-[16px] w-full max-w-[550px]">
              Manasoft sizga IT yechimlari bo‘yicha ishonchli hamkor bo‘lishga
              tayyor! Telegram botlar, mobil ilovalar, veb-saytlar va
              avtomatlashtirilgan tizimlar orqali biznesingizni keyingi
              bosqichga olib chiqing.
            </p>
            <button className="bg-[#4266B1] text-[#fff] text-[14px] sm:text-[16px] rounded-[24px] px-6 py-3 font-medium cursor-pointer w-full sm:w-auto mt-[56px]">
              Biz bilan bog‘laning
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
