import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import workPage from '../mock/workPage';

const WorkPage = () => {
  const { t } = useTranslation();
  const workPageData = workPage(t);

  return (
    <section className="pt-[80px] md:pt-[120px]">
      <div className="container">
        <h2 className="text-[32px] md:text-[48px] font-medium leading-[120%] text-[#fff] md:text-center">
          {t('workpage.workpage_title')}
        </h2>
        <p className="text-[16px] md:text-[20px] text-[#ffffffcc] leading-[140%] tracking-[0.2px] mt-[12px] md:mt-[16px] w-full max-w-[750px] mx-auto md:text-center">
          {t('workpage.workpage_text')}
        </p>

        <h3 className="text-[24px] md:text-[32px] text-[#ffffff] leading-[140%] tracking-[0.2px] mt-[32px] md:mt-[48px] font-medium md:text-center">
          {t('workpage.workpage_subtitle1')}
        </h3>

        <div className="md:hidden block mt-[16px] relative">
          <Swiper
            spaceBetween={50}
            loop={true}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
            }}
            modules={[Pagination]}
            className=" sm:h-[220px]  md:h-[280px] mySwiper"
          >
            {workPageData.slice(0,3).map((item) => (
              <SwiperSlide key={item.id}>
                <li
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(2px)',
                    border: '1px solid #6F727C',
                    borderRadius: '24px',
                  }}
                  className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
                >
                  <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                    {item.title}
                  </h4>
                  <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                    {item.text}
                  </p>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-[20px] md:mt-0 flex justify-center">
            <div className="custom-pagination custom"></div>
          </div>
        </div>

        <ul className="hidden md:grid grid-cols-3 gap-[24px] mt-[24px]">
          {workPageData.slice(0, 3).map((item) => (
            <li
              key={item.id}
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(2px)',
                border: '1px solid #6F727C',
                borderRadius: '24px',
              }}
              className="p-[32px] text-white"
            >
              <h4 className="text-[24px] font-semibold leading-[120%]">
                {item.title}
              </h4>
              <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="text-[24px] md:text-[32px] text-[#ffffff] leading-[140%] tracking-[0.2px] mt-[32px] md:mt-[48px] font-medium  md:text-center">
          {t('workpage.workpage_subtitle2')}
        </h3>

        <div className="md:hidden block mt-[16px] relative">
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              el: '.custom-pagination1',
              clickable: true,
            }}
            modules={[Pagination]}
            className="sm:h-[220px] md:h-[280px]  mySwiper"
          >
            {workPageData.slice(3).map((item) => (
              <SwiperSlide key={item.id}>
                <li
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(2px)',
                    border: '1px solid #6F727C',
                    borderRadius: '24px',
                  }}
                  className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
                >
                  <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                    {item.title}
                  </h4>
                  <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                    {item.text}
                  </p>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-[20px] md:mt-0 flex justify-center">
            <div className="custom-pagination1 custom"></div>
          </div>
        </div>

        <ul className="hidden md:grid grid-cols-3 gap-[24px] mt-[24px]">
          {workPageData.slice(3, 7).map((item) => (
            <li
              key={item.id}
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(2px)',
                border: '1px solid #6F727C',
                borderRadius: '24px',
              }}
              className="p-[32px] text-white"
            >
              <h4 className="text-[24px] font-semibold leading-[120%]">
                {item.title}
              </h4>
              <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkPage;
