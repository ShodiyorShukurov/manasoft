import React from 'react';
import cardLogo1 from '../assets/logo/card-logo1.svg';
import analytics from '../assets/image/analytics-card1.svg';
import liner from '../assets/image/card2-bg.svg';
import card3img1 from '../assets/image/card3-img1.jpg';
import card3img2 from '../assets/image/card3-img2.jpg';
import card3img3 from '../assets/image/card3-img3.jpg';
import card3img4 from '../assets/image/card3-img4.jpg';
import card3img5 from '../assets/image/card3-img5.jpg';

const Card = ({ title, description, children }) => {
  return (
    <div className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[24px] text-white text-center">
      <h3 className="text-[24px] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]">
        {title}
      </h3>
      <p className="text-[#9B9CA1] text-[16px] mt-[16px]">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

const text = '32px';

const Services = () => {
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
          className="text-[#FFFFFF] text-[20px] rounded-[48px] px-[32px] py-[16px] leading-[100%] mx-auto cursor-pointer w-full sm:w-auto block"
        >
          Nima uchun aynan biz
        </button>

        <h2 className="text-center text-white text-[48px] leading-[100%] font-medium mt-[64px] tracking-[0.48px]">
          Nima uchun aynan Manasoft?
        </h2>
        <p className="text-center text-white text-[20px] leading-[100%] mt-[24px] tracking-[0.20px] w-full max-w-[886px] mx-auto">
          Biznesingizni samarali rivojlantirish uchun ishonchli IT hamkor
          kerakmi? Manasoft sizga zamonaviy, tezkor va ishonchli yechimlar
          taqdim etadi!
        </p>

        <ul className="flex gap-[24px] mt-[48px] cursor-pointer">
          {/* Card 1 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[24px] text-center  hover:scale-[1.05] transition-transform duration-300">
            <h3
              className={`text-[${text}] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]`}
            >
              UX tadqiqotlar
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px]">
              Foydalanuvchi tadqiqoti orqali biznesingizni yanada
              rivojlantirish.
            </p>
            <div className="bg-[#ffffff0a] rounded-[12px] border border-[#ffffff66] h-[264px] relative mt-[32px] overflow-hidden">
              <div className="flex gap-[8px] items-center  px-[32px] pt-[32px]">
                <img src={cardLogo1} alt="logo" width={24} height={24} />
                <p className="text-[14px] text-[#33C6AB]">
                  14.12% yaxshilanish
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
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] px-[32px] pt-[24px] text-center w-full max-w-[600px] ">
            <h3 className="text-[32px] font-bold leading-[42px] text-[#FBFBFB] w-full max-w-[540px] mx-auto">
              Manasoft – IT yechimlaringiz markazi
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full max-w-[490px] mx-auto">
              Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun Telegram
              botlar, mobil ilovalar va veb-saytlar yaratish bo‘yicha eng
              ishonchli hamkoringiz! Bizning jamoamiz texnologiyalarni biznesga
              joriy etish orqali mijozlarga samarali yechimlar taqdim etadi.
            </p>
            <div className="bg-[#ffffff0a] rounded-[12px] rounded-b-[0] border border-[#ffffff66] border-b-[transparent] relative mt-[18px] px-[22px] pt-[27px]">
              <img
                src={liner}
                alt="liner"
                // className="absolute bottom-0"
              />
            </div>
          </li>

          {/* Card 3 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] px-[24px] py-[32px] text-center">
            <h3 className="text-[24px] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]">
              Bizning mijozlarimiz
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full min-w-[300px] mx-auto">
              Manasoft bilan ishlaydigan har bir mijoz – biz uchun muhim!
            </p>
            <div className="bg-[#ffffff0a] rounded-[50%] border border-[#ffffff66] h-[264px] w-[264px] mt-[32px] mx-auto flex justify-center items-center group">
              <div className="bg-[#ffffff0a] rounded-[50%] border border-[#ffffff66] h-[208px] w-[208px] flex justify-center items-center space-x-[-22px] group-hover:space-x-0 transition-all duration-1000 ease-in-out">
                <img
                  src={card3img5}
                  alt="cardimg"
                  width={42}
                  height={42}
                  className="rounded-[50%] transition-all duration-1000 ease-in-out"
                />
                <img
                  src={card3img4}
                  alt="cardimg"
                  width={42}
                  height={42}
                  className="rounded-[50%] transition-all duration-1000 ease-in-out"
                />
                <img
                  src={card3img3}
                  alt="cardimg"
                  width={42}
                  height={42}
                  className="rounded-[50%] transition-all duration-1000 ease-in-out"
                />
                <img
                  src={card3img2}
                  alt="cardimg"
                  width={42}
                  height={42}
                  className="rounded-[50%] transition-all duration-1000 ease-in-out"
                />
                <img
                  src={card3img1}
                  alt="cardimg"
                  width={42}
                  height={42}
                  className="rounded-[50%] transition-all duration-1000 ease-in-out"
                />
              </div>
            </div>
          </li>
        </ul>

        <ul className="flex gap-[24px] mt-[24px]">
          {/* Card 1 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[32px]">
            <h3 className="text-[28px] font-bold leading-[25.2px] text-[#FBFBFB] mt-[10px]">
              Texnologiyalar olamiga yo‘lingiz
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full max-w-[531px]">
              Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda CRM va
              ERP tizimlari orqali biznesingizni avtomatlashtirib, uni keyingi
              bosqichga olib chiqishga yordam beradi. Bizning ishonchli va
              tezkor IT yechimlarimiz iOS va Android platformalari uchun sifatli
              ilovalar yaratish, zamonaviy veb-saytlar ishlab chiqish hamda
              biznes jarayonlarini optimallashtirishga qaratilgan.
            </p>
          </li>

          {/* Card 2 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-[32px] ">
            <h3 className="text-[48px] font-bold leading-[112%] text-[#FBFBFB] w-full max-w-[540px]">
              Biznesingizni birga rivojlantiramiz!
            </h3>
            <p className="text-[#9B9CA1] text-[16px] mt-[16px] w-full max-w-[550px]">
              Manasoft sizga IT yechimlari bo‘yicha ishonchli hamkor bo‘lishga
              tayyor! Telegram botlar, mobil ilovalar, veb-saytlar va
              avtomatlashtirilgan tizimlar orqali biznesingizni keyingi
              bosqichga olib chiqing.
            </p>
            <button className="bg-[#4266B1] text-[#050100] text-[16px] rounded-[24px] px-6 py-3 font-medium cursor-pointer w-full sm:w-auto mt-[56px]">
              Biz bilan bog‘laning
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;

// import React from "react";
// import { motion } from "framer-motion";
// import cardLogo1 from "../assets/logo/card-logo1.svg";
// import analytics from "../assets/image/analytics-card1.svg";
// import liner from "../assets/image/card2-bg.svg";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const Card = ({ title, description, children }) => {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       variants={fadeInUp}
//       viewport={{ once: true }}
//       className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-6 md:p-8 text-white text-center hover:scale-[1.05] transition-transform duration-300"
//     >
//       <h3 className="text-xl md:text-2xl font-bold text-[#FBFBFB] mt-2">{title}</h3>
//       <p className="text-[#9B9CA1] text-base md:text-lg mt-4">{description}</p>
//       <div className="mt-6">{children}</div>
//     </motion.div>
//   );
// };

// const Services = () => {
//   return (
//     <section className="mt-16 px-4 md:px-0">
//       <div className="container mx-auto">
//         <motion.button
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
//           whileHover={{ scale: 1.1 }}
//           className="bg-opacity-10 text-white text-lg md:text-xl rounded-full px-8 py-4 mx-auto block hover:bg-opacity-20 transition w-full sm:w-auto"
//           style={{
//             background:
//               "linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)",
//             boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.08)",
//             backdropFilter: "blur(30px)",
//           }}
//         >
//           Nega aynan biz?
//         </motion.button>

//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           viewport={{ once: true }}
//           className="text-center text-white text-3xl md:text-5xl font-medium mt-16"
//         >
//           Nima uchun <span className="text-[#33C6AB]">Manasoft</span>?
//         </motion.h2>

//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           viewport={{ once: true }}
//           className="text-center text-white text-lg md:text-xl mt-6 max-w-2xl mx-auto"
//         >
//           IT texnologiyalar orqali biznesingizni rivojlantirishni xohlaysizmi?
//           Manasoft – sizga zamonaviy, tezkor va ishonchli IT echimlarni taqdim etadi.
//         </motion.p>

//         {/* Cards */}
//         <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//           {/* Card 1 */}
//           <Card title="Foydalanuvchi tajribasi (UX) tadqiqotlari" description="Biz sizning mijozlaringizni chuqur o‘rganib, ular uchun eng qulay interfeys yaratamiz.">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
//               viewport={{ once: true }}
//               className="bg-[#ffffff0a] rounded-lg border border-[#242424] h-64 relative overflow-hidden"
//             >
//               <div className="flex gap-2 items-center p-6">
//                 <img src={cardLogo1} alt="logo" width={24} height={24} />
//                 <p className="text-sm text-[#33C6AB]">14.12% yaxshilanish</p>
//               </div>
//               <img src={analytics} alt="analytics" className="absolute bottom-0 w-full" />
//             </motion.div>
//           </Card>

//           {/* Card 2 */}
//           <Card title="Manasoft – IT texnologiyalar markazi" description="Innovatsion texnologiyalar yordamida sizning biznesingizni avtomatlashtirish, optimallashtirish va yangi darajaga olib chiqish bizning vazifamiz!">
//             <div className="bg-[#ffffff0a] rounded-lg border border-[#242424] relative p-6">
//               <img src={liner} alt="liner" className="w-full" />
//             </div>
//           </Card>

//           {/* Card 3 */}
//           <Card title="Bizning mijozlarimiz" description="Manasoft bilan ishlaydigan har bir mijoz – biz uchun juda muhim!">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
//               viewport={{ once: true }}
//               className="bg-[#ffffff0a] rounded-lg border border-[#242424] h-64 relative overflow-hidden"
//             >
//               <div className="flex gap-2 items-center p-6">
//                 <img src={cardLogo1} alt="logo" width={24} height={24} />
//                 <p className="text-sm text-[#33C6AB]">14.12% o‘sish</p>
//               </div>
//               <img src={analytics} alt="analytics" className="absolute bottom-0 w-full" />
//             </motion.div>
//           </Card>
//         </ul>

//         {/* Extra Cards */}
//         <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//           {/* Card 1 */}
//           <Card
//             title="IT texnologiyalar bilan biznesingizni rivojlantiring"
//             description="Manasoft yordamida siz Telegram botlar, mobil ilovalar va veb-saytlar orqali biznesingizni avtomatlashtirib, yangi bosqichga olib chiqishingiz mumkin."
//           />

//           {/* Card 2 */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInUp}
//             viewport={{ once: true }}
//             className="bg-[#ffffff0a] border border-[#333] rounded-[30px] p-6 md:p-8 text-center text-white"
//           >
//             <h3 className="text-3xl md:text-5xl font-bold text-[#FBFBFB]">
//               Keling, biznesingizni <span className="text-[#33C6AB]">birgalikda</span> rivojlantiraylik!
//             </h3>
//             <p className="text-[#9B9CA1] text-base md:text-lg mt-4 max-w-xl mx-auto">
//               Bizning jamoamiz sizga eng yangi texnologiyalarni taklif qiladi.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="bg-[#4266B1] text-black text-lg rounded-full px-6 py-3 font-medium cursor-pointer w-full sm:w-auto mt-8"
//             >
//               Biz bilan bog‘laning
//             </motion.button>
//           </motion.div>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Services;
