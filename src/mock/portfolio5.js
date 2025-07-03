import banner from '../assets/raiGroup/banner.png';
import card1smallImg from '../assets/alla/card1-imgsmall.png';
import card1BigImg from '../assets/alla/card1-imgbig.png';
import card2smallImg from '../assets/alla/card2-imgsmall.png';
import card2BigImg from '../assets/alla/card2-imgbig.png';


const portfolio5 = (t) => ({
  portfolioData: {
    id: 5,
    banner_title: t('project5.banner_title'),
    banner_subtitle: t('project5.banner_subtitle'),
    // banner_button1: t('project4.banner_button1'),
    // banner_button1_link: 'https://play.google.com/store/apps/details?id=com.evosoft_solutions.medagent',
    // banner_button: t('project4.banner_button2'),
    banner_image: banner,
    title: t('project4.project_title'),
    cards: [
      {
        id: 1,
        title: t('project4.project_card1_title'),
        text: t('project4.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
      {
        id: 2,
        title: t('project4.project_card2_title'),
        text: t('project3.project_card2_text'),
        smallImg: card2smallImg,
        bigImg: card2BigImg,
      },
    ],
  },
});

export default portfolio5;
