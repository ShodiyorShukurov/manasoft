import React from "react";
import { motion } from "framer-motion";
import portfolio from "../assets/image/portfolio.png";

const Portfolio = () => {
  return (
    <section className="py-[100px] lg:py-[200px]">
      <div className="container px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-[32px] sm:text-[48px] lg:text-[96px] font-semibold leading-[120%] tracking-[0.96px] max-w-[90%] lg:max-w-[660px] mx-auto bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
        >
          Texnologiya va Tajribani Birlashtiring
        </motion.h2>

        <ul className="space-y-[40px] sm:space-y-[60px] lg:space-y-[80px] pt-[60px] sm:pt-[90px] lg:pt-[120px]">
          {[1, 2, 3].map((item, index) => (
            <li
              key={item}
              className="flex flex-col-reverse md:flex-row items-center gap-[24px] sm:gap-[48px]"
            >
              {/* Left Content (Matn) */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="md:w-1/2 text-white text-center md:text-left"
              >
                <button
                  style={{
                    background:
                      "linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)",
                    boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(30px)",
                  }}
                  className="text-[#FFFFFF] text-[18px] sm:text-[20px] rounded-[48px] px-[24px] sm:px-[32px] py-[12px] sm:py-[16px] leading-[100%] mx-auto md:mx-0 cursor-pointer"
                >
                  0{item}
                </button>
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[120%] mt-[24px] sm:mt-[32px]">
                  Telegram botlar
                </h3>
                <p className="text-[16px] sm:text-lg text-[#ffffff99] leading-relaxed mt-[12px] sm:mt-[16px] leading-[140%]">
                  Manasoft Telegram botlar, mobil ilovalar, web-saytlar hamda
                  CRM va ERP tizimlari orqali biznesingizni avtomatlashtirib,
                  uni keyingi bosqichga olib chiqishga yordam beradi.
                </p>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="md:w-1/2 flex justify-center"
              >
                <div className="w-full max-w-[500px] sm:max-w-[630px]">
                  <img
                    src={portfolio}
                    alt="Manasoft Preview"
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
};

export default Portfolio;
