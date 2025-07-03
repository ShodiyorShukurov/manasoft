import banner from '../assets/hisobchi/banner.png';
import card1smallImg from '../assets/hisobchi/card1-imgsmall.png';
import card1BigImg from '../assets/hisobchi/card1-imgbig.png';
import card2smallImg from '../assets/hisobchi/card2-imgsmall.png';
import card2BigImg from '../assets/hisobchi/card2-imgbig.png';
;


const portfolio7 = (t) => ({
  portfolioData: {
    id: 7,
    banner_title: t('project7.banner_title'),
    banner_subtitle: t('project7.banner_subtitle'),
    banner_text: t('project7.banner_text'),
    banner_button3: t('project7.banner_button3'),
    banner_button3_link: 'https://t.me/Hisobchi_ai_bot',
    banner_image: banner,
    title: t('project7.project_title'),
    cards: [
      {
        id: 1,
        title: t('project7.project_card1_title'),
        text: t('project7.project_card1_text'),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
      {
        id: 2,
        title: t('project7.project_card2_title'),
        text: t('project7.project_card2_text'),
        smallImg: card2smallImg,
        bigImg: card2BigImg,
      }
    ],
  },
});

export default portfolio7;
