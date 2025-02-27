import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-[80px] sm:py-[120px]">
      <div className="container">
        <button
          style={{
            background:
              'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
            boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px)',
          }}
          className="text-[#FFFFFF] text-[16px] sm:text-[20px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] leading-[100%] mx-auto w-auto block"
        >
          {t('about.about_text')}
        </button>

        <h2 className="text-center text-white text-[32px] sm:text-[48px] leading-[120%] font-medium mt-[24px] sm:mt-[64px] tracking-[0.48px]">
          {t('about.about_title')}
        </h2>

        <p className="text-center text-white text-[16px] sm:text-[20px] leading-[140%] mt-[12px] sm:mt-[24px] w-full max-w-[886px] mx-auto">
          {t('about.about_subtitle')}
        </p>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[24px] mt-[32px] sm:mt-[48px] cursor-pointer text-[#fff]">
          {/* Card 1 */}
          <li
            className="bg-[#ffffff0a] border border-[#333] rounded-[24px] p-[16px] sm:p-[32px] text-center 
                 row-start-2 lg:row-start-1"
          >
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              30+
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              Tugallangan loyihalar
            </p>
          </li>

          {/* Card 2 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[24px] py-[32px] px-[16px] sm:p-[32px]  text-center col-span-2 row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              28M+
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              Umumiy raqam foydalanuvchilar
            </p>
          </li>

          {/* Card 3 */}
          <li
            className="bg-[#ffffff0a] border border-[#333] rounded-[24px] p-[16px] sm:p-[32px] text-center 
                 row-start-2 lg:row-start-1"
          >
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              5+
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              Tajriba yillari dan sohasida
            </p>
          </li>
        </ul>

        <ul className="grid grid-cols-2 lg:grid-cols-3 text-[#fff] gap-[16px] sm:gap-[24px] mt-[16px] sm:mt-[24px]">
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[24px]  p-[16px] sm:p-[32px]  text-center row-start-2 lg:row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">11+</h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              Telegramma botlar
            </p>
          </li>

          <li className="bg-[#ffffff0a] col-span-2 lg:col-span-1 border border-[#333] rounded-[24px]  p-[16px] sm:p-[32px]  text-center row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">16+</h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              Mobil ilovalar
            </p>
          </li>

          <li className="bg-[#ffffff0a] border border-[#333] rounded-[24px]  p-[16px] sm:p-[32px]  text-center row-start-2 lg:row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">4+</h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              Veb platformalar
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
