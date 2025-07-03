import  { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import questions from '../mock/questions';
import { useTranslation } from 'react-i18next';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [show, setShow] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionsData = questions(t);

  return (
    <section className="pt-[80px] md:pt-[120px]">
      <div className="container">
        <button
          style={{
            background:
              'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
            boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px)',
          }}
          className="text-[#FFFFFF] text-[12px]  sm:text-[18px] rounded-[48px] px-[32px] py-[12px] leading-[100%] sm:leading-[150%] mx-auto block"
        >
          {t('question_page.question_subtitle')}
        </button>

        <h2 className="text-center text-white text-[28px] sm:text-[48px] leading-[100%] font-medium mt-[12px] sm:mt-[24px] tracking-[0.48px]">
          {t('question_page.question_title')}
        </h2>

        <p className="text-center text-white text-[16px] sm:text-[20px] leading-[140%] mt-[16px] sm:mt-[24px] tracking-[0.20px] w-full max-w-[680px] mx-auto">
          {t('question_page.question_text')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[48px]">
          <div
            className="flex flex-col gap-4 md:gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <AnimatePresence>
              {questionsData
                ?.slice(0, show ? questionsData.length : 3)
                .map((item) => (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    key={item.id}
                    className="backdrop-blur-[2px] rounded-[24px] p-[24px] md:p-[36px] lg:p-[48px] cursor-pointer border border-[#464850] question"
                    style={{
                      background:
                        'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                    }}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <h2>
                      <button
                        type="button"
                        className="flex justify-between w-full text-white cursor-pointer"
                      >
                        <span className="text-[20px] md:text-[28px] lg:text-[32px] leading-[120%] font-medium w-full max-w-[490px] text-left">
                          {item.title}
                        </span>
                        <svg
                          className={`w-8 h-8 transform ${
                            openIndex === item.id ? 'rotate-180' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M26.5604 11.9331L17.8671 20.6264C16.8404 21.6531 15.1604 21.6531 14.1338 20.6264L5.44043 11.9331"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </h2>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        openIndex === item.id
                          ? { height: 'auto', opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-[24px] text-gray-300 text-[18px] md:text-2xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <button
            className="md:hidden px-[24px] py-[12px] bg-transparent border border-[#61A6FF] text-[#61A6FF] text-[16px] font-medium w-fit rounded-[24px] mx-auto"
            onClick={() => setShow(!show)}
          >
            {show ? t('small_info') : t('more_info')}
          </button>

          <div
            className="hidden md:flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {questionsData?.slice(3).map((item) => (
              <div
                key={item.id}
                className="backdrop-blur-[2px] rounded-[24px] p-[24px] md:p-[36px] lg:p-[48px] cursor-pointer border border-[#464850] question"
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                }}
                onClick={() => toggleAccordion(item.id)}
              >
                <h2>
                  <button
                    type="button"
                    className="flex justify-between w-full text-white cursor-pointer"
                  >
                    <span className="text-[20px] md:text-[28px] lg:text-[32px] leading-[120%] font-medium w-full max-w-[490px] text-left">
                      {item.title}
                    </span>
                    <svg
                      className={`w-8 h-8 transform ${
                        openIndex === item.id ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M26.5604 11.9331L17.8671 20.6264C16.8404 21.6531 15.1604 21.6531 14.1338 20.6264L5.44043 11.9331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </h2>

                {/* Accordion Content with Animation */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === item.id
                      ? { height: 'auto', opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-[24px] text-gray-300 text-[18px] md:text-2xl">
                    {item.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
