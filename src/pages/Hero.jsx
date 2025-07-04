import user1 from '../assets/logo/Ellipse 2.svg';
import user2 from '../assets/logo/Ellipse 3.svg';
import user3 from '../assets/logo/Ellipse 5.svg';
import bgImage from '../assets/image/bg.png';
import InfiniteCarousel from '../components/InfiniteCarousel';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const {t} =useTranslation()

  return (
    <section
      className="pt-[180px] md:pt-[250px] bg-no-repeat bg-cover bg-bottom"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      //   backdropFilter: 'blur(20px)',
      // }}
    >
      <div className="container">
        {/* User group */}
        <div className="flex justify-center items-center group cursor-pointer">
          <div className="flex transition-all duration-1000 ease-in-out">
            {[user1, user2, user3, user2].map((user, index) => (
              <img
                key={index}
                src={user}
                alt={`User ${index + 1}`}
                width={24}
                height={24}
                className="rounded-full transition-all duration-1000 ease-in-out group-hover:ml-1 -ml-4"
              />
            ))}
          </div>
          <span className="text-white text-[16px] leading-[16px] font-semibold ml-3">
            {t('hero.hero_text')}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white text-[36px] sm:text-[72px] font-semibold sm:font-bold mx-auto text-center mt-4 sm:mt-[24px] tracking-[0.72px] leading-[100%] font-[Outfit] max-w-[876px]">
        {t('hero.hero_title')}
        </h1>
        <p className="text-white text-[16px] sm:text-[20px] mx-auto text-center mt-[16px] sm:mt-[32px] tracking-[0.2px] leading-[140%] font-[Outfit]">
        {t('hero.hero_subtitle')}
        </p>

        {/* Buttons */}
        <div style={{fontFamily:"Public Sans"}} className="flex flex-col-reverse sm:flex-row justify-center items-center flex-wrap gap-4 sm:gap-[32px] mt-[32px] sm:mt-[48px]">
          <a href='tel:+998938883388' className="bg-[#61A6FF] text-[#fff] text-[16px] rounded-full px-[32px] py-[16px] font-medium leading-[100%] cursor-pointer w-full sm:w-auto text-center">
          {t('hero.hero_button1')}
          </a>
          <a href='#project' className="text-[#61A6FF] text-[16px] border-2 border-[#61A6FF] rounded-full px-[32px] py-[16px] font-medium leading-[100%] cursor-pointer w-full sm:w-auto text-center">
          {t('hero.hero_button2')}
          </a>
        </div>

        {/* <div className="flex justify-center items-center flex-col pt-[84px] sm:pt-[96px] pb-[64px]">
          <div className="w-full max-w-[930px] rounded-[48px]">
            <iframe
              width="100%"
              height="300"
              className="rounded-[24px] sm:rounded-[32px] sm:h-[520px] max-w-full"
              src="https://www.youtube.com/embed/kqaMIFEz15s?si=sOorMhwuz3jr6CuC"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
      </div>

      {/* Infinite carousel */}

      {/* <InfiniteCarousel>
        {[...items, ...items].map((image, index) => (
          <p className="h-40 w-56 pr-20 text-white" key={index}>
            {image}
          </p>
        ))}
      </InfiniteCarousel> */}

    </section>
  );
};

export default Hero;
