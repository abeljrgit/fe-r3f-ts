import SkillCard from "./SkillCard";
import figmaLogo from "../../img/figma-logo.svg";
import sassLogo from "../../img/sass-logo.svg";
import pugLogo from "../../img/pug-logo.svg";
import typescriptLogo from "../../img/typescript-logo.svg";
import reactLogo from "../../img/react-logo.svg";
import blenderLogo from "../../img/blender-logo.svg";
import threejsLogo from "../../img/threejs-logo.svg";

function SkillCards() {
  return (
    <section className="skcards">
      <div className="skcards__container">
        <div className="skcards__wrapper">
          <SkillCard
            goTo="#figmaPortfolio"
            imgArray={[figmaLogo]}
            title="UI/UX DESIGN"
            details="Create design system and mockups for website and mobile application for the developer’s reference."
          />
          <SkillCard
            goTo="#frontendmentorPortfolio"
            imgArray={[sassLogo, pugLogo, typescriptLogo, reactLogo]}
            title="FRONT-END STACK"
            details="Develop website using latest languages and node packages."
          />
          <SkillCard
            goTo="#3dPortfolio"
            imgArray={[threejsLogo, blenderLogo]}
            title="3D-DESIGN"
            details="Develop real world materials using blender and three.js"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillCards;
