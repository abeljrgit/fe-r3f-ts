function PortfolioSection(props: any) {
  const linkTags = props.links.map((link: any, i: number) => (
    <a href={link[1]} key={i} target="_blank">
      {link[0]}
    </a>
  ));

  return (
    <section className="portfolio-section" id={props.id}>
      <div className="portfolio-section__container">
        <div
          className={`portfolio-section__wrapper ${
            props.type === "reversed"
              ? "portfolio-section__wrapper--reversed"
              : ""
          }`}
        >
          <div className="portfolio-section__visual">
            <img src={props.image} alt="Image" />
          </div>
          <div
            className={`portfolio-section__content ${
              props.type === "reversed"
                ? "portfolio-section__content--reversed"
                : ""
            }`}
          >
            <h3 className="portfolio-section__content-title">
              {props.contentTitle}
            </h3>
            <p className="portfolio-section__content-paragraph">
              {props.paragraph}
            </p>
            <div className="portfolio-section__content-buttons">{linkTags}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortfolioSection;
