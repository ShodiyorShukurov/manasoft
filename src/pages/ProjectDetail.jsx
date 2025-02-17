import React from 'react';
import workImg from '../assets/image/workImg.png';
import WorkPage from './WorkPage';
import Projects from './Projects';
import macImg from '../assets/image/Mac Studio.png';

const ProjectDetail = () => {
  return (
    <main className="py-[120px]">
      <section>
        <div className="container">
          <div
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
            }}
            className="flex justify-between border border-[#ffffff33] rounded-[32px] p-[48px] backdrop-blur-[2px] text-white"
          >
            <div>
              <h3 className="text-[32px] font-font-medium leading-[32px]">
                Manasoft
              </h3>
              <h4 className="text-[24px] font-font-semibold leading-[28.8px] mt-[32px]">
                IT kompaniya veb sayti
              </h4>
              <p className="text-[20px] text-[#ffffffcc] leading-[28px] mt-[24px] w-full max-w-[540px]">
                Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda CRM
                va ERP tizimlari orqali biznesingizni avtomatlashtirib, uni
                keyingi bosqichga olib chiqishga yordam beradi.
              </p>

              <div className="flex items-center pt-[120px] gap-[32px]">
                <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[24px] py-[16px] leading-[100%] border border-[#4266B1]">
                  UX/Ui
                </button>
                <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[24px] py-[16px] leading-[100%] border border-[#4266B1]">
                  Branding
                </button>
                <button className="text-[#FFFFFF] text-[16px] rounded-[24px] px-[24px] py-[16px] leading-[100%] border border-[#4266B1]">
                  Vebsayt
                </button>
              </div>
            </div>
            <img src={macImg} alt="Img" width={480} />
          </div>

          <h2 className="text-white text-[48px] leading-[57.6px] font-medium text-center mt-[120px] mb-[80px]">
            Loyihaning xususiyatlari
          </h2>

          <ul className='space-y-10'>
            <li className="text-white flex items-center justify-between">
              <div>
                <h4 className="text-[24px] font-font-semibold leading-[28.8px] mt-[32px]">
                  IT kompaniya veb sayti
                </h4>
                <p className="text-[20px] leading-[28px] mt-[24px] w-full max-w-[540px]">
                  Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda
                  CRM va ERP tizimlari orqali biznesingizni avtomatlashtirib,
                  uni keyingi bosqichga olib chiqishga yordam beradi.
                </p>

                <div
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="border border-[#ffffff33] rounded-[32px] p-[48px] backdrop-blur-[2px] flex items-center justify-center mt-[24px]"
                >
                  <img src={macImg} alt="img" width={300} height={300} />
                </div>
              </div>

              <div
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                }}
                className="border border-[#ffffff33] rounded-[32px] p-[64px] backdrop-blur-[2px]"
              >
                <img src={macImg} alt="img" width={560} height={420} />
              </div>
            </li>
            <li className="text-white flex items-center justify-between">
              <div
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                }}
                className="border border-[#ffffff33] rounded-[32px] p-[64px] backdrop-blur-[2px]"
              >
                <img src={macImg} alt="img" width={560} height={420} />
              </div>
              <div>
                <h4 className="text-[24px] font-font-semibold leading-[28.8px] mt-[32px]">
                  IT kompaniya veb sayti
                </h4>
                <p className="text-[20px] leading-[28px] mt-[24px] w-full max-w-[540px]">
                  Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda
                  CRM va ERP tizimlari orqali biznesingizni avtomatlashtirib,
                  uni keyingi bosqichga olib chiqishga yordam beradi.
                </p>

                <div
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="border border-[#ffffff33] rounded-[32px] p-[48px] backdrop-blur-[2px] flex items-center justify-center mt-[24px]"
                >
                  <img src={macImg} alt="img" width={300} height={300} />
                </div>
              </div>
            </li>
            <li className="text-white flex items-center justify-between">
              <div>
                <h4 className="text-[24px] font-font-semibold leading-[28.8px] mt-[32px]">
                  IT kompaniya veb sayti
                </h4>
                <p className="text-[20px] leading-[28px] mt-[24px] w-full max-w-[540px]">
                  Manasoft Telegram botlar, mobil ilovalar, veb-saytlar hamda
                  CRM va ERP tizimlari orqali biznesingizni avtomatlashtirib,
                  uni keyingi bosqichga olib chiqishga yordam beradi.
                </p>

                <div
                  style={{
                    background:
                      'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                  }}
                  className="border border-[#ffffff33] rounded-[32px] p-[48px] backdrop-blur-[2px] flex items-center justify-center mt-[24px]"
                >
                  <img src={macImg} alt="img" width={300} height={300} />
                </div>
              </div>

              <div
                style={{
                  background:
                    'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%), rgba(255, 255, 255, 0.02)',
                }}
                className="border border-[#ffffff33] rounded-[32px] p-[64px] backdrop-blur-[2px]"
              >
                <img src={macImg} alt="img" width={560} height={420} />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <WorkPage />

      <Projects />
    </main>
  );
};

export default ProjectDetail;
