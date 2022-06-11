import bcThumb from "../../img/rbc-thumb.png";

function WorksCard(props: any) {
  return (
    <a href={props.link} className="w" target="_blank">
      <div className="w__thumbnail">
        <img src={props.thumbnail} alt="bc-thumbnail" />
      </div>
      <div className="w__content">
        <h4 className="w__title">{props.title}</h4>
        <span className="w__excerpt">{props.link}</span>
      </div>
    </a>
  );
}
export default WorksCard;
