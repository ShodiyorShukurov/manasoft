import banner from '../assets/femmi/banner.png';
import card1smallImg from '../assets/femmi/card1-imgsmall.png';
import card1BigImg from '../assets/femmi/card1-imgbig.png';
import card2smallImg from '../assets/femmi/card2-imgsmall.png';
import card2BigImg from '../assets/femmi/card2-imgbig.png';
import card3smallImg from '../assets/femmi/card3-imgsmall.png';
import card3BigImg from '../assets/femmi/card3-imgbig.png';

const portfolio1 = (t) => ({
  portfolioData: {
    id: 1,
    banner_title: t('project1.banner_title'),
    banner_subtitle: t('project1.banner_subtitle'),
    banner_text: t('project1.banner_text'),
    banner_button1: t('project1.banner_button1'),
    banner_button1_link: '',
    banner_button2: t('project1.banner_button2'),
    banner_button2_link:
      'https://apps.apple.com/app/femmy-ayollar-kalendari/id6739880529',
    banner_image: banner,
    title: t('project1.project_title'),
    cards: [
      {
        id: 1,
        title: t('project1.project_card1_title'),
        text: t('project1.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
      {
        id: 2,
        title: t('project1.project_card2_title'),
        text: t('project1.project_card2_text'),
        smallImg: card2smallImg,
        bigImg: card2BigImg,
      },
      {
        id: 3,
        title: t('project1.project_card3_title'),
        text: t('project1.project_card3_text'),
        smallImg: card3smallImg,
        bigImg: card3BigImg,
      },
    ],
  },
});

export default portfolio1;
