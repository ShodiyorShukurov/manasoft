import React from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import user1 from '../assets/logo/Ellipse 2.svg';
import user2 from '../assets/logo/Ellipse 3.svg';
import user3 from '../assets/logo/Ellipse 5.svg';
import project2 from '../assets/image/project2.png';
import project3 from '../assets/image/project3.png';

const tabs = [
  { id: 1, label: 'Hammasi' },
  { id: 2, label: 'Mobile ilova' },
  { id: 3, label: 'Vebsayt' },
  { id: 4, label: 'CRM' },
];

let projects = [
  {
    id: 1,
    title: 'Manasoft',
    description: 'IT kompaniya web sayti',
    image: project2,
    image1: project3,
  },
  {
    id: 2,
    title: 'Manasoft',
    type: 'Vebsayt',
    description: 'IT kompaniya web sayti',
    image: project2,
    image1: project3,
  },
  {
    id: 3,
    title: 'Manasoft',
    description: 'IT kompaniya web sayti',
    image: project2,
    image1: project3,
  },
  {
    id: 4,
    title: 'Manasoft',
    type: 'Mobile ilova',
    description: 'IT kompaniya web sayti',
    image: project2,
    image1: project3,
  },
  {
    id: 5,
    title: 'Manasoft',
    type: 'CRM',
    description: 'IT kompaniya web sayti',
    image: project2,
    image1: project3,
  },
  {
    id: 6,
    title: 'Manasoft',
    type: 'CRM',
    description: 'IT kompaniya web sayti',
    image: project2,
    image1: project3,
  },
];

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = React.useState(1);
  const [typetab, setTypeTab] = React.useState('Hammasi');

  let filtredArr =
    typetab !== 'Hammasi'
      ? projects.filter((project) => project.type === typetab)
      : projects;

  if (location.pathname == '/portfolio') {
    return (
      <section className="pt-[80px]">
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
              +100 ortiq loyihalar
            </span>
          </div>

          <h2 className="text-[48px] font-medium leading-[120%] tracking-[0.48px] bg-gradient-to-b text-white mt-[16px] text-center">
            Bizning loyihalarimiz
          </h2>

          <p className="text-[20px] text-[#ffffffcc] leading-[140%] tracking-[0.2px] mt-[16px] w-full max-w-[750px] mx-auto text-center">
            Biznesingizni samarali rivojlantirish uchun ishonchli IT hamkor
            kerakmi? Manasoft sizga zamonaviy, tezkor va ishonchli yechimlar
            taqdim etadi!
          </p>

          <div className="flex items-center gap-[16px] bg-transparent border border-[#4266B1] rounded-[24px] w-fit mx-auto mt-[80px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setTypeTab(tab.label);
                }}
                className={`px-[24px] py-[16px] text-sm font-medium rounded-[24px] transition-all duration-300 cursor-pointer
            ${
              activeTab === tab.id
                ? 'bg-[#4266B1] text-white'
                : 'text-gray-300 hover:text-white'
            }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-[64px] mb-[80px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtredArr.map((project) => (
              <div
                key={project.id}
                className="p-[32px] rounded-2xl shadow-lg border border-gray-700 cursor-pointer"
                onClick={() => navigate('/portfolio/details/' + project.id)}
                style={{
                  background:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)), radial-gradient(54.75% 109.5% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.016) 100%) ',
                }}
              >
                <h3 className="text-white text-[32px] font-medium leading-[32px]">
                  {project.title}
                </h3>
                <div className="mt-4 rounded-lg flex justify-between overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                    width={160}
                    height={350}
                  />
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="object-cover"
                    width={160}
                    height={350}
                  />
                </div>
                <p className="text-white mt-2 text-[24px] leading-[28px]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="pt-[120px]">
        <div className="container">
          {location.pathname == '/portfolio/details/' + id ? (
            ''
          ) : (
            <>
              <button
                style={{
                  background:
                    'linear-gradient(97deg, rgba(255, 255, 255, 0.08) 46.72%, rgba(153, 153, 153, 0.08) 87.27%)',
                  boxShadow: '0px 4px 24px 0px rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                }}
                className="text-[#FFFFFF] text-[18px] rounded-[48px] px-[32px] py-[12px] leading-[100%] cursor-pointer"
              >
                Bizning loyihalar
              </button>

              <div className="flex justify-between items-center">
                <h2 className="text-[48px] font-medium leading-[120%] text-[#fff] mt-[24px]">
                  Bizning loyihalarimiz bilan tanishing
                </h2>

                <NavLink
                  to={'/portfolio'}
                  className="bg-[transparent] text-[#61A6FF] text-[16px] rounded-[48px] px-[24px] py-[12px] border cursor-pointer"
                >
                  Hamma loyihalar
                </NavLink>
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
};

export default Projects;
