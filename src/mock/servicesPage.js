import mobileApp from '../assets/image/mobile-apps.png';
import VebSayt from '../assets/image/veb-sayt.png';
import bots from '../assets/image/bots_image.png';
import crm from '../assets/image/crm.png';

const servicesPage = (t) => [
  {
    id: 1,
    title: t('services.services_page_card1_title'),
    subtitle: t('services.services_page_card1_subtitle'),
    text: t('services.services_page_card1_text'),
    services: t('services.services_page_card1_xizmatlar'),
    img: mobileApp,
  },
  {
    id: 2,
    title: t('services.services_page_card2_title'),
    subtitle: t('services.services_page_card2_subtitle'),
    text: t('services.services_page_card2_text'),
    services: t('services.services_page_card2_xizmatlar'),
    img: VebSayt,
  },
  {
    id: 3,
    title: t('services.services_page_card3_title'),
    subtitle: t('services.services_page_card3_subtitle'),
    text: t('services.services_page_card3_text'),
    services: t('services.services_page_card3_xizmatlar'),
    img: bots,
  },
  {
    id: 4,
    title: t('services.services_page_card4_title'),
    subtitle: t('services.services_page_card4_subtitle'),
    text: t('services.services_page_card4_text'),
    services: t('services.services_page_card4_xizmatlar'),
    img: crm,
  },
];

export default servicesPage;
