import React from 'react';
import InfiniteCarousel from '../components/InfiniteCarousel';
import img from '../assets/image/card3-img2.jpg';
import { motion } from 'framer-motion';

const Customers = () => {
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
          className="text-[#FFFFFF] text-[16px] md:text-[18px] rounded-[48px] px-[24px] md:px-[32px] py-[10px] md:py-[12px] leading-[100%] mx-auto block"
        >
          Mijozlar fikrlari
        </button>

        <h2 className="text-center text-white text-[32px] md:text-[48px] leading-[120%] font-medium mt-[16px] md:mt-[24px] tracking-[0.48px]">
          Mijozlarimizning fikrlari
        </h2>

        <p className="text-center text-white text-[16px] md:text-[20px] leading-[140%] mt-[12px] md:mt-[16px] tracking-[0.20px] w-full max-w-[680px] mx-auto">
          Siz ham Manasoft tajribasidan foydalaning va biznesingizni keyingi
          bosqichga olib chiqing!
        </p>
      </div>

       <div className='mt-[48px]'>
       <InfiniteCarousel>
          <motion.div>
            <div className="w-[485px] p-[24px] md:p-[32px] border border-[#333] rounded-[20px] md:rounded-[30px] bg-[#ffffff0a] text-white mr-[16px] md:mr-[24px]">
            <div className="flex items-center gap-[8px] md:gap-[12px]">
              <img
                className="rounded-full"
                src={img}
                alt="Portfolio"
                width={48}
                height={48}
              />
              <h3 className="text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Lola Williams (Creative Designer)
              </h3>
            </div>
            <p className="text-[16px] md:text-[18px] leading-[150%] mt-[12px] md:mt-[16px] w-full max-w-[420px] mx-auto">
              "Manasoft team has been amazing to work with! They developed a
              custom Telegram bot for us, which accelerated the process of
              providing services to our clients. Now we can serve our clients
              faster and more efficiently."
            </p>
            </div>
          </motion.div>

          <motion.div>
            <div className="w-[485px] p-[24px] md:p-[32px] border border-[#333] rounded-[20px] md:rounded-[30px] bg-[#ffffff0a] text-white mr-[16px] md:mr-[24px]">
            <div className="flex items-center gap-[8px] md:gap-[12px]">
              <img
                className="rounded-full"
                src={img}
                alt="Portfolio"
                width={48}
                height={48}
              />
              <h3 className="text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Lola Williams (Creative Designer)
              </h3>
            </div>
            <p className="text-[16px] md:text-[18px] leading-[150%] mt-[12px] md:mt-[16px] w-full max-w-[420px] mx-auto">
              "Manasoft team has been amazing to work with! They developed a
              custom Telegram bot for us, which accelerated the process of
              providing services to our clients. Now we can serve our clients
              faster and more efficiently."
            </p>
            </div>
          </motion.div>
          <motion.div>
            <div className="w-[485px] p-[24px] md:p-[32px] border border-[#333] rounded-[20px] md:rounded-[30px] bg-[#ffffff0a] text-white mr-[16px] md:mr-[24px]">
            <div className="flex items-center gap-[8px] md:gap-[12px]">
              <img
                className="rounded-full"
                src={img}
                alt="Portfolio"
                width={48}
                height={48}
              />
              <h3 className="text-[20px] md:text-[24px] font-semibold leading-[120%]">
                Lola Williams (Creative Designer)
              </h3>
            </div>
            <p className="text-[16px] md:text-[18px] leading-[150%] mt-[12px] md:mt-[16px] w-full max-w-[420px] mx-auto">
              "Manasoft team has been amazing to work with! They developed a
              custom Telegram bot for us, which accelerated the process of
              providing services to our clients. Now we can serve our clients
              faster and more efficiently."
            </p>
            </div>
          </motion.div>
        </InfiniteCarousel>
       </div>
    </section>
  );
};

export default Customers;
