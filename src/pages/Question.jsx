import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-[120px]">
      <div className="container">
        <button
          style={{
            background:
              'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
            boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px)',
          }}
          className="text-[#FFFFFF] text-[16px] sm:text-[20px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] sm:py-[16px] leading-[100%] mx-auto cursor-pointer w-full sm:w-auto block"
        >
          Qiziqarli savollar
        </button>

        <h2 className="text-center text-white text-[28px] sm:text-[48px] leading-[100%] font-medium mt-[12px] sm:mt-[24px] tracking-[0.48px]">
          Ko‘p so‘raladigan savollar
        </h2>

        <p className="text-center text-white text-[16px] sm:text-[20px] leading-[140%] mt-[16px] sm:mt-[24px] tracking-[0.20px] w-full max-w-[680px] mx-auto">
          Savollaringiz bo‘lsa, bemalol biz bilan bog‘laning – biz doimo yordam
          berishga tayyormiz!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[48px]">
          {/* Left Side */}
          <div>
            <div
              className="backdrop-blur-[5px] rounded-[24px] p-[24px] cursor-pointer question border border-transparent"
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              onClick={() => toggleAccordion(1)}
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-white cursor-pointer"
                >
                  <span className="text-2xl">Marketing strategiyalar</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      openIndex === 1 ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              {/* Accordion Content with Animation */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === 1
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-[24px] text-gray-300">
                  Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun
                  Telegram botlar, mobil ilovalar va veb-saytlar yaratish
                  bo‘yicha eng ishonchli hamkoringiz! Bizning jamoamiz
                  texnologiyalarni biznesga joriy etish orqali mijozlarga
                  samarali yechimlar taqdim etadi. Sifat va tezkor xizmat –
                  bizning ustuvor maqsadimiz!
                </div>
              </motion.div>
            </div>

            <div
              className="backdrop-blur-[5px] rounded-[24px] p-[24px] cursor-pointer question border border-transparent my-4"
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              onClick={() => toggleAccordion(2)}
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-white cursor-pointer"
                >
                  <span className="text-2xl">Marketing strategiyalar</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      openIndex === 2 ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              {/* Accordion Content with Animation */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === 2
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-[24px] text-gray-300">
                  Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun
                  Telegram botlar, mobil ilovalar va veb-saytlar yaratish
                  bo‘yicha eng ishonchli hamkoringiz! Bizning jamoamiz
                  texnologiyalarni biznesga joriy etish orqali mijozlarga
                  samarali yechimlar taqdim etadi. Sifat va tezkor xizmat –
                  bizning ustuvor maqsadimiz!
                </div>
              </motion.div>
            </div>

            <div
              className="backdrop-blur-[5px] rounded-[24px] p-[24px] cursor-pointer question border border-transparent"
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              onClick={() => toggleAccordion(3)}
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-white cursor-pointer"
                >
                  <span className="text-2xl">Marketing strategiyalar</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      openIndex === 3 ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              {/* Accordion Content with Animation */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === 3
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-[24px] text-gray-300">
                  Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun
                  Telegram botlar, mobil ilovalar va veb-saytlar yaratish
                  bo‘yicha eng ishonchli hamkoringiz! Bizning jamoamiz
                  texnologiyalarni biznesga joriy etish orqali mijozlarga
                  samarali yechimlar taqdim etadi. Sifat va tezkor xizmat –
                  bizning ustuvor maqsadimiz!
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div>

            <div
              className="backdrop-blur-[5px] rounded-[24px] p-[24px] cursor-pointer question border border-transparent"
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              onClick={() => toggleAccordion(4)}
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-white cursor-pointer"
                >
                  <span className="text-2xl">Marketing strategiyalar</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      openIndex === 4 ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              {/* Accordion Content with Animation */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === 4
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-[24px] text-gray-300">
                  Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun
                  Telegram botlar, mobil ilovalar va veb-saytlar yaratish
                  bo‘yicha eng ishonchli hamkoringiz! Bizning jamoamiz
                  texnologiyalarni biznesga joriy etish orqali mijozlarga
                  samarali yechimlar taqdim etadi. Sifat va tezkor xizmat –
                  bizning ustuvor maqsadimiz!
                </div>
              </motion.div>
            </div>

            <div
              className="backdrop-blur-[5px] rounded-[24px] p-[24px] cursor-pointer question border border-transparent my-4"
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              onClick={() => toggleAccordion(5)}
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-white cursor-pointer"
                >
                  <span className="text-2xl">Marketing strategiyalar</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      openIndex === 5 ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              {/* Accordion Content with Animation */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === 5
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-[24px] text-gray-300">
                  Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun
                  Telegram botlar, mobil ilovalar va veb-saytlar yaratish
                  bo‘yicha eng ishonchli hamkoringiz! Bizning jamoamiz
                  texnologiyalarni biznesga joriy etish orqali mijozlarga
                  samarali yechimlar taqdim etadi. Sifat va tezkor xizmat –
                  bizning ustuvor maqsadimiz!
                </div>
              </motion.div>
            </div>

            <div
              className="backdrop-blur-[5px] rounded-[24px] p-[24px] cursor-pointer question border border-transparent"
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              onClick={() => toggleAccordion(6)}
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-white cursor-pointer"
                >
                  <span className="text-2xl">Marketing strategiyalar</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      openIndex === 6 ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              {/* Accordion Content with Animation */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === 6
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-[24px] text-gray-300">
                  Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun
                  Telegram botlar, mobil ilovalar va veb-saytlar yaratish
                  bo‘yicha eng ishonchli hamkoringiz! Bizning jamoamiz
                  texnologiyalarni biznesga joriy etish orqali mijozlarga
                  samarali yechimlar taqdim etadi. Sifat va tezkor xizmat –
                  bizning ustuvor maqsadimiz!
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
