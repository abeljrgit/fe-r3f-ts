import logo from "../../img/logo.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__logo-copyright">
          <a href="#" className="footer__logo">
            <img src={logo} alt="Logo" />
          </a>
          <span>Copyright 2022 by Abel</span>
          <span>Designed in Figma</span>
        </div>
        <div className="footer__links">
          <div className="footer__links-col">
            <h3 className="footer__links-title">ABOUT ME</h3>
            <div className="footer__links-main">
              <a href="#">Blog</a>
              <a href="#">Skillsets</a>
            </div>
          </div>
          <div className="footer__links-col">
            <h3 className="footer__links-title">WORK</h3>
            <div className="footer__links-main">
              <a href="#">Front-end Mentor</a>
              <a href="#">Figma</a>
              <a href="#">Three.JS</a>
            </div>
          </div>
          <div className="footer__links-col">
            <h3 className="footer__links-title">SOCIAL</h3>
            <div className="footer__links-main">
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
              <a href="#">Gmail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
