import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../assets/image/portfolio.png';
import { useLocation } from 'react-router-dom';
import WorkPage from './WorkPage';
import Question from './Question';
import Customers from './Customers';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';



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
  const {t}= useTranslation()

  const portfolioSteps = [
    {
      id: 1,
      title: t('services.services_card1_title'),
      text: t('services.services_card1_text'),
      image: portfolio,
    },
    {
      id: 2,
      title: t('services.services_card2_title'),
      text: t('services.services_card2_text'),
      image: portfolio,
    },
    {
      id: 3,
      title: t('services.services_card3_title'),
      text: t('services.services_card3_text'),
      image: portfolio,
    },
  ];

  if (location.pathname === '/services') {
    return (
      <main>
        <section className="pt-[120px]">
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
                    <p className="text-[16px] sm:text-lg text-[#ffffff99]  mt-[12px] sm:mt-[16px] leading-[140%]">
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
      <section className="pt-[100px] lg:pt-[200px]">
        <div className="container px-4 md:px-8">
          {location.pathname === '/services' ? (
            ''
          ) : (
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={titleVariants}
              viewport={{ once: true }}
              className="text-center text-[32px] sm:text-[48px] lg:text-[96px] font-semibold leading-[120%] tracking-[0.96px] max-w-[90%] lg:max-w-[660px] mx-auto bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
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
            className="text-[#FFFFFF] text-[18px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] leading-[100%] mx-auto w-full sm:w-auto block mt-[32px]"
          >
            Bizning xizmatlar
          </button>

          <ul className="space-y-[40px] sm:space-y-[60px] lg:space-y-[80px] pt-[60px] sm:pt-[90px] lg:pt-[120px]">
            {portfolioSteps.map((step, index) => (
              <li
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-[24px] sm:gap-[48px]  ${
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
                      border: '1.5px solid',
                      borderImageSource:
                        'linear-gradient(360deg, rgba(0, 0, 240, 0.12) -13.08%, rgba(255, 255, 255, 0.12) 119.23%)',
                    }}
                    className="text-[#FFFFFF] text-[16px] font-semibold rounded-[48px] px-[24px] py-[12px] leading-[100%] mx-auto md:mx-0"
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
    );
  }
};

export default Services;
