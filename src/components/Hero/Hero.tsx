import abel from "../../img/abel.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__text">
            <h1 className="hero__title">
              Hello, I’m <span>Abel</span>.
            </h1>
            <h2 className="hero__lead">
              Software Engineer and Interface Designer.
            </h2>
            <p className="hero__paragraph">
              “The <span>public</span> is more familiar with bad design than
              good design. It is, in effect, conditioned to{" "}
              <span>prefer bad design</span>, because that is what it lives
              with. The <span>new becomes threatening</span>, the{" "}
              <span>old reassuring</span>.” --<span>Paul Rand</span>, graphic
              designer
            </p>
          </div>
          <div className="hero__avatar">
            <img src={abel} alt="Abel" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
