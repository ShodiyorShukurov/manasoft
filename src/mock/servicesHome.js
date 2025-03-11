import crm from '../assets/image/crm.png';
import mobileApp from '../assets/image/mobile-apps.png';
import VebSayt from '../assets/image/veb-sayt.png';
import telegramBot from '../assets/image/services_home_bot.png';

const servicesHome = (t) => [
    {id:1, title: t('services.services_home_card1_title'), text: t('services.services_home_card1_text'), img:crm },
    {id:2, title: t('services.services_home_card2_title'), text: t('services.services_home_card2_text'), img:mobileApp },
    {id:3, title: t('services.services_home_card3_title'), text: t('services.services_home_card3_text'), img:telegramBot },
    {id:4, title: t('services.services_home_card4_title'), text: t('services.services_home_card4_text'), img:VebSayt,  },
]

export default servicesHome
