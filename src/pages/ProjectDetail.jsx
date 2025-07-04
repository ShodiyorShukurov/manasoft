import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import portfolio from "../mock/portfolio";
import PlayMarketIcon from "../components/icon/PlayMarketIcon";
import IosIcon from "../components/icon/IosIcon";

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
      console.error("JavaScript faylni yuklashda xatolik:", error);
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
                "radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)",
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

                <div className="flex mb-4">
                  {portfolioDetails?.banner_button2 && (
                    <a
                      href={portfolioDetails?.banner_button2_link}
                      target="_blanck"
                      className="px-[12px] sm:px-[24px] py-[10px] sm:py-[12px] text-[14px] sm:text-[16px] bg-[#61A6FF] rounded-[48px] mt-[16px] mr-[8px] sm:mr-[16px] cursor-pointer font-[Public_Sans] flex items-center gap-1"
                    >
                      <IosIcon />
                      {portfolioDetails?.banner_button2}
                    </a>
                  )}
                  {portfolioDetails?.banner_button1 && (
                    <a
                      href={portfolioDetails?.banner_button1_link}
                      target="_blanck"
                      className="px-[12px] sm:px-[24px] py-[10px] sm:py-[12px] text-[14px] sm:text-[16px] bg-[#61A6FF] rounded-[48px] mt-[16px] cursor-pointer font-[Public_Sans] flex items-center gap-1"
                    >
                      <PlayMarketIcon />
                      {portfolioDetails?.banner_button1}
                    </a>
                  )}
                  {portfolioDetails?.banner_button3 && (
                    <a
                      href={portfolioDetails?.banner_button3_link}
                      target="_blanck"
                      className="px-[12px] sm:px-[24px] py-[10px] sm:py-[12px] text-[14px] sm:text-[16px] bg-[#61A6FF] rounded-[48px] mt-[16px] cursor-pointer font-[Public_Sans] flex items-center gap-1"
                    >
                      {portfolioDetails?.banner_button3}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 lg:gap-[32px] mt-[30px] xl:mt-0 ">
                {portfolioDetails?.banner_property1 && (
                  <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[12px] sm:px-[24px] py-[12px] sm:py-[16px] leading-[100%] border border-[#4266B1]">
                    {portfolioDetails?.banner_property1}
                  </button>
                )}
                {portfolioDetails?.banner_property2 && (
                  <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[12px] sm:px-[24px] py-[12px] sm:py-[16px]  leading-[100%] border border-[#4266B1]">
                    {portfolioDetails?.banner_property2}
                  </button>
                )}
              </div>
            </div>
            <img
              className="w-full max-w-[650px] h-full max-h-[370px] object-cover rounded-[16px]"
              src={portfolioDetails?.banner_image}
              alt="Img"
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
                  portfolio.id % 2 === 0 ? "md:[direction:rtl]" : ""
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
                        "radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)",
                    }}
                    className="border border-[#ffffff33] rounded-[24px] py-[16px] px-[24px] backdrop-blur-[2px] flex items-center justify-center mt-[24px]"
                  >
                    <img
                      className="w-full max-w-[470px] h-full max-h-[250px] sm:max-h-[300px] object-contain"
                      src={portfolio.smallImg}
                      alt={portfolio.title}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)",
                  }}
                  className="border border-[#ffffff33] rounded-[24px] px-[35px] py-[16px] backdrop-blur-[2px] flex items-center"
                >
                  <img
                    className="mx-auto w-full max-w-[650px] h-full max-h-[250px] sm:max-h-[450px] object-contain"
                    src={portfolio.bigImg}
                    alt={portfolio.title}
                    loading="lazy"
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
            {t("project_page.title")}
          </h3>

          <ul className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-[32px]">
            {portfoliosData?.map(
              (project) =>
                project.id !== id && (
                  <li
                    onClick={() => navigate("/portfolio/details/" + project.id)}
                    key={project.id}
                    style={{
                      background: "rgba(255, 255, 255, 0.10)",
                      backdropFilter: "blur(2px)",
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
                      loading="lazy"
                    />
                    <p className="text-[16px] sm:text-[18px] leading-[150%] text-[#ffffffcc]">
                      {project.text}
                    </p>
                  </li>
                )
            )}
          </ul>

          <div className="md:hidden block my-[32px] relative">
            <Swiper
              spaceBetween={30}
              loop={true}
              pagination={{
                el: ".custom-pagination4",
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
                        "radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)",
                    }}
                    className="p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] lg:col-span-2 border border-[#464850] flex flex-col sm:min-h-[400px]"
                    onClick={() =>
                      navigate("/portfolio/details/" + portfolio.id)
                    }
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
