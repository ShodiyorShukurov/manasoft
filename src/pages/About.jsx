import user1 from '../assets/logo/Ellipse 2.svg';
import user2 from '../assets/logo/Ellipse 3.svg';
import user3 from '../assets/logo/Ellipse 5.svg';
import bgImage from '../assets/image/bg.png';
import InfiniteCarousel from '../components/InfiniteCarousel';

const About = () => {
  const items = ['foodies', 'globetrot', 'FunHub', 'Healthify', 'Chatter'];

  return (
    <section
      className="w-full sm:px-0 pt-[140px] bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${bgImage})`,
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
      }}
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
          <span className="text-white text-[16px] font-normal ml-3">
            +100 ortiq loyihalar
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white text-[32px] sm:text-[72px] font-semibold mx-auto text-center mt-4 sm:mt-[16px] tracking-[0.72px] leading-[110%] font-[Outfit] max-w-[876px]">
          Texnologiya kelajagini biz bilan yarating!
        </h1>
        <p className="text-white text-[16px] sm:text-[24px] mx-auto text-center mt-6 sm:mt-[32px] tracking-[0.24px] leading-[130%] font-[Outfit] max-w-[600px]">
          Telegram botlar, mobil ilovalar va veb-saytlar yaratamiz
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 sm:gap-[32px] mt-[32px] sm:mt-[48px]">
          <button className="bg-[#4266B1] text-[#fff] text-[16px] rounded-[24px] px-6 py-3 font-medium cursor-pointer w-full sm:w-auto">
            Bog&apos;lanish
          </button>
          <button className="text-[#4266B1] text-[16px] border-2 border-[#4266B1] rounded-[24px] px-6 py-3 font-medium cursor-pointer w-full sm:w-auto">
            Bizning Ishlarimiz
          </button>
        </div>

        <div className="flex justify-center items-center flex-col pt-[84px] sm:pt-[144px] pb-[64px] gap-[40px] sm:gap-[64px] ">
          <div className="w-full max-w-[920px] rounded-[32px] px-4 sm:px-0">
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
        </div>
      </div>

      {/* Infinite carousel */}

      <InfiniteCarousel>
        {[...items, ...items].map((image, index) => (
          <p className="h-40 w-56 pr-20 text-white" key={index}>
            {image}
          </p>
        ))}
      </InfiniteCarousel>

    </section>
  );
};

export default About;
