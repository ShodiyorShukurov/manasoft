import banner from '../assets/fullContact/banner.png';
import card1smallImg from '../assets/fullContact/card1-imgsmall.png';
import card1BigImg from '../assets/fullContact/card1-imgbig.png';
;


const portfolio8 = (t) => ({
  portfolioData: {
    id: 8,
    banner_title: t('project8.banner_title'),
    banner_subtitle: t('project8.banner_subtitle'),
    banner_text: t('project8.banner_text'),
    banner_button3: t('project8.banner_button3'),
    banner_button3_link: 'https://t.me/IsaevFullContact_bot',
    banner_image: banner,
    banner_property1: t('project8.banner_property1'),
    title: t('project8.project_title'),
    cards: [
      {
        id: 1,
        title: t('project8.project_card1_title'),
        text: t('project8.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
    ],
  },
});

export default portfolio8;
