import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import user1 from '../assets/logo/Ellipse 2.svg';
import user2 from '../assets/logo/Ellipse 3.svg';
import user3 from '../assets/logo/Ellipse 5.svg';
import project1 from '../assets/image/Mac Studio.png';
import project2 from '../assets/image/femmi-app.png';
import project4 from '../assets/image/medAgent.png';
import project6 from '../assets/image/ross.png';
import project8 from '../assets/image/granit.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import allButton from '../assets/logo/all.svg';
import portfolio from '../mock/portfolio';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(1);
  const [typetab, setTypeTab] = React.useState(t('project_page.button_text'));

  useEffect(() => {
    setTypeTab(t('project_page.button_text'));
  }, [localStorage.getItem('lng')]);

  const tabs = [
    { id: 1, label: t('project_page.button_text') },
    { id: 2, label: t('project_page.button_text1') },
    { id: 3, label: t('project_page.button_text2') },
    { id: 4, label: t('project_page.button_text3') },
    { id: 5, label: t('project_page.button_text4') },
  ];

  if (location.pathname == '/portfolio') {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname == '/portfolio']);

    const portfolioData = portfolio(t);

    let filtredArr =
      typetab !== t('project_page.button_text')
        ? portfolioData.filter((project) => project.type === typetab)
        : portfolioData;

    return (
      <section className="pt-[150px] md:pt-[230px] pb-[80px]">
        <div className="container">
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
              {t('project_page.subtitle')}
            </span>
          </div>

          <h2 className="text-[48px] font-medium leading-[120%] bg-gradient-to-b text-white mt-[24px] text-center">
            {t('project_page.title')}
          </h2>

          <p className="text-[20px] text-[#ffffffcc] leading-[140%] mt-[16px] w-full max-w-[750px] mx-auto text-center">
            {t('project_page.text')}
          </p>

          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-[16px] w-fit mx-auto mt-[24px] whitespace-nowrap pb-[20px]">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  className={`${
                    item.id == 1 ? 'py-[10px] px-[16px]' : 'py-[12px] px-[20px]'
                  } border rounded-[24px] cursor-pointer text-[16px] font-medium leading-[100%] text-white hover:border-[#61A6FF] transition-all duration-300 ${
                    item.id === activeTab
                      ? 'bg-[#61a6ff33] border-[#61A6FF]'
                      : 'bg-transparent border-[#1A378E]'
                  }`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setTypeTab(item.label);
                  }}
                >
                  {item.id == 1 ? (
                    <img
                      className="w-auto min-w-[20px] h-auto"
                      src={allButton}
                      alt="allButton"
                    />
                  ) : (
                    item.label
                  )}
                </button>
              ))}
            </div>
          </div>

          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-[48px]">
            {filtredArr?.map((project) => (
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
                />
                <p className="text-[16px] sm:text-[18px] leading-[150%] text-[#ffffffcc]">
                  {project.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  } else {
    return (
      <section className="pt-[80px] md:pt-[120px]" id="project">
        <div className="container">
          <button
            style={{
              background:
                'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
              boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(30px)',
            }}
            className="text-[#FFFFFF] text-[12px] sm:text-[18px] leading-[100%] sm:leading-[150%] rounded-[48px] px-[32px] py-[12px] cursor-pointer mx-auto block md:mx-0"
          >
            {t('project_home_page.subtitle_home')}
          </button>

          <div className="flex justify-between items-center">
            <h2 className="text-[32px] md:text-[48px] text-center mx-auto md:mx-0 md:text-left font-medium leading-[120%] text-[#fff] mt-[32px] md:mt-[24px]">
              {t('project_home_page.title_home')}
            </h2>

            <NavLink
              to={'/portfolio'}
              className="hidden md:block bg-[transparent] text-[#61A6FF] text-[16px] rounded-[48px] px-[24px] py-[12px] border cursor-pointer h-fit whitespace-nowrap font-[Public_Sans]"
            >
              {t('project_home_page.button_text')}
            </NavLink>
          </div>

          <ul className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[48px]">
            <li
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              className="p-[24px] xl:p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] lg:col-span-2 flex flex-col justify-between border border-[#464850]"
            >
              <h3 className="text-[32px] font-medium leading-[120%]">
                {t('project_home_page.card1_title')}
              </h3>
              <img
                className="mx-auto w-full max-w-[700px] h-full max-h-[350px] object-contain"
                src={project1}
                alt="project1"
                loading="lazy"
              />
              <p className="text-[18px] xl:text-[20px] leading-[140%] text-[#ffffffcc]">
                {t('project_home_page.card1_text')}
              </p>
            </li>

            <li
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              className="p-[24px] xl:p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] flex flex-col justify-between border border-[#464850] cursor-pointer"
              onClick={() => navigate('/portfolio/details/1')}
            >
              <h3 className="text-[24px] xl:text-[32px] font-medium leading-[120%]">
                {t('project_home_page.card2_title')}
              </h3>
              <div className="flex flex-row gap-4 justify-center items-center mt-[24px]">
                <img
                  className="w-full max-w-[340px] h-full max-h-[350px] object-contain"
                  src={project2}
                  alt="project2"
                  loading="lazy"
                />
              </div>
              <p className="text-[18px] xl:text-[20px] leading-[140%] text-[#ffffffcc] mt-[24px]">
                {t('project_home_page.card2_text')}
              </p>
            </li>

            <li
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              className="p-[24px] xl:p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] flex flex-col justify-between border border-[#464850] cursor-pointer"
              onClick={() => navigate('/portfolio/details/3')}
            >
              <h3 className="text-[24px] xl:text-[32px] font-medium leading-[120%]">
                {t('project_home_page.card3_title')}
              </h3>
              <div className="flex flex-row gap-4 justify-center items-center mt-[24px]">
                <img
                  className="w-full max-w-[340px] h-full max-h-[300px] object-contain"
                  src={project4}
                  alt="project4"
                  loading="lazy"
                />
              </div>
              <p className="text-[18px] xl:text-[20px] leading-[140%] text-[#ffffffcc] mt-[24px]">
                {t('project_home_page.card3_text')}
              </p>
            </li>

            <li
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              className="p-[24px] xl:p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] flex flex-col justify-between border border-[#464850] cursor-pointer"
            >
              <h3 className="text-[24px] xl:text-[32px] font-medium leading-[120%]">
                {t('project_home_page.card5_title')}
              </h3>
              <div className="flex flex-row gap-4 justify-center items-center mt-[24px]">
                <img
                  className="w-full max-w-[340px] h-full max-h-[300px] object-contain"
                  src={project6}
                  alt="Ross & Foundations"
                  loading="lazy"
                />
              </div>
              <p className="text-[18px] xl:text-[20px] leading-[140%] text-[#ffffffcc] mt-[24px]">
                {t('project_home_page.card5_text')}
              </p>
            </li>

            <li
              style={{
                background:
                  'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              }}
              className="p-[24px] xl:p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] flex flex-col justify-between border border-[#464850] cursor-pointer"
              onClick={() => navigate('/portfolio/details/2')}
            >
              <h3 className="text-[24px] xl:text-[32px] font-medium leading-[120%]">
                {t('project_home_page.card5_title')}
              </h3>
              <div className="flex flex-row gap-4 justify-center items-center mt-[24px]">
                <img
                  className="w-full max-w-[340px] h-full max-h-[300px] object-contain"
                  src={project8}
                  alt="IMPERIAL GRANITE"
                  loading="lazy"
                />
              </div>
              <p className="text-[18px] xl:text-[20px] leading-[140%] text-[#ffffffcc] mt-[24px]">
                {t('project_home_page.card5_text')}
              </p>
            </li>
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
              className="h-[390px] sm:h-[500px] mySwiper"
            >
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] lg:col-span-2 border border-[#464850] flex flex-col justify-between min-h-[300px] sm:min-h-[400px] "
                >
                  <h3 className="text-[20px] sm:text-[32px] font-medium leading-[120%]">
                    {t('project_home_page.card1_title')}
                  </h3>
                  <img
                    className="w-full h-full max-w-[340px] max-h-[210px]  sm:max-h-[290px] object-contain mx-auto"
                    src={project1}
                    alt="veb sayt"
                    loading="lazy"
                  />
                  <p className="text-[18px] sm:text-[20px] leading-[140%] text-[#ffffffcc]">
                    {t('project_home_page.card1_text')}
                  </p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] border border-[#464850] flex flex-col justify-between min-h-[300px] sm:min-h-[400px]"
                  onClick={() => navigate('/portfolio/details/1')}
                >
                  <h3 className="text-[20px] sm:text-[32px] font-medium sm:leading-[120%]">
                    {t('project_home_page.card2_title')}
                  </h3>
                  <img
                    className="w-full h-full max-w-[340px] max-h-[210px]  sm:max-h-[290px] object-contain mx-auto"
                    src={project2}
                    alt="project2"
                    loading="lazy"
                  />
                  <p className="text-[16px] sm:text-[20px] sm:leading-[140%] text-[#ffffffcc]">
                    {t('project_home_page.card2_text')}
                  </p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="p-[24px] sm:p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] border border-[#464850] flex flex-col justify-between min-h-[300px] sm:min-h-[400px]"
                  onClick={() => navigate('/portfolio/details/3')}
                >
                  <h3 className="text-[20px] sm:text-[32px] font-medium sm:leading-[120%]">
                    {t('project_home_page.card3_title')}
                  </h3>
                  <img
                    className="w-full h-full max-w-[340px]  max-h-[210px] sm:max-h-[290px] object-contain mx-auto"
                    src={project4}
                    alt="project4"
                    loading="lazy"
                  />
                  <p className="text-[16px] sm:text-[20px] sm:leading-[140%] text-[#ffffffcc]">
                    {t('project_home_page.card3_text')}
                  </p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] border border-[#464850] flex flex-col justify-between min-h-[300px] sm:min-h-[400px]"
                >
                  <h3 className="text-[20px] sm:text-[32px] font-medium sm:leading-[120%]">
                    {t('project_home_page.card4_title')}
                  </h3>
                  <img
                    className="w-full h-full max-w-[340px]  max-h-[210px]  sm:max-h-[290px] object-contain mx-auto"
                    src={project6}
                    alt="project6"
                    loading="lazy"
                  />
                  <p className="text-[16px] sm:text-[20px] leading-[140%] text-[#ffffffcc]">
                    {t('project_home_page.card4_text')}
                  </p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 15%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="p-[32px] rounded-[24px] backdrop-blur-[2px] text-[#fff] border border-[#464850] flex flex-col justify-between min-h-[300px] sm:min-h-[400px]"
                  onClick={() => navigate('/portfolio/details/2')}
                >
                  <h3 className="text-[20px] sm:text-[32px] font-medium sm:leading-[120%]">
                    {t('project_home_page.card5_title')}
                  </h3>
                  <img
                    className="w-full max-w-[340px]  h-full  max-h-[210px] sm:max-h-[290px] object-contain mx-auto"
                    src={project8}
                    alt="IMPERIAL GRANITE"
                    loading="lazy"
                  />
                  <p className="text-[16px] sm:text-[20px] leading-[140%] text-[#ffffffcc]">
                    {t('project_home_page.card5_text')}
                  </p>
                </li>
              </SwiperSlide>
            </Swiper>

            <div className="md:mt-0 flex justify-center">
              <div className="custom-pagination4 custom"></div>
            </div>
          </div>
          <NavLink
            to={'/portfolio'}
            className="block md:hidden bg-[transparent] text-[#61A6FF] text-[20px] rounded-[48px] px-[24px] py-[12px] border cursor-pointer  text-center font-[Public_Sans]"
          >
            {t('project_home_page.button_text')}
          </NavLink>
        </div>
      </section>
    );
  }
};

export default Projects;
