import banner from '../assets/medAgent/banner.png';
import card1smallImg from '../assets/medAgent/card1-imgsmall.png';
import card1BigImg from '../assets/medAgent/card1-imgbig.png';
import card2smallImg from '../assets/medAgent/card2-imgsmall.png';
import card2BigImg from '../assets/medAgent/card2-imgbig.png';
import card3smallImg from '../assets/medAgent/card3-imgsmall.png';
import card3BigImg from '../assets/medAgent/card3-imgbig.png';

const portfolio3 = (t) => ({
  portfolioData: {
    id: 3,
    banner_title: t('project3.banner_title'),
    banner_subtitle: t('project3.banner_subtitle'),
    banner_text: t('project3.banner_text'),
    banner_button1: t('project3.banner_button1'),
    banner_button1_link: 'https://play.google.com/store/apps/details?id=com.evosoft_solutions.medagent',
    banner_image: banner,
    title: t('project3.project_title'),
    cards: [
      {
        id: 1,
        title: t('project3.project_card1_title'),
        text: t('project3.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
      {
        id: 2,
        title: t('project3.project_card2_title'),
        text: t('project3.project_card2_text'),
        smallImg: card2smallImg,
        bigImg: card2BigImg,
      },
      {
        id: 3,
        title: t('project3.project_card3_title'),
        text: t('project3.project_card3_text'),
        smallImg: card3smallImg,
        bigImg: card3BigImg,
      },
    ],
  },
});

export default portfolio3;
