import banner from '../assets/granit/banner.png';
import card1smallImg from '../assets/granit/card1-imgsmall.png';
import card1BigImg from '../assets/granit/card1-imgbig.png';
import card2smallImg from '../assets/granit/card2-imgsmall.png';
import card2BigImg from '../assets/granit/card2-imgbig.png';
import card3smallImg from '../assets/granit/card3-imgsmall.png';
import card3BigImg from '../assets/granit/card3-imgbig.png';

const portfolio2 = (t) => ({
  portfolioData: {
    id: 1,
    banner_title: t('project2.banner_title'),
    banner_subtitle: t('project2.banner_subtitle'),
    banner_text: t('project2.banner_text'),
    banner_button1: t('project2.banner_button1'),
    banner_button1_link:
      'https://play.google.com/store/apps/details?id=com.granite.imperial',
    banner_button2: t('project2.banner_button2'),
    banner_button2_link:
      'https://apps.apple.com/uz/app/imperial-granite-mobile/id6740770667',
    banner_image: banner,
    banner_property1: t('project2.banner_property1'),
    banner_property2: t('project2.banner_property2'),
    title: t('project2.project_title'),
    cards: [
      {
        id: 1,
        title: t('project2.project_card1_title'),
        text: t('project2.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
      {
        id: 2,
        title: t('project2.project_card2_title'),
        text: t('project2.project_card2_text'),
        smallImg: card2smallImg,
        bigImg: card2BigImg,
      },
      {
        id: 3,
        title: t('project2.project_card3_title'),
        text: t('project2.project_card3_text'),
        smallImg: card3smallImg,
        bigImg: card3BigImg,
      },
    ],
  },
});

export default portfolio2;
