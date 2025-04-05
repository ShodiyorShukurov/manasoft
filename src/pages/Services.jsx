import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import WorkPage from './WorkPage';
import Question from './Question';
import Customers from './Customers';
import ContactForm from './ContactForm';
import Partners from './Partners';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import servicesPage from '../mock/servicesPage';
import bgTop from '../assets/image/services_contact_bg1.png';
import bgBottom from '../assets/image/services_contact_bg2.png';
import servicesHome from '../mock/servicesHome';
import toast from 'react-hot-toast';

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Services = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const servicesData = servicesHome(t);
  const [isLoading, setIsLoading] = React.useState(false);


  if (location.pathname === '/services') {
    const servicesData = servicesPage(t);

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname === '/services']);

    const [formData, setFormData] = React.useState({
      fullName: '',
      phone: '',
    });

    const [errors, setErrors] = React.useState({
      fullName: '',
      phone: '',
    });

    const validateInput = (name, value) => {
      let error = '';

      if (!value) {
        error = t('contact_page.error');
      } else {
        if (name === 'fullName') {
          if (value.length < 5) error = t('contact_page.fullName_error1');
          else if (!/[A-Z]/.test(value))
            error = t('contact_page.fullName_error2');
          else if (!/[a-z]/.test(value))
            error = t('contact_page.fullName_error3');
        }

        if (name === 'phone') {
          const phoneRegex = /^\+998\d{9}$/;
          if (!phoneRegex.test(value)) error = t('contact_page.phone_error');
        }
      }

      setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      validateInput(name, value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      let newErrors = {};

      Object.keys(formData).forEach((key) => {
        validateInput(key, formData[key]);
        if (!formData[key]) newErrors[key] = t('contact_page.error');
      });

      setErrors(newErrors);

      if (!Object.values(newErrors).some((error) => error)) {
        setIsLoading(true)
        try {
          await fetch(
            'https://script.google.com/macros/s/AKfycbwKU2KM0xUF8wvEGYXYkxaEV15EimX8MgTpZsFMcoRuYpKcT6B9yf3TkD8i-56tpTS88Q/exec',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
              mode: 'no-cors',
              redirect: 'follow',
            }
          );

          setFormData({
            fullName: '',
            phone: '',
            message: '',
          });
          toast.success(t('contact_page.success'), {
            duration: 4000,
            position: 'top-center',
          });
        } catch (error) {
          console.error('Fetch xatosi:', error);
          toast.error(t('contact_page.error_message'), {
            duration: 4000,
            position: 'top-center',
          });
        } finally {
          setIsLoading(false);
        }
      }
    };

    return (
      <main>
        <section className="pt-[150px] md:pt-[230px]">
          <div className="container">
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[120%] text-center text-[#fff] max-w-[830px] mx-auto">
              {t('services.services_page_title')}
            </h2>
            <p className="text-[16px] md:text-[20px] leading-[140%] text-center text-[#ffffffcc] max-w-[830px] mx-auto mt-[12px] md:mt-[16px]">
              {t('services.services_page_text')}
            </p>

            <ul className="mt-[64px] md:mt-[90px] space-y-16 md:space-y-24 overflow-x-hidden">
              {servicesData.map((item) => (
                <li
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center ${
                    item.id % 2 === 0 ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  <div
                    className="md:[direction:ltr] text-[#ffffffcc]"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <button
                      style={{
                        background:
                          'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                        boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(30px)',
                      }}
                      className="text-white text-[12px] sm:text-[18px] rounded-[48px] px-[32px] py-3 leading-[100%] sm:leading-[150%]"
                    >
                      {item.subtitle}
                    </button>

                    <h3 className="text-[28px] md:text-[36px] font-semibold leading-[110%] md:leading-[120%] text-white mt-[24px] md:mt-[32px] max-w-[560px]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] md:text-[20px] leading-[140%] mt-[12px] md:mt-[16px] max-w-[590px]">
                      {item.text}
                    </p>
                    <p className="text-[16px] md:text-[20px] leading-[140%] mt-[12px] md:mt-[16px]">
                      {t('services.services')}
                    </p>
                    <ul
                      style={{ listStyle: 'inside' }}
                      className="text-[16px] md:text-[20px] leading-[140%]"
                    >
                      {item.services.split(', ').map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>

                    <a
                      href="#section_contact"
                      className="px-[24px] py-[16px] bg-[#61A6FF] rounded-[48px] mt-[32px] cursor-pointer text-[16px] text-center leading-[100%] block md:w-fit"
                    >
                      {t('services.services_button_text')}
                    </a>
                  </div>

                  <div
                    style={{
                      borderRadius: '30px',
                      border: '2px solid #464850',
                      background:
                        'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(0, 0, 255, 0.20) 0%, rgba(0, 0, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                      backdropFilter: 'blur(120px)',
                    }}
                    className="p-[32px] h-full  flex items-end"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <img
                      className="w-full max-w-[600px] h-full max-h-fit mx-auto my-auto"
                      src={item?.img}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <WorkPage />

        <section
          className="pt-[60px] md:pt-[80px] lg:pt-[120px]"
          id="section_contact"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div
              className="flex flex-col  border-[1px] border-[#fff] rounded-[24px] overflow-hidden"
              style={{
                background:
                  'radial-gradient(85.23% 128.42% at 29.08% -17.62%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="p-[32px] md:p-[64px]"
                style={{
                  backdropFilter: 'blur(2px)',
                  backgroundImage: `url(${bgBottom}), url(${bgTop})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right, top left',
                }}
              >
                <h2 className="text-white text-[32px] md:text-[48px] font-semibold leading-[120%]">
                  {t('contact_page.title')}
                </h2>
                <p className="text-[#ffffffcc] text-[16px]  md:text-[18px] leading-[140%] md:leading-[150%] mt-[16px] xl:max-w-[800px]">
                  {t('contact_page.description')}
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-between h-full max-w-[650px] mt-[20px]"
                >
                  <div className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b py-3 text-white placeholder:text-white focus:border-blue-400 transition-all outline-none ${
                          errors.fullName ? 'border-red-500' : 'border-white'
                        }`}
                        placeholder={t('contact_page.fullName')}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b py-3 text-white placeholder:text-white focus:border-blue-400 transition-all outline-none ${
                          errors.phone ? 'border-red-500' : 'border-white'
                        }`}
                        placeholder={t('contact_page.phone')}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#61A6FF] text-white py-3 px-6 rounded-[48px] mt-[40px] cursor-pointer md:w-fit "
                    disabled={isLoading}
                  >
                    {isLoading
                      ? t('contact_page.sending')
                      : t('contact_page.button_text')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Customers />
        <Question />
        {/* <Partners /> */}
        <ContactForm />
      </main>
    );
  } else {
    return (
      <section className="pt-[60px] md:pt-[80px] lg:pt-[120px]">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
            viewport={{ once: true }}
            className="text-center text-[48px] sm:text-[72px] lg:text-[96px] font-semibold leading-[120%] tracking-[0.96px]  lg:max-w-[1200px] mx-auto bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
          >
            {t('services.services_home_title1')
              .split('')
              .map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
          </motion.h2>

          <button
            style={{
              background:
                'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
              boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(30px)',
            }}
            className="text-[#FFFFFF] text-[12px] sm:text-[18px] rounded-[48px] px-[32px] py-[12px] leading-[100%] sm:leading-[150%] mx-auto block mt-[42px] md:mt-[96px]"
          >
            {t('services.services_home_text1')}
          </button>

          <h3 className="text-center text-[32px] sm:text-[40px] md:text-[48px] text-[#fff] font-medium leading-[120%] mx-auto mt-[16px] sm:mt-[24px]">
            {t('services.services_home_title2')}
          </h3>
          <p className="text-center text-[16px] sm:text-[20px] text-[#fff] leading-[140%] mx-auto mt-[12px] sm:mt-[16px] w-full max-w-[760px]">
            {t('services.services_home_text2')}
          </p>

          <ul
            className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 pt-[48px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {servicesData?.map((item) => (
              <li
                style={{
                  background:
                    'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                }}
                className="p-[32px] sm:p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55]"
                key={item.id}
              >
                <h4 className="xl:text-[32px] md:text-[28px] leading-[120%] font-medium">
                  {item.title}
                </h4>
                <p className="text-[18px] leading-[150%] mt-[16px] w-full max-w-[564px]">
                  {item.text}
                </p>
                <img
                  className="mx-auto mt-[46px] w-full max-w-[450px] h-auto object-cover"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

          <div className="md:hidden block mt-[32px] relative">
            <Swiper
              spaceBetween={30}
              loop={true}
              pagination={{
                el: '.custom-pagination3',
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[410px] sm:h-[450px] mySwiper"
            >
              {servicesData?.map((item) => (
                <SwiperSlide key={item.id}>
                  <li
                    style={{
                      background:
                        'radial-gradient(70.49% 86.46% at 50.08% 100%, rgba(97, 166, 255, 0.20) 15%, rgba(97, 166, 255, 0.00) 100%), rgba(255, 255, 255, 0.04)',
                    }}
                    className="p-[24px] rounded-[30px] backdrop-blur-[120px] text-white border-2 border-[#4D4D55] max-h-[330px] sm:min-h-[370px] h-full flex flex-col justify-between"
                  >
                    <h4 className="text-[24px] sm:text-[28px] leading-[120%] font-medium">
                      {item.title}
                    </h4>
                    <p className="text-[16px] sm:text-[18px] leading-[150%] w-full">
                      {item.text}
                    </p>
                    <div className="mx-auto">
                      <img
                        className="mt-[5px] ms:mt-0 w-[350px] sm:w-[400px]"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="md:mt-0 flex justify-center">
              <div className="custom-pagination3 custom"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Services;
