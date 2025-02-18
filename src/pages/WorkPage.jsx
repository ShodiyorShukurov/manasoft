import React from 'react';
import workImg from '../assets/image/workImg.png';
import { useTranslation } from 'react-i18next';

const WorkPage = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[140px]">
      <div className="container">
        <h2 className="text-[48px] font-medium leading-[120%] tracking-[0.48px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
        {t('workpage.workpage_title')}
        </h2>
        <p className="text-[20px] text-[#ffffffcc] leading-[140%] tracking-[0.2px] mt-[16px] w-full max-w-[750px]">
        {t('workpage.workpage_subtitle')}
        </p>

        <ul className="mt-[46px] space-y-[48px]">
          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
            }}
            className="flex gap-[24px] border border-[#ffffff33] rounded-[32px] p-[48px] backdrop-blur-[2px] text-white"
          >
            <div>
              <button
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255, 255, 255, 0.08) 8.66%, rgba(255, 255, 255, 0.05) 105.37%)',
                  boxShadow:
                    '3px 5px 8px 0px rgba(255, 255, 255, 0.16) inset, 0px 4px 16px 0px rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                  border: '1.5px solid',
                  borderImageSource:
                    'linear-gradient(360deg, rgba(0, 0, 240, 0.12) -13.08%, rgba(255, 255, 255, 0.12) 119.23%)',
                }}
                className="text-[16px] rounded-[24px] px-[24px] py-[12px] leading-[100%] mx-auto md:mx-0"
              >
                01
              </button>
              <h3 className="text-[32px] font-font-semibold leading-[120%] mt-[24px]">
                UX tadqiqotlar
              </h3>
              <p className="text-[18px] leading-[150%] mt-[24px]">
                Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda CRM
                va ERP tizimlari orqali biznesingizni avtomatlashtirib, uni
                keyingi bosqichga olib chiqishga yordam beradi. Bizning
                ishonchli va tezkor IT yechimlarimiz iOS va Android
                platformalari uchun sifatli ilovalar yaratish, zamonaviy
                veb-saytlar ishlab chiqish hamda biznes jarayonlarini
                optimallashtirishga qaratilgan.
              </p>
            </div>
            <img src={workImg} alt="Img" width={600} />
          </li>
          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
            }}
            className="flex gap-[24px] border border-[#ffffff33] rounded-[32px] p-[48px] backdrop-blur-[2px] text-white"
          >
            <div>
              <button
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255, 255, 255, 0.08) 8.66%, rgba(255, 255, 255, 0.05) 105.37%)',
                  boxShadow:
                    '3px 5px 8px 0px rgba(255, 255, 255, 0.16) inset, 0px 4px 16px 0px rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                  border: '1.5px solid',
                  borderImageSource:
                    'linear-gradient(360deg, rgba(0, 0, 240, 0.12) -13.08%, rgba(255, 255, 255, 0.12) 119.23%)',
                }}
                className="text-[16px] rounded-[24px] px-[24px] py-[12px] leading-[100%] mx-auto md:mx-0"
              >
                01
              </button>
              <h3 className="text-[32px] font-font-semibold leading-[120%] mt-[24px]">
                UX tadqiqotlar
              </h3>
              <p className="text-[18px] leading-[150%] mt-[24px]">
                Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda CRM
                va ERP tizimlari orqali biznesingizni avtomatlashtirib, uni
                keyingi bosqichga olib chiqishga yordam beradi. Bizning
                ishonchli va tezkor IT yechimlarimiz iOS va Android
                platformalari uchun sifatli ilovalar yaratish, zamonaviy
                veb-saytlar ishlab chiqish hamda biznes jarayonlarini
                optimallashtirishga qaratilgan.
              </p>
            </div>
            <img src={workImg} alt="Img" width={600} />
          </li>
          <li
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
            }}
            className="flex gap-[24px] border border-[#ffffff33] rounded-[32px] p-[48px] backdrop-blur-[2px] text-white"
          >
            <div>
              <button
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255, 255, 255, 0.08) 8.66%, rgba(255, 255, 255, 0.05) 105.37%)',
                  boxShadow:
                    '3px 5px 8px 0px rgba(255, 255, 255, 0.16) inset, 0px 4px 16px 0px rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                  border: '1.5px solid',
                  borderImageSource:
                    'linear-gradient(360deg, rgba(0, 0, 240, 0.12) -13.08%, rgba(255, 255, 255, 0.12) 119.23%)',
                }}
                className="text-[16px] rounded-[24px] px-[24px] py-[12px] leading-[100%] mx-auto md:mx-0"
              >
                01
              </button>
              <h3 className="text-[32px] font-font-semibold leading-[120%] mt-[24px]">
                UX tadqiqotlar
              </h3>
              <p className="text-[18px] leading-[150%] mt-[24px]">
                Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda CRM
                va ERP tizimlari orqali biznesingizni avtomatlashtirib, uni
                keyingi bosqichga olib chiqishga yordam beradi. Bizning
                ishonchli va tezkor IT yechimlarimiz iOS va Android
                platformalari uchun sifatli ilovalar yaratish, zamonaviy
                veb-saytlar ishlab chiqish hamda biznes jarayonlarini
                optimallashtirishga qaratilgan.
              </p>
            </div>
            <img src={workImg} alt="Img" width={600} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkPage;
