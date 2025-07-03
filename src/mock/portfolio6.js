import banner from '../assets/mohinur/banner.png';
import card1smallImg from '../assets/mohinur/card1-imgsmall.png';
import card1BigImg from '../assets/mohinur/card1-imgbig.png';
;


const portfolio6 = (t) => ({
  portfolioData: {
    id: 6,
    banner_title: t('project6.banner_title'),
    banner_subtitle: t('project6.banner_subtitle'),
    banner_text: t('project6.banner_text'),
    banner_button3: t('project6.banner_button3'),
    banner_button3_link: 'https://t.me/mohinurrahimjonova_bot',
    banner_image: banner,
    title: t('project6.project_title'),
    cards: [
      {
        id: 1,
        title: t('project6.project_card1_title'),
        text: t('project6.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      }
    ],
  },
});

export default portfolio6;
