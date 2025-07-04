import banner from "../assets/raiGroup/banner.png";
import card1smallImg from "../assets/raiGroup/card1-imgsmall.png";
import card1BigImg from "../assets/raiGroup/card1-imgbig.png";
import card2smallImg from "../assets/raiGroup/card2-imgsmall.png";
import card2BigImg from "../assets/raiGroup/card2-imgbig.png";

const portfolio5 = (t) => ({
  portfolioData: {
    id: 5,
    banner_title: t("project5.banner_title"),
    banner_subtitle: t("project5.banner_subtitle"),
    banner_text: t("project5.banner_text"),
    banner_button3: t("project5.banner_button3"),
    banner_button3_link: "https://raigroup.uz/",
    banner_image: banner,
    banner_property1: t("project1.banner_property1"),
    banner_property2: t("project1.banner_property2"),
    title: t("project5.project_title"),
    cards: [
      {
        id: 1,
        title: t("project5.project_card1_title"),
        text: t("project5.project_card1_text"),
        smallImg: card1smallImg,
        bigImg: card1BigImg,
      },
      {
        id: 2,
        title: t("project5.project_card2_title"),
        text: t("project5.project_card2_text"),
        smallImg: card2smallImg,
        bigImg: card2BigImg,
      },
    ],
  },
});

export default portfolio5;
