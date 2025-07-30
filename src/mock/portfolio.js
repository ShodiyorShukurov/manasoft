import femmiPortfolio from "../assets/image/femmi-portfolio.png";
import granitPortfolio from "../assets/image/granit-portfolio.png";
import medAgentPortfolio from "../assets/image/medAgent-portfolio.png";
import allaPortfolio from "../assets/image/alla-portfolio.png";
import raiGroupPortfolio from "../assets/image/rai-portfolio.png";
import mohinur from "../assets/image/mohinur.png";
import hisobchi from "../assets/image/hisobchi-portfolio.png";
import fullContact from "../assets/image/full-contact-portfolio.png";
import planner from "../assets/image/planner-portfolio.png";

const portfolio = (t) => [
  {
    id: 1,
    title: t("project_page.card1_title"),
    text: t("project_page.card1_text"),
    img: femmiPortfolio,
    type: t("project_page.button_text1"),
  },
  {
    id: 2,
    title: t("project_page.card2_title"),
    text: t("project_page.card2_text"),
    img: granitPortfolio,
    type: t("project_page.button_text1"),
  },
  {
    id: 3,
    title: t("project_page.card3_title"),
    text: t("project_page.card3_text"),
    img: medAgentPortfolio,
    type: t("project_page.button_text1"),
  },
  {
    id: 4,
    title: t("project_page.card4_title"),
    text: t("project_page.card4_text"),
    img: allaPortfolio,
    type: t("project_page.button_text1"),
  },
  {
    id: 5,
    title: t("project_page.card5_title"),
    text: t("project_page.card5_text"),
    img: raiGroupPortfolio,
    type: t("project_page.button_text2"),
  },
  {
    id: 6,
    title: t("project_page.card6_title"),
    text: t("project_page.card6_text"),
    img: mohinur,
    type: t("project_page.button_text5"),
  },
  {
    id: 7,
    title: t("project_page.card7_title"),
    text: t("project_page.card7_text"),
    img: hisobchi,
    type: t("project_page.button_text5"),
  },
  {
    id: 8,
    title: t("project_page.card8_title"),
    text: t("project_page.card8_text"),
    img: fullContact,
    type: t("project_page.button_text5"),
  },
  {
    id: 9,
    title: t("project_page.card9_title"),
    text: t("project_page.card9_text"),
    img: planner,
    type: t("project_page.button_text5"),
  },
];

export default portfolio;
