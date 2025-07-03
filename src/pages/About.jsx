import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="pt-[80px] sm:pt-[120px]" ref={ref}>
      <div className="container">
        <button
          style={{
            background:
              "linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)",
            boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(30px)",
          }}
          className="text-[#FFFFFF] text-[12px] sm:text-[18px] leading-[100%] sm:leading-[150%] rounded-[48px] px-[24px] sm:px-[32px] py-[12px]  mx-auto w-auto block"
        >
          {t("about.about_text")}
        </button>

        <h2 className="text-center text-white text-[32px] sm:text-[48px] leading-[120%] font-medium mt-[24px] sm:mt-[64px] tracking-[0.48px]">
          {t("about.about_title")}
        </h2>

        <p className="text-center text-white text-[16px] sm:text-[20px] leading-[140%] mt-[12px] sm:mt-[24px] w-full max-w-[886px] mx-auto">
          {t("about.about_subtitle")}
        </p>

        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[24px] mt-[32px] sm:mt-[48px] cursor-pointer text-[#fff]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Card 1 */}
          <li
            className="bg-[#ffffff0a] border border-[#333] rounded-[24px] p-[16px] sm:p-[32px] text-center 
                 row-start-2 lg:row-start-1"
          >
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              {inView && (
                <CountUp end={t("about.about_card1_count")} duration={10} />
              )}
              +
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              {t("about.about_card1_text")}
            </p>
          </li>

          {/* Card 2 */}
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[24px] py-[32px] px-[16px] sm:p-[32px]  text-center col-span-2 row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              {inView && (
                <CountUp end={t("about.about_card2_count")} duration={10} />
              )}
              M+
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              {t("about.about_card2_text")}
            </p>
          </li>

          {/* Card 3 */}
          <li
            className="bg-[#ffffff0a] border border-[#333] rounded-[24px] p-[16px] sm:p-[32px] text-center 
                 row-start-2 lg:row-start-1"
          >
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              {inView && (
                <CountUp end={t("about.about_card3_count")} duration={10} />
              )}
              +
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              {t("about.about_card3_text")}
            </p>
          </li>
        </ul>

        <ul
          className="grid grid-cols-2 lg:grid-cols-3 text-[#fff] gap-[16px] sm:gap-[24px] mt-[16px] sm:mt-[24px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <li className="bg-[#ffffff0a] border border-[#333] rounded-[24px]  p-[16px] sm:p-[32px]  text-center row-start-2 lg:row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              {inView && (
                <CountUp end={t("about.about_card4_count")} duration={10} />
              )}
              +
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              {t("about.about_card4_text")}
            </p>
          </li>

          <li className="bg-[#ffffff0a] col-span-2 lg:col-span-1 border border-[#333] rounded-[24px]  p-[16px] sm:p-[32px]  text-center row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              {inView && (
                <CountUp end={t("about.about_card5_count")} duration={10} />
              )}
              +
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              {t("about.about_card5_text")}
            </p>
          </li>

          <li className="bg-[#ffffff0a] border border-[#333] rounded-[24px]  p-[16px] sm:p-[32px]  text-center row-start-2 lg:row-start-1">
            <h3 className="text-[32px] sm:text-[48px] font-medium leading-[120%]">
              {inView && (
                <CountUp end={t("about.about_card6_count")} duration={10} />
              )}
              +
            </h3>
            <p className="text-[16px] sm:text-[24px] sm:font-semibold leading-[120%] mt-[12px]">
              {t("about.about_card6_text")}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
