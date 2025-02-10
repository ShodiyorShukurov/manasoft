import user1 from '../assets/logo/Ellipse 2.svg';
import user2 from '../assets/logo/Ellipse 3.svg';
import user3 from '../assets/logo/Ellipse 5.svg';
import bgImage from '../assets/image/bg.png';

const About = () => {
  return (
    <section className="w-full sm:px-0 pt-[84px]">
      <div className="container">
        <div className="flex justify-center items-center group cursor-pointer">
          <div className="flex  transition-all duration-1000 ease-in-out">
            <img
              src={user1}
              alt="User 1"
              width={24}
              height={24}
              className="rounded-full transition-all duration-1000 ease-in-out group-hover:ml-1 -ml-4"
            />
            <img
              src={user2}
              alt="User 2"
              width={24}
              height={24}
              className="rounded-full transition-all duration-1000 ease-in-out group-hover:ml-1 -ml-4"
            />
            <img
              src={user3}
              alt="User 3"
              width={24}
              height={24}
              className="rounded-full transition-all duration-1000 ease-in-out group-hover:ml-1 -ml-4"
            />
            <img
              src={user2}
              alt="User 4"
              width={24}
              height={24}
              className="rounded-full transition-all duration-1000 ease-in-out group-hover:ml-1 -ml-4"
            />
          </div>

          <span className="text-white text-[16px] font-normal ml-3">
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
        className="flex justify-center items-center flex-col pt-[144px] pb-[64px] gap-[64px] 
        bg-no-repeat bg-bottom md:bg-auto"
        style={{
          backgroundImage: `url(${bgImage})`,
          backdropFilter: 'blur(30px)',
          backgroundSize: '100%',
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
      </div>
    </section>
  );
};

export default About;
