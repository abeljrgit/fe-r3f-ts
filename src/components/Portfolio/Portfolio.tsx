import { Fragment } from "react";
import PortfolioSection from "./PortfolioSection";
import cheeseVisual from "../../img/cheese-visual.png";
import figmaVisual from "../../img/figma-visual.png";
import practiceVisual from "../../img/practice-visual.png";

function Portfolio() {
  const secObj1 = [
    [
      "DESIGN SYSTEM",
      "https://www.figma.com/file/BMnuAnhXc212UVfTqJmmgy/00-DESIGN-SYSTEM",
    ],
    [
      "WEB DRAFTS",
      "https://www.figma.com/file/d5VA0RwjaRiuW8X2h7aE4X/02-DESIGNS",
    ],
  ];
  const secOb2 = [
    ["FRONTENDMENTOR.IO", "https://www.frontendmentor.io/profile/abeljrgit"],
  ];
  const secOb3 = [
    ["ABELJRGIT/THREE", "https://github.com/abeljrgit/fe-r3f-ts"],
  ];

  return (
    <Fragment>
      <PortfolioSection
        id="figmaPortfolio"
        image={figmaVisual}
        contentTitle="Figma Design System"
        paragraph="Figma is a powerful tool to draft some user interfaces or experiences. I have established my design system, which I think is essential to have a framework in designing my web applications."
        links={secObj1}
      />
      <PortfolioSection
        id="frontendmentorPortfolio"
        image={practiceVisual}
        contentTitle="Front-End Mentor"
        paragraph="They always say that practice makes perfect, therefore I created a frontendmentor.io account to enhance my front-end stack development skills. The website provides free mock-up web design that novice developer can apply his/her skills just like in real industry."
        links={secOb2}
        type="reversed"
      />
      <PortfolioSection
        id="3dPortfolio"
        image={cheeseVisual}
        contentTitle="Three.JS and Blender"
        paragraph="I was inspired by many developers who can make sophisticated websites. Most of them applied some 3d objects to improve user experiences, so I said to myself that I just wanna study it and make it part of my skillset. Three.js is Javascript library and API that a developer can use to implement animation or 3-dimension design in a web browser."
        links={secOb3}
      />
    </Fragment>
  );
}

export default Portfolio;
