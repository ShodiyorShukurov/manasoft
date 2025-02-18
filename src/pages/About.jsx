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
import img from '../assets/image/image 6.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
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
          className="text-[#FFFFFF] text-[16px] sm:text-[20px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] leading-[100%] mx-auto w-full sm:w-auto block mt-[32px]"
        >
          {t('about.about_text')}
        </button>

        <h2 className="text-center text-white text-[28px] sm:text-[48px] leading-[100%] font-medium mt-[48px] sm:mt-[64px] tracking-[0.48px]">
        {t('about.about_title')}
        </h2>

        <p className="text-center text-white text-[16px] sm:text-[20px] leading-[100%] mt-[16px] sm:mt-[24px] tracking-[0.20px] w-full max-w-[886px] mx-auto">
        {t('about.about_subtitle')}
        </p>

        <ul className="flex  gap-[24px] mt-[48px] cursor-pointer justify-center md:justify-start">
          {/* Card 1 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[24px] text-center hover:scale-[1.05] transition-transform duration-300 w-full sm:w-[300px] md:w-[350px] lg:w-auto">
            <h3
              className={`text-[32px] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]`}
            >
               {t('about.about_card1_title')}
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px]">
            {t('about.about_card1_text')}
            </p>
            <div className="bg-[#ffffff0a] rounded-[12px] border border-[#ffffff66] h-[264px] relative mt-[32px] overflow-hidden">
              <div className="flex gap-[8px] items-center px-[32px] pt-[32px]">
                <img src={cardLogo1} alt="logo" width={24} height={24} />
                <p className="text-[14px] text-[#33C6AB]">
                  14.12% 
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
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] px-[32px] pt-[24px] text-center w-full max-w-[600px] relative">
            <h3 className="text-[32px] font-bold leading-[42px] text-[#FBFBFB] w-full max-w-[540px] mx-auto">
            {t('about.about_card2_title')}
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full max-w-[490px] mx-auto">
            {t('about.about_card2_text')}
            </p>
            <div className="bg-[#ffffff0a] rounded-[12px] rounded-b-[0] border border-[#ffffff66] border-b-[transparent] p-[20px] absolute bottom-0">
              <img src={liner} alt="liner" />
            </div>
          </li>

          {/* Card 3 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] px-[24px] py-[32px] text-center w-full sm:w-[300px] md:w-[350px] lg:w-auto">
            <h3 className="text-[24px] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]">
            {t('about.about_card3_title')}
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full min-w-[300px] mx-auto">
            {t('about.about_card3_text')}
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
            {t('about.about_card4_title')}
            </h3>
            <p className="text-[#9B9CA1] text-[14px] sm:text-[16px] mt-[16px] pb-[24px] w-full max-w-[531px]">
            {t('about.about_card4_text')}
            </p>

            <img src={img} alt="img" className="absolute bottom-0" />
          </li>

          {/* Card 2 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[32px] w-full sm:w-[300px] md:w-[350px] lg:w-[49%]">
            <h3 className="text-[32px] sm:text-[48px] font-bold leading-[120%] text-[#FBFBFB] w-full max-w-[540px]">
            {t('about.about_card5_title')}
            </h3>
            <p className="text-[#9B9CA1] text-[14px] sm:text-[16px] mt-[16px] w-full max-w-[550px]">
            {t('about.about_card5_text')}
            </p>
            <button className="bg-[#4266B1] text-[#fff] text-[14px] sm:text-[16px] rounded-[24px] px-6 py-3 font-medium cursor-pointer w-full sm:w-auto mt-[56px]">
            {t('about.about_card5_button')}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
