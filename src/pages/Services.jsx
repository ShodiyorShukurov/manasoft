import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import WorkPage from './WorkPage';
import Question from './Question';
import Customers from './Customers';
import ContactForm from './ContactForm';
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
    return (
      <main>
        <section className="pt-[120px] md:pt-[80px] sm:pt-[60px]">
          <div className="container px-4 md:px-8">
            <button
              style={{
                background:
                  'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(30px)',
              }}
              className="text-[#FFFFFF] text-[16px] sm:text-[20px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] leading-[100%] mx-auto w-full sm:w-auto block"
            >
              Bizning xizmatlar
            </button>

            <ul className="space-y-[40px] sm:space-y-[60px] lg:space-y-[80px] pt-[60px] sm:pt-[90px] lg:pt-[120px]">
              {portfolioSteps.map((step, index) => (
                <li
                  key={step.id}
                  className={`flex flex-col md:flex-row items-center gap-[24px] sm:gap-[48px] ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Content (Text) */}
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="md:w-1/2 text-white text-center md:text-left"
                  >
                    <button
                      style={{
                        background:
                          'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                        boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(30px)',
                      }}
                      className="text-[#FFFFFF] text-[18px] sm:text-[20px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] sm:py-[16px] leading-[100%] mx-auto md:mx-0 cursor-pointer"
                    >
                      {step.id < 10 ? `0${step.id}` : step.id}
                    </button>
                    <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[120%] mt-[24px] sm:mt-[32px]">
                      {step.title}
                    </h3>
                    <p className="text-[16px] sm:text-lg text-[#ffffff99] mt-[12px] sm:mt-[16px] leading-[140%]">
                      {step.text}
                    </p>
                  </motion.div>

                  {/* Right Image */}
                  <motion.div
                    initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="md:w-1/2 flex justify-center"
                  >
                    <div className="w-full max-w-[500px] sm:max-w-[630px]">
                      <img
                        src={step.image}
                        alt="Portfolio Preview"
                        className="w-full h-auto"
                        width={630}
                      />
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <WorkPage />
        <Customers />
        <Question />
        <ContactForm />
      </main>
    );
  } else {
    return (
      <section className="pt-[60px] md:pt-[80px] sm:pt-[120px]">
        <div className="container px-4 md:px-8">
          {location.pathname === '/services' ? (
            ''
          ) : (
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={titleVariants}
              viewport={{ once: true }}
              className="text-center text-[48px] sm:text-[72px] lg:text-[96px] font-semibold leading-[120%] tracking-[0.96px]  lg:max-w-[1200px] mx-auto bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
            >
              {'Texnologiya va Tajribani Birlashtiring'
                .split('')
                .map((letter, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
            </motion.h2>
          )}

          <button
            style={{
              background:
                'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
              boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(30px)',
            }}
            className="text-[#FFFFFF] text-[12px] sm:text-[18px] rounded-[48px] px-[32px] py-[12px] leading-[150%] mx-auto block mt-[42px] md:mt-[96px]"
          >
            Bizning xizmatlar
          </button>

          <h3 className="text-center text-[32px] sm:text-[40px] md:text-[48px] text-[#fff] font-medium leading-[120%] mx-auto mt-[16px] sm:mt-[24px]">
            Biznesingiz uchun mukammal IT yechimlar
          </h3>
          <p className="text-center text-[16px] sm:text-[20px] text-[#fff] leading-[140%] mx-auto mt-[12px] sm:mt-[16px] w-full max-w-[760px]">
            Manasoft – IT dunyosida ishonchli hamkoringiz! Biz veb-sayt va mobil
            ilovalar va boshqa ilg‘or texnologik yechimlarni taklif qilamiz.
          </p>

          <ul className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 pt-[48px]">
            <li
              style={{
                background:
                  'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
              }}
              className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
            >
              <h4 className="text-[32px] md:text-[28px] sm:text-[24px] leading-[120%] font-medium">
                CRM/ERP Tizimlari
              </h4>
              <p className="text-[18px] md:text-[16px] sm:text-[14px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                CRM va ERP tizimlari orqali jarayonlaringizni optimallashtiring,
                samaradorlikni oshiring va biznesingizni raqamlashtiring.
              </p>
              <img
                className="mx-auto mt-[46px] w-[450px] h-auto object-cover"
                src={crm}
                alt="crm"
              />
            </li>

            <li
              style={{
                background:
                  'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
              }}
              className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
            >
              <h4 className="text-[32px] md:text-[28px] sm:text-[24px] leading-[120%] font-medium">
                Mobil ilovalar
              </h4>
              <p className="text-[18px] md:text-[16px] sm:text-[14px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                iOS va Android uchun zamonaviy va tezkor mobil ilovalar
                yaratamiz. Mahsulotingizni yangi bosqichga olib chiqing!
              </p>
              <img
                className="mx-auto mt-[46px] w-[450px] h-auto object-cover"
                src={mobileApp}
                alt="mobileApp"
              />
            </li>

            <li
              style={{
                background:
                  'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
              }}
              className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
            >
              <h4 className="text-[32px] md:text-[28px] sm:text-[24px] leading-[120%] font-medium">
                Telegram botlar
              </h4>
              <p className="text-[18px] md:text-[16px] sm:text-[14px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                Telegram botlar orqali mijozlaringiz bilan xizmatlarni
                avtomatlashtiring va biznesingizni rivojlantiring!
              </p>
              <div className="flex justify-center gap-4 items-center mt-[46px] ">
                <img
                  src={telegramBot1}
                  alt="telegram bot"
                  className="w-[140px] h-full max-h-[300px]"
                />
                <img
                  src={telegramBot2}
                  alt="telegram bot"
                  className="w-[140px] h-full max-h-[300px]"
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
              <h4 className="text-[32px] md:text-[28px] sm:text-[24px] leading-[120%] font-medium">
                Veb saytlar
              </h4>
              <p className="text-[18px] md:text-[16px] sm:text-[14px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                Biznesingizga mos, tezkor va zamonaviy veb-saytlar yaratamiz.
                Raqobatchilardan ajralib turish uchun biz bilan bog‘laning!
              </p>
              <img
                className="mx-auto mt-[46px] w-[450px] h-auto object-cover"
                src={VebSayt}
                alt="VebSayt"
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
                    CRM/ERP Tizimlari
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    CRM va ERP tizimlari orqali jarayonlaringizni
                    optimallashtiring, samaradorlikni oshiring va biznesingizni
                    raqamlashtiring.
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
                    Mobil ilovalar
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    iOS va Android uchun zamonaviy va tezkor mobil ilovalar
                    yaratamiz. Mahsulotingizni yangi bosqichga olib chiqing!
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
                    Telegram botlar
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    Telegram botlar orqali mijozlaringiz bilan xizmatlarni
                    avtomatlashtiring va biznesingizni rivojlantiring!
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
                    Veb saytlar
                  </h4>
                  <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                    Biznesingizga mos, tezkor va zamonaviy veb-saytlar
                    yaratamiz. Raqobatchilardan ajralib turish uchun biz bilan
                    bog‘laning!
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
