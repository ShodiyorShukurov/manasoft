import React from 'react';

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
      </div>
    </section>
  );
};

export default Services;
