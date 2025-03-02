import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const WorkPage = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[80px] md:pt-[120px]">
      <div className="container">
        <h2 className="text-[32px] md:text-[48px] font-medium leading-[120%] text-[#fff] md:text-center">
          Bizning ishlash jarayonimiz
        </h2>
        <p className="text-[16px] md:text-[20px] text-[#ffffffcc] leading-[140%] tracking-[0.2px] mt-[12px] md:mt-[16px] w-full max-w-[750px] mx-auto md:text-center">
          Manasoft jamoasi har bir loyihani aniqlik va sifat bilan amalga
          oshiradi. Bizning yondashuv samaradorlik va innovatsiyani ta’minlaydi!
        </p>

        <h3 className="text-[24px] md:text-[32px] text-[#ffffff] leading-[140%] tracking-[0.2px] mt-[32px] md:mt-[48px] font-medium md:text-center">
          Ishlab chiqilishidan oldin
        </h3>

        <div className="md:hidden block mt-[16px] relative">
          <Swiper
            spaceBetween={50}
            loop={true}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
            }}
            modules={[Pagination]}
            className=" sm:h-[220px]  md:h-[280px] mySwiper"
          >
            <SwiperSlide>
              <li
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(2px)',
                  border: '1px solid #6F727C',
                  borderRadius: '24px',
                }}
                className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
              >
                <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                  Ma'lumotlarni yig'ish
                </h4>
                <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                  Muvaffaqiyatli loyiha yaratish uchun eng avvalo
                  ehtiyojlaringiz va biznes maqsadlaringizni chuqur o‘rganamiz.
                  Bu bosqichda biz ma’lumot to‘playmiz va strategik yo‘nalishni
                  aniqlaymiz.
                </p>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(2px)',
                  border: '1px solid #6F727C',
                  borderRadius: '24px',
                }}
                className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
              >
                <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                  Loyihaning TZ
                </h4>
                <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                  Loyiha muvaffaqiyatining kaliti – aniq va puxta ishlab
                  chiqilgan texnik topshiriq (TZ). Biz barcha talablarni
                  hujjatlashtiramiz va loyiha yo‘nalishini belgilaymiz.
                </p>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(2px)',
                  border: '1px solid #6F727C',
                  borderRadius: '24px',
                }}
                className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
              >
                <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                  Integratsiya va Tadqiqot
                </h4>
                <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                  Loyiha uchun eng mos texnologiyalarni tanlash, imkoniyatlarni
                  tahlil qilish va kerakli integratsiyalarni ishlab chiqish
                  bosqichi. Biz biznesingiz uchun eng optimal yechimni topamiz!
                </p>
              </li>
            </SwiperSlide>
          </Swiper>

          <div className="mt-[20px] md:mt-0 flex justify-center">
            <div className="custom-pagination custom"></div>
          </div>
        </div>

        <ul className="hidden md:grid grid-cols-3 gap-[24px] mt-[24px]">
          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(2px)',
              border: '1px solid #6F727C',
              borderRadius: '24px',
            }}
            className="p-[32px] text-white"
          >
            <h4 className="text-[24px] font-semibold leading-[120%]">
              Ma'lumotlarni yig'ish
            </h4>
            <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
              Muvaffaqiyatli loyiha yaratish uchun eng avvalo ehtiyojlaringiz va
              biznes maqsadlaringizni chuqur o‘rganamiz. Bu bosqichda biz
              ma’lumot to‘playmiz va strategik yo‘nalishni aniqlaymiz.
            </p>
          </li>

          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(2px)',
              border: '1px solid #6F727C',
              borderRadius: '24px',
            }}
            className="p-[32px] text-white"
          >
            <h4 className="text-[24px] font-semibold leading-[120%]">
              Loyihaning TZ
            </h4>
            <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
              Loyiha muvaffaqiyatining kaliti – aniq va puxta ishlab chiqilgan
              texnik topshiriq (TZ). Biz barcha talablarni hujjatlashtiramiz va
              loyiha yo‘nalishini belgilaymiz.
            </p>
          </li>

          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(2px)',
              border: '1px solid #6F727C',
              borderRadius: '24px',
            }}
            className="p-[32px] text-white"
          >
            <h4 className="text-[24px] font-semibold leading-[120%]">
              Integratsiya va Tadqiqot
            </h4>
            <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
              Loyiha uchun eng mos texnologiyalarni tanlash, imkoniyatlarni
              tahlil qilish va kerakli integratsiyalarni ishlab chiqish
              bosqichi. Biz biznesingiz uchun eng optimal yechimni topamiz!
            </p>
          </li>
        </ul>

        <h3 className="text-[24px] md:text-[32px] text-[#ffffff] leading-[140%] tracking-[0.2px] mt-[32px] md:mt-[48px] font-medium  md:text-center">
          Ishlab chiqilishidan oldin
        </h3>

        <div className="md:hidden block mt-[16px] relative">
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              el: '.custom-pagination1',
              clickable: true,
            }}
            modules={[Pagination]}
            className="sm:h-[220px] md:h-[280px]  mySwiper"
          >
            <SwiperSlide>
              <li
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(2px)',
                  border: '1px solid #6F727C',
                  borderRadius: '24px',
                }}
                className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
              >
                <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                  Dizayn loyihasi
                </h4>
                <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                  UX/UI dizayni – foydalanuvchilar bilan o‘zaro aloqani
                  yengillashtirish uchun asosiy omil. Biz loyihangizga mos
                  keladigan jozibali va funksional dizayn yaratamiz.
                </p>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(2px)',
                  border: '1px solid #6F727C',
                  borderRadius: '24px',
                }}
                className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
              >
                <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                  Rivojlanish prototipi
                </h4>
                <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                  Dastlabki prototip orqali loyiha qanday ishlashini sinovdan
                  o‘tkazamiz. Bu bosqichda asosiy funksiyalar shakllantiriladi
                  va dastlabki testlar o‘tkaziladi.
                </p>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(2px)',
                  border: '1px solid #6F727C',
                  borderRadius: '24px',
                }}
                className="p-[24px] text-white min-h-[170px] md:h-full flex flex-col"
              >
                <h4 className="text-[20px] md:text-[24px] font-semibold md:leading-[120%]">
                  Rivojlanish yakuniy
                </h4>
                <p className="text-[16px] md:text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
                  Loyiha to‘liq yakunlanadi, barcha funksiyalar sinovdan
                  o‘tkaziladi va optimallashtiriladi. Biz mijozlarimizga tayyor
                  mahsulotni yuqori sifat bilan taqdim etamiz!
                </p>
              </li>
            </SwiperSlide>
          </Swiper>
          <div className="mt-[20px] md:mt-0 flex justify-center">
            <div className="custom-pagination1 custom"></div>
          </div>
          
        </div>

        <ul className="hidden md:grid grid-cols-3 gap-[24px] mt-[24px]">
          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(2px)',
              border: '1px solid #6F727C',
              borderRadius: '24px',
            }}
            className="p-[32px] text-white"
          >
            <h4 className="text-[24px] font-semibold leading-[120%]">
              Dizayn loyihasi
            </h4>
            <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
              UX/UI dizayni – foydalanuvchilar bilan o‘zaro aloqani
              yengillashtirish uchun asosiy omil. Biz loyihangizga mos keladigan
              jozibali va funksional dizayn yaratamiz.
            </p>
          </li>

          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(2px)',
              border: '1px solid #6F727C',
              borderRadius: '24px',
            }}
            className="p-[32px] text-white"
          >
            <h4 className="text-[24px] font-semibold leading-[120%]">
              Rivojlanish prototipi
            </h4>
            <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
              Dastlabki prototip orqali loyiha qanday ishlashini sinovdan
              o‘tkazamiz. Bu bosqichda asosiy funksiyalar shakllantiriladi va
              dastlabki testlar o‘tkaziladi.
            </p>
          </li>

          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(97, 166, 255, 0.08) 1.5%, rgba(97, 166, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(2px)',
              border: '1px solid #6F727C',
              borderRadius: '24px',
            }}
            className="p-[32px] text-white"
          >
            <h4 className="text-[24px] font-semibold leading-[120%]">
              Rivojlanish yakuniy
            </h4>
            <p className="text-[18px] leading-[150%] mt-[16px] text-[#ffffffcc]">
              Loyiha to‘liq yakunlanadi, barcha funksiyalar sinovdan o‘tkaziladi
              va optimallashtiriladi. Biz mijozlarimizga tayyor mahsulotni
              yuqori sifat bilan taqdim etamiz!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkPage;
