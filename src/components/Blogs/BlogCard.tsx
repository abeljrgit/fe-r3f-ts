import bcThumb from "../../img/rbc-thumb.png";

function BlogCard(props: any) {
  const categoryArrVal = ["Category1", "Category2", "Category3"];
  // const categories = props.categories.map((category: any, i: number) => {
  const categories = categoryArrVal.map((category: any, i: number) => {
    return (
      <div className="bc__category" key={i}>
        {category}
      </div>
    );
  });

  return (
    <a href="#" className="bc">
      <div className="bc__thumbnail">
        <img src={bcThumb} alt="bc-thumbnail" />
      </div>
      <div className="bc__content">
        <h4 className="bc__title">This is the Title</h4>
        <p className="bc__excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vehicula
          nunc, bibendum et sagittis parturient amet. Sed eu lectus morbi velit,
          pulvinar eu in risus.
        </p>
        <div className="bc__categories">{categories}</div>
      </div>
    </a>
  );
}

export default BlogCard;
