import banner from '../assets/planner/banner.png';
import card1smallImg from '../assets/planner/card1-imgsmall.png';
import card1BigImg from '../assets/planner/card1-imgbig.png';
import card2smallImg from '../assets/planner/card2-imgsmall.png';
import card2BigImg from '../assets/planner/card2-imgbig.png';
;


const portfolio10 = (t) => ({
  portfolioData: {
    id: 10,
    banner_title: t('project10.banner_title'),
    banner_subtitle: t('project10.banner_subtitle'),
    banner_text: t('project10.banner_text'),
    banner_button3: t('project10.banner_button3'),
    banner_button3_link: 'https://t.me/Lifeplanneruz_bot',
    banner_image: banner,
    banner_property1: t('project10.banner_property1'),
    title: t('project10.project_title'),
    cards: [
      {
        id: 1,
        title: t('project10.project_card1_title'),
        text: t('project10.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
      {
        id: 2,
        title: t('project9.project_card2_title'),
        text: t('project9.project_card2_text'),
        smallImg: card2smallImg,
        bigImg: card2BigImg,
      }
    ],
  },
});

export default portfolio10;
