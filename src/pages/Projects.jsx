import React from 'react';

const Projects = () => {
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
          className="text-[#FFFFFF] text-[18px] rounded-[48px] px-[32px] py-[16px] leading-[100%] cursor-pointer"
        >
          Bizning loyihalar
        </button>
        <h2 className="text-[48px] font-medium leading-[120%] tracking-[0.48px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mt-[24px]">
          Bizning loyihalarimiz
        </h2>
        <p className="text-[20px] text-[#ffffffcc] leading-[140%] tracking-[0.2px] mt-[16px] w-full max-w-[750px]">
          Biznesingizni samarali rivojlantirish uchun ishonchli IT hamkor
          kerakmi? Manasoft sizga zamonaviy, tezkor va ishonchli yechimlar
          taqdim etadi!
        </p>
      </div>
    </section>
  );
};

export default Projects;
