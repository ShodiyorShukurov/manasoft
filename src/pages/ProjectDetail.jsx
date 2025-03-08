import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import portfolio from '../mock/portfolio';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  const [module, setModule] = React.useState(null);

  const changeIdProtfolio = async (id) => {
    try {
      const importedModule = await import(`../mock/portfolio${id}.js`);
      setModule(() => importedModule.default);
    } catch (error) {
      console.error('JavaScript faylni yuklashda xatolik:', error);
      setModule(null);
    }
  };

  React.useEffect(() => {
    changeIdProtfolio(id);
    window.scrollTo(0, 0);
  }, [id]);

  const portfoliosData = portfolio(t);
  const portfolioDetails = module ? module(t).portfolioData : null;

  return (
    <main className="pt-[150px] md:pt-[230px] pb-[80px] md:pb-[120px]">
      <section>
        <div className="container">
          <div
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
            }}
            className="grid lg:grid-cols-2 gap-6 border border-[#ffffff33] rounded-[24px] p-[24px] sm:p-[32px] md:p-[48px] backdrop-blur-[2px] text-white"
          >
            <div className="flex flex-col justify-between w-fit">
              <div>
                <h3 className="text-[28px] sm:text-[32px] font-medium leading-[110%] sm:leading-[120%]">
                  {portfolioDetails?.banner_title}
                </h3>
                <h4 className="text-[20px] md:text-[24px] font-font-semibold leading-[120%] mt-[16px] sm:mt-[24px] md:mt-[32px]">
                  {portfolioDetails?.banner_subtitle}
                </h4>
                <p className=" sm:text-[20px] text-[#ffffffcc] leading-[140%] mt-[8px] sm:mt-[16px] w-full max-w-[540px]">
                  {portfolioDetails?.banner_text}
                </p>

                <div className="flex">
                  {portfolioDetails?.banner_button2 ? (
                    <a
                      href={portfolioDetails?.banner_button2_link}
                      target="_blanck"
                      className="px-[12px] sm:px-[24px] py-[10px] sm:py-[12px] text-[14px] sm:text-[16px] bg-[#61A6FF] rounded-[48px] mt-[16px] mr-[8px] sm:mr-[16px] cursor-pointer font-[Public_Sans] flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M11.4703 8.50875C11.4866 7.27362 12.166 6.10492 13.2438 5.45799C12.5639 4.50992 11.425 3.90882 10.2401 3.87262C8.97635 3.74311 7.75117 4.61093 7.10717 4.61093C6.45071 4.61093 5.45917 3.88548 4.39144 3.90693C2.99971 3.95083 1.70227 4.72334 1.02516 5.91125C-0.430353 8.37152 0.655328 11.9873 2.04959 13.976C2.74716 14.9498 3.56243 16.0376 4.62919 15.999C5.67308 15.9567 6.06296 15.3491 7.32302 15.3491C8.57139 15.3491 8.93717 15.999 10.0256 15.9745C11.1457 15.9567 11.8515 14.9963 12.5246 14.0133C13.0258 13.3194 13.4115 12.5526 13.6673 11.7411C12.3509 11.1975 11.4719 9.90415 11.4703 8.50875Z"
                          fill="white"
                        />
                        <path
                          d="M9.41449 2.56476C10.0252 1.84895 10.3261 0.928903 10.2533 0C9.32018 0.0956804 8.45827 0.531067 7.83927 1.21941C7.23398 1.89196 6.91897 2.79581 6.97853 3.68921C7.91195 3.6986 8.82958 3.27501 9.41449 2.56476Z"
                          fill="white"
                        />
                      </svg>
                      {portfolioDetails?.banner_button2}
                    </a>
                  ) : (
                    ''
                  )}
                  <a
                    href={portfolioDetails?.banner_button1_link}
                    target="_blanck"
                    className="px-[12px] sm:px-[24px] py-[10px] sm:py-[12px] text-[14px] sm:text-[16px] bg-[#61A6FF] rounded-[48px] mt-[16px] cursor-pointer font-[Public_Sans] flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g filter="url(#filter0_ii_1016_7793)">
                        <path
                          d="M1.30077 0.24701C1.11173 0.438606 1 0.735954 1 1.12101V14.8786C1 15.2643 1.11173 15.561 1.30077 15.7526L1.34884 15.7974L9.3969 8.09064V7.99982V7.90899L1.34884 0.201599L1.30077 0.24701Z"
                          fill="url(#paint0_linear_1016_7793)"
                        />
                        <path
                          d="M12.0807 10.6604L9.39844 8.09062V7.9998V7.90898L12.0813 5.33984L12.1418 5.37281L15.3203 7.10216C16.2278 7.59608 16.2278 8.40414 15.3203 8.89868L12.1418 10.628L12.0807 10.6604Z"
                          fill="url(#paint1_linear_1016_7793)"
                        />
                        <g filter="url(#filter1_i_1016_7793)">
                          <path
                            d="M12.1402 10.6274L9.39626 7.99976L1.30078 15.7526C1.5996 16.0561 2.09396 16.0935 2.65068 15.7911L12.1402 10.6274Z"
                            fill="url(#paint2_linear_1016_7793)"
                          />
                        </g>
                        <path
                          d="M12.1402 5.37221L2.65068 0.209061C2.09396 -0.0938851 1.5996 -0.055939 1.30078 0.247629L9.39691 8.00044L12.1402 5.37221Z"
                          fill="url(#paint3_linear_1016_7793)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_ii_1016_7793"
                          x="1"
                          y="0"
                          width="16"
                          height="16"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="-0.15" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_1016_7793"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="0.15" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_innerShadow_1016_7793"
                            result="effect2_innerShadow_1016_7793"
                          />
                        </filter>
                        <filter
                          id="filter1_i_1016_7793"
                          x="1.30078"
                          y="7.99976"
                          width="10.8398"
                          height="8.00018"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="-0.15" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_1016_7793"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_1016_7793"
                          x1="8.6835"
                          y1="0.975449"
                          x2="-1.74622"
                          y2="11.867"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00A0FF" />
                          <stop offset="0.0066" stopColor="#00A1FF" />
                          <stop offset="0.2601" stopColor="#00BEFF" />
                          <stop offset="0.5122" stopColor="#00D2FF" />
                          <stop offset="0.7604" stopColor="#00DFFF" />
                          <stop offset="1" stopColor="#00E3FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1016_7793"
                          x1="16.5016"
                          y1="7.9998"
                          x2="0.783658"
                          y2="7.9998"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE000" />
                          <stop offset="0.4087" stopColor="#FFBD00" />
                          <stop offset="0.7754" stopColor="#FFA500" />
                          <stop offset="1" stopColor="#FF9C00" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1016_7793"
                          x1="10.6501"
                          y1="9.42671"
                          x2="-3.49392"
                          y2="24.1971"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3A44" />
                          <stop offset="1" stopColor="#C31162" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1016_7793"
                          x1="-0.738095"
                          y1="-4.33214"
                          x2="5.57759"
                          y2="2.26323"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#32A071" />
                          <stop offset="0.0685" stopColor="#2DA771" />
                          <stop offset="0.4762" stopColor="#15CF74" />
                          <stop offset="0.8009" stopColor="#06E775" />
                          <stop offset="1" stopColor="#00F076" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {portfolioDetails?.banner_button1}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:gap-[32px] mt-[30px] xl:mt-0 ">
                <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[12px] sm:px-[24px] py-[12px] sm:py-[16px] leading-[100%] border border-[#4266B1]">
                  UX/Ui
                </button>
                <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[12px] sm:px-[24px] py-[12px] sm:py-[16px]  leading-[100%] border border-[#4266B1]">
                  Branding
                </button>
                <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[12px] sm:px-[24px] py-[12px] sm:py-[16px]  leading-[100%] border border-[#4266B1]">
                  Vebsayt
                </button>
              </div>
            </div>
            <img
              className="w-full max-w-[650px] h-full max-h-[370px] object-cover"
              src={portfolioDetails?.banner_image}
              alt="Img"
              loading='lazy'
            />
          </div>

          <h2 className="text-white text-[32px]  md:text-[48px] leading-[120%] font-medium md:text-center mt-[80px] md:mt-[96px] mb-[48px] md:mb-[80px]">
            {portfolioDetails?.title}
          </h2>

          <ul className="space-y-10">
            {portfolioDetails?.cards.map((portfolio) => (
              <li
                key={portfolio.id}
                className={`text-white grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-[50px] md:mb-[80px] last:mb-0 ${
                  portfolio.id % 2 === 0 ? 'md:[direction:rtl]' : ''
                }`}
              >
                <div className="md:[direction:ltr] h-full">
                  <h4 className="text-[20px] sm:text-[24px] font-font-semibold leading-[120%] mt-[16px]">
                    {portfolio.title}
                  </h4>
                  <p className="text-[16px] md:text-[20px] leading-[140%] text-[#ffffffcc] mt-[8px] w-full">
                    {portfolio.text}
                  </p>

                  <div
                    style={{
                      background:
                        'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                    }}
                    className="border border-[#ffffff33] rounded-[24px] py-[16px] px-[24px] backdrop-blur-[2px] flex items-center justify-center mt-[24px]"
                  >
                    <img
                      className="w-full max-w-[470px] h-full max-h-[250px] sm:max-h-[300px] object-contain"
                      src={portfolio.smallImg}
                      alt={portfolio.title}
                      loading='lazy'
                    />
                  </div>
                </div>

                <div
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="border border-[#ffffff33] rounded-[24px] px-[35px] py-[16px] backdrop-blur-[2px] flex items-center"
                >
                  <img
                    className="mx-auto w-full max-w-[650px] h-full max-h-[250px] sm:max-h-[450px] object-contain"
                    src={portfolio.bigImg}
                    alt={portfolio.title}
                    loading='lazy'
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-[60px] md:pt-[120px]">
        <div className="container">
          <h3 className="text-[32px] md:text-[48px] font-medium leading-[120%] text-white">
            Bizning loyihalarimiz
          </h3>

          <ul className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-[32px]">
            {portfoliosData?.map((project) => (
              <li
                onClick={() => navigate('/portfolio/details/' + project.id)}
                key={project.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.10)',
                  backdropFilter: 'blur(2px)',
                }}
                className="p-[24px] md:p-[32px] rounded-[24px] flex flex-col gap-6 cursor-pointer"
              >
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[120%] text-white">
                  {project.title}
                </h4>
                <img
                  className="w-full max-w-[400px] h-full max-h-[250px] mx-auto"
                  src={project.img}
                  alt={project.title}
                  loading='lazy'
                />
                <p className="text-[16px] sm:text-[18px] leading-[150%] text-[#ffffffcc]">
                  {project.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="md:hidden block my-[32px] relative">
            <Swiper
              spaceBetween={30}
              loop={true}
              pagination={{
                el: '.custom-pagination4',
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[370px] sm:h-[500px] mySwiper"
            >
              {portfoliosData.map((portfolio) => (
                <SwiperSlide key={portfolio.id}>
                  <li
                    style={{
                      background:
                        'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                    }}
                    className="p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] lg:col-span-2 border border-[#464850] flex flex-col sm:min-h-[400px]"
                    onClick={()=> navigate('/portfolio/details/'+ portfolio.id)}
                  >
                    <h3 className="text-[20px] md:text-[32px] font-medium leading-[120%]">
                      {portfolio.title}
                    </h3>
                    <img
                      className="mx-auto sm:w-[400px] max-h-[200px] sm:h-auto mt-[24px]"
                      src={portfolio.img}
                      alt="project1"
                      loading="lazy"
                    />
                    <p className="text-[16px] md:text-[20px] leading-[140%] mt-[24px] text-[#ffffffcc]">
                      {portfolio.text}
                    </p>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="md:mt-0 flex justify-center">
              <div className="custom-pagination4 custom"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
