import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import img from '../assets/image/card3-img2.jpg';

const customers = [
  {
    name: 'Lola Williams (Creative Designer)',
    opinion: `"Manasoft team has been amazing to work with! They developed a custom Telegram bot for us, which accelerated
                      the process of providing services to our clients. Now we
                      can serve our clients faster and more efficiently."`,
    img: img,
  },
  {
    name: 'Lola Williams (Creative Designer)',
    opinion: `"Manasoft team has been amazing to work with! They developed a custom Telegram bot for us, which accelerated
                      the process of providing services to our clients. Now we
                      can serve our clients faster and more efficiently."`,
    img: img,
  },
  {
    name: 'Lola Williams (Creative Designer)',
    opinion: `"Manasoft team has been amazing to work with! They developed a custom Telegram bot for us, which accelerated
                      the process of providing services to our clients. Now we
                      can serve our clients faster and more efficiently."`,
    img: img,
  },
  {
    name: 'Lola Williams (Creative Designer)',
    opinion: `"Manasoft team has been amazing to work with! They developed a custom Telegram bot for us, which accelerated
                      the process of providing services to our clients. Now we
                      can serve our clients faster and more efficiently."`,
    img: img,
  },
  {
    name: 'Lola Williams (Creative Designer)',
    opinion: `"Manasoft team has been amazing to work with! They developed a custom Telegram bot for us, which accelerated
                      the process of providing services to our clients. Now we
                      can serve our clients faster and more efficiently."`,
    img: img,
  },
];

const Customers = () => {
  const [isTwoSlides, setIsTwoSlides] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const slides = width >= 0 && width < 1200 ? 2 : 3;
      setIsTwoSlides(slides === 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="pt-16 sm:pt-20 lg:pt-[120px]">
      <div className="container">
        <button
          style={{
            background:
              'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
            boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px)',
          }}
          className="text-white text-[12px] sm:text-[18px] rounded-[48px] px-[32px] py-3 leading-[100%] sm:leading-[150%] mx-auto block"
        >
          Mijozlar fikrlari
        </button>

        <h2 className="text-center text-white text-[32px] sm:text-[48px] leading-tight font-medium sm:font-semibold mt-[24px] sm:mt-[16px] tracking-tight">
          Mijozlarimizning fikrlari
        </h2>

        <p className="text-center bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent text-sm sm:text-[20px] leading-[140%] mt-3 sm:mt-[16px] w-full max-w-2xl mx-auto">
          Siz ham Manasoft tajribasidan foydalaning va biznesingizni keyingi
          bosqichga olib chiqing!
        </p>
      </div>

      <div
        className={`mt-8 sm:mt-12 ${isTwoSlides ? 'container' : 'my-gradient'}`}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 25 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mt-6 w-full"
        >
          {customers.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div>
                <div className="w-fit p-4 sm:p-6 lg:p-8 border border-[#333] rounded-2xl sm:rounded-3xl bg-[#ffffff0a] text-white mx-auto">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                      src={item.img}
                      alt="Portfolio"
                      loading="lazy"
                    />
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3 sm:mt-4 w-full max-w-md mx-auto">
                    {item.opinion}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
          <button
            ref={prevRef}
            className="swiper-button-prev-custom p-2 sm:p-3 rounded-full border flex items-center justify-center cursor-pointer bg-[#ffffff0d] hover:bg-[#ffffff1a] transition"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              className="rotate-180 w-5 h-5 sm:w-6 sm:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M1.66638 10.8333L1.66626 9.16675H15.1428L11.8514 5.87529L13.0299 4.69678L18.3333 10.0001L13.0299 15.3034L11.8514 14.1248L15.1429 10.8334L1.66638 10.8333Z"
                fill="#fff"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next-custom p-2 sm:p-3 rounded-full border flex items-center justify-center cursor-pointer bg-[#ffffff0d] hover:bg-[#ffffff1a] transition"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M1.66638 10.8333L1.66626 9.16675H15.1428L11.8514 5.87529L13.0299 4.69678L18.3333 10.0001L13.0299 15.3034L11.8514 14.1248L15.1429 10.8334L1.66638 10.8333Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customers;
