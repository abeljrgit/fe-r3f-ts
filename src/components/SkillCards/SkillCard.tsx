function SkillCard(props: any) {
  const imageTags = props.imgArray.map((imgUrl: string, i: number) => (
    <img src={imgUrl} alt="Logo" key={i} />
  ));

  return (
    <div className="skcard">
      <div className="skcard__logos">{imageTags}</div>
      <h4 className="skcard__title">{props.title}</h4>
      <div className="skcard__details">{props.details}</div>
      <a href={props.goTo} className="skcard__seemore">
        <span>SEE MORE↓</span>
      </a>
    </div>
  );
}

export default SkillCard;
