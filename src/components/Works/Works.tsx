import { useEffect, useState } from "react";
import WorksCard from "./WorksCard";

function Works() {
  const [rwArr, setRwArr] = useState();
  let rwArrTemp: any;

  useEffect(() => {
    fetch("https://abel-jr.tech/wp-json/wp/v2/works?_embed&per_page=6")
      .then((response) => response.json())
      .then((data) => {
        rwArrTemp = data.map((post: any, i: number) => {
          return <WorksCard thumbnail={post._embedded["wp:featuredmedia"][0].link} title={post.title.rendered} link={post.acf.worksUrl} key={i} />;
        });
        setRwArr(rwArrTemp);
      });
  }, []);

  return (
    <section className="works">
      <div className="works__container">
        <div className="works__wrapper">
          <h2 className="works__title">Works</h2>
          <div className="works__cards">{rwArr}</div>
        </div>
      </div>
    </section>
  );
}
export default Works;
