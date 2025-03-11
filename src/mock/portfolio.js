import femmiPortfolio from '../assets/image/femmi-portfolio.png';
import granitPortfolio from '../assets/image/granit-portfolio.png';
import medAgentPortfolio from '../assets/image/medAgent-portfolio.png';

const portfolio = (t) => [
  {
    id: 1,
    title: t('project_page.card1_title'),
    text: t('project_page.card1_text'),
    img: femmiPortfolio,
    type: t('project_page.button_text1'),
  },
  {
    id: 2,
    title: t('project_page.card2_title'),
    text: t('project_page.card2_text'),
    img: granitPortfolio,
    type: t('project_page.button_text1'),
  },
  {
    id: 3,
    title: t('project_page.card3_title'),
    text: t('project_page.card3_text'),
    img: medAgentPortfolio,
    type: t('project_page.button_text1'),
  },
];

export default portfolio;
