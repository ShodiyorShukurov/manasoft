import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import WorkPage from './WorkPage';
import Question from './Question';
import Customers from './Customers';
import ContactForm from './ContactForm';
import Partners from './Partners';
import { useTranslation } from 'react-i18next';
import crm from '../assets/image/crm.png';
import mobileApp from '../assets/image/mobile-apps.png';
import VebSayt from '../assets/image/veb-sayt.png';
import telegramBot1 from '../assets/image/telegram_bot1.png';
import telegramBot2 from '../assets/image/telegram_bot2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import servicesPage from '../mock/servicesPage';

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Services = () => {
  const location = useLocation();
  const { t } = useTranslation();

  if (location.pathname === '/services') {
    const servicesData = servicesPage(t);

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname === '/services']);

    return (
      <main>
        <section className="pt-[60px] md:pt-[80px] lg:pt-[120px]  ">
          <div className="container">
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[120%] text-center text-[#fff] max-w-[830px] mx-auto">
              {t('services.services_page_title')}
            </h2>
            <p className="text-[16px] md:text-[20px] leading-[140%] text-center text-[#ffffffcc] max-w-[830px] mx-auto mt-[12px] md:mt-[16px]">
              {t('services.services_page_text')}
            </p>

            <ul className="mt-[64px] md:mt-[90px] space-y-16 md:space-y-24">
              {servicesData.map((item) => (
                <li
                  key={item.id}
                  className={`grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-12 items-center ${
                    item.id % 2 === 0 ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  {/* Chap (Matn) */}
                  <div className="md:[direction:ltr] text-[#ffffffcc] ">
                    <button
                      style={{
                        background:
                          'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                        boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(30px)',
                      }}
                      className="text-white text-[12px] sm:text-[18px] rounded-[48px] px-[32px] py-3 leading-[100%] sm:leading-[150%]"
                    >
                      {item.subtitle}
                    </button>

                    <h3 className="text-[28px] md:text-[36px] font-semibold leading-[110%] md:leading-[120%] text-white mt-[24px] md:mt-[32px] max-w-[560px]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] md:text-[20px] leading-[140%] mt-[12px] md:mt-[16px] max-w-[590px]">
                      {item.text}
                    </p>
                    <p className="text-[16px] md:text-[20px] leading-[140%] mt-[12px] md:mt-[16px]">
                      {t('services.services')}
                    </p>
                    <ul
                      style={{ listStyle: 'inside' }}
                      className="text-[16px] md:text-[20px] leading-[140%]"
                    >
                      {item.services.split(', ').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>

                  {/* O'ng (Rasm) */}
                  <div
                    style={{
                      borderRadius: '30px',
                      border: '2px solid #464850',
                      background:
                        'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(0, 0, 255, 0.20) 0%, rgba(0, 0, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                      backdropFilter: 'blur(120px)',
                    }}
                    className="p-[32px]"
                  >
                    <img className='w-full max-w-[600px] h-full max-h-[550px] mx-auto' src={item?.img} alt={item.title}/>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <WorkPage />
        <Customers />
        <Question />
        <Partners />
        <ContactForm />
      </main>
    );
  } else {
    return (
      <section className="pt-[60px] md:pt-[80px] lg:pt-[120px]">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
            viewport={{ once: true }}
            className="text-center text-[48px] sm:text-[72px] lg:text-[96px] font-semibold leading-[120%] tracking-[0.96px]  lg:max-w-[1200px] mx-auto bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
          >
            {t('services.services_home_title1')
              .split('')
              .map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
          </motion.h2>

          <button
            style={{
              background:
                'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
              boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(30px)',
            }}
            className="text-[#FFFFFF] text-[12px] sm:text-[18px] rounded-[48px] px-[32px] py-[12px] leading-[100%] sm:leading-[150%] mx-auto block mt-[42px] md:mt-[96px]"
          >
            {t('services.services_home_text1')}
          </button>

          <h3 className="text-center text-[32px] sm:text-[40px] md:text-[48px] text-[#fff] font-medium leading-[120%] mx-auto mt-[16px] sm:mt-[24px]">
            {t('services.services_home_title2')}
          </h3>
          <p className="text-center text-[16px] sm:text-[20px] text-[#fff] leading-[140%] mx-auto mt-[12px] sm:mt-[16px] w-full max-w-[760px]">
            {t('services.services_home_text2')}
          </p>

          <ul className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 pt-[48px]">
            <li
              style={{
                background:
                  'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
              }}
              className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
            >
              <h4 className="xl:text-[32px] md:text-[28px] leading-[120%] font-medium">
                {t('services.services_home_card1_title')}
              </h4>
              <p className="text-[18px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                {t('services.services_home_card1_text')}
              </p>
              <img
                className="mx-auto mt-[46px] w-[450px] h-auto object-cover"
                src={crm}
                alt="crm"
                loading="lazy"
              />
            </li>

            <li
              style={{
                background:
                  'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
              }}
              className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
            >
              <h4 className="xl:text-[32px] md:text-[28px] leading-[120%] font-medium">
                {t('services.services_home_card2_title')}
              </h4>
              <p className="text-[18px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                {t('services.services_home_card2_text')}
              </p>
              <img
                className="mx-auto mt-[46px] w-[450px] h-auto object-cover"
                src={mobileApp}
                alt="mobileApp"
                loading="lazy"
              />
            </li>

            <li
              style={{
                background:
                  'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
              }}
              className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
            >
              <h4 className="xl:text-[32px] md:text-[28px] leading-[120%] font-medium">
                {t('services.services_home_card3_title')}
              </h4>
              <p className="text-[18px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                {t('services.services_home_card3_text')}
              </p>
              <div className="flex justify-center gap-4 items-center mt-[46px] ">
                <img
                  src={telegramBot1}
                  alt="telegram bot"
                  className="w-[140px] h-full max-h-[300px]"
                  loading="lazy"
                />
                <img
                  src={telegramBot2}
                  alt="telegram bot"
                  className="w-[140px] h-full max-h-[300px]"
                  loading="lazy"
                />
              </div>
            </li>

            <li
              style={{
                background:
                  'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
              }}
              className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
            >
              <h4 className="xl:text-[32px] md:text-[28px] leading-[120%] font-medium">
                {t('services.services_home_card4_title')}
              </h4>
              <p className="text-[18px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                {t('services.services_home_card4_text')}
              </p>
              <img
                className="mx-auto mt-[46px] w-[450px] h-auto object-cover"
                src={VebSayt}
                alt="VebSayt"
                loading="lazy"
              />
            </li>
          </ul>

          <div className="md:hidden block mt-[32px] relative">
            <Swiper
              spaceBetween={30}
              loop={true}
              pagination={{
                el: '.custom-pagination3',
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[420px] sm:h-[540px] mySwiper"
            >
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                  }}
                  className="p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55] max-h-[350px] sm:min-h-[450px] h-full flex flex-col gap-3 sm:gap-6"
                >
                  <h4 className="text-[24px] sm:text-[28px] leading-[120%] font-medium">
                    {t('services.services_home_card1_title')}
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    {t('services.services_home_card1_text')}
                  </p>
                  <div className="mx-auto">
                    <img
                      className="w-[350px] sm:w-[400px]"
                      src={crm}
                      alt="crm"
                    />
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                  }}
                  className="p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55] max-h-[350px] sm:min-h-[450px] h-full flex flex-col gap-3 sm:gap-6"
                >
                  <h4 className="text-[24px] sm:text-[28px] leading-[120%] font-medium">
                    {t('services.services_home_card2_title')}
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    {t('services.services_home_card2_text')}
                  </p>
                  <div className="mx-auto">
                    <img
                      className=" w-[350px] sm:w-[400px]"
                      src={mobileApp}
                      alt="mobileApp"
                    />
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                  }}
                  className="p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55] max-h-[350px] sm:min-h-[450px] h-full flex flex-col gap-3 sm:gap-6"
                >
                  <h4 className="text-[24px] sm:text-[28px] leading-[120%] font-medium">
                    {t('services.services_home_card3_title')}
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    {t('services.services_home_card3_text')}
                  </p>
                  <div className="flex justify-center gap-4 items-center">
                    <img
                      // style={{ height: '180px' }}
                      src={telegramBot1}
                      alt="telegram bot"
                      className="w-[100px] sm:w-[140px] object-cover "
                    />
                    <img
                      // style={{ height: '180px' }}
                      src={telegramBot2}
                      alt="telegram bot"
                      className="w-[100px] sm:w-[140px] object-cover "
                    />
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                  }}
                  className="p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55] max-h-[350px] sm:min-h-[450px] h-full flex flex-col gap-3 sm:gap-6"
                >
                  <h4 className="text-[24px] sm:text-[28px] leading-[120%] font-medium">
                    {t('services.services_home_card4_title')}
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    {t('services.services_home_card4_text')}
                  </p>
                  <div className="mx-auto">
                    {' '}
                    <img
                      className=" w-[350px] sm:w-[400px]"
                      src={VebSayt}
                      alt="VebSayt"
                    />
                  </div>
                </li>
              </SwiperSlide>
            </Swiper>

            <div className="md:mt-0 flex justify-center">
              <div className="custom-pagination3 custom"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Services;
