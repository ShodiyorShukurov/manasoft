import user1 from '../assets/logo/Ellipse 2.svg';
import user2 from '../assets/logo/Ellipse 3.svg';
import user3 from '../assets/logo/Ellipse 5.svg';
import bgImage from '../assets/image/bg.png';
import { useEffect, useRef, useState } from 'react';

const logos = ['foodies', '☀️ globetrot', 'FunHub', 'healthify', '⭕ Chatter'];

const About = () => {
  const [items, setItems] = useState([...logos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        // Birinchi elementni olib tashlab, oxiriga qo‘shamiz
        const firstItem = prevItems[0];
        return [...prevItems.slice(1), firstItem];
      });
    }, 2000); // Har 2 soniyada almashsin

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full sm:px-0 pt-[84px]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:space-x-[-15px] sm:group-hover:space-x-3 transition-all duration-500 ease-in-out">
          <img
            src={user1}
            alt="User 1"
            width={24}
            height={24}
            className="rounded-full border-2 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <img
            src={user2}
            alt="User 2"
            width={24}
            height={24}
            className="rounded-full border-2 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <img
            src={user3}
            alt="User 3"
            width={24}
            height={24}
            className="rounded-full border-2 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <img
            src={user3}
            alt="User 3"
            width={24}
            height={24}
            className="rounded-full border-2 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

          <span className="text-white text-[16px] font-normal">
            +100 ortiq loyihalar
          </span>
        </div>

        <h1 className="text-white text-[40px] sm:text-[72px] font-semibold mx-auto text-center mt-[16px] tracking-[0.72px] leading-[100%] font-[Outfit] max-w-[876px] w-full">
          Texnologiya kelajagini biz bilan yarating!
        </h1>
        <p className="text-white text-[18px] sm:text-[24px] mx-auto text-center mt-[32px] tracking-[0.24px] leading-[100%] font-[Outfit]">
          Telegram botlar, mobil ilovalar va veb-saytlar yaratamiz
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[32px] mt-[48px]">
          <button className="bg-[#4266B1] text-[#050100] text-[16px] rounded-[24px] px-6 py-3 font-medium cursor-pointer w-full sm:w-auto">
            Bog&apos;lanish
          </button>
          <button className="text-[#4266B1] text-[16px] border-2 border-[#4266B1] rounded-[24px] px-6 py-3 font-medium cursor-pointer w-full sm:w-auto">
            Bizning Ishlarimiz
          </button>
        </div>
      </div>

      {/* Video */}
      <div
        className="flex justify-center items-center flex-col pt-[144px] pb-[64px] gap-[64px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom bottom',
          backdropFilter: blur('30px'),
        }}
      >
        <div className="border border-[rgba(66,102,177,0.5)] w-full max-w-[920px] rounded-[32px]">
          <iframe
            width="100%"
            height="520"
            className="rounded-[32px]"
            src="https://www.youtube.com/embed/kqaMIFEz15s?si=sOorMhwuz3jr6CuC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Agency */}
        {/* <div className="w-full overflow-hidden bg-gray-900 py-6">
          <div className="flex space-x-8 transition-all duration-500 ease-linear">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-700 text-white px-6 py-2 rounded-full text-lg min-w-[120px] text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
