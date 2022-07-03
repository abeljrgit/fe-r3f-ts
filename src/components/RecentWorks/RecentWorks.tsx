import { useEffect, useState } from "react";
import WorksCard from "../Works/WorksCard";

function RecentBlog() {
  const [rwArr, setRwArr] = useState();
  let rwArrTemp: any;

  useEffect(() => {
    fetch("https://abel-jr.tech/wp-json/wp/v2/works?_embed")
      .then((response) => response.json())
      .then((data) => {
        rwArrTemp = data.map((post: any, i: number) => {
          return <WorksCard thumbnail={post._embedded["wp:featuredmedia"][0].link} title={post.title.rendered} link={post.acf.worksUrl} key={i} />;
        });
        setRwArr(rwArrTemp);
      });
  }, []);

  return (
    <section className="recentworks-section">
      <div className="recentworks-section__container">
        <div className="recentworks-section__wrapper">
          <div className="recentworks-section__title">Recent Works</div>
          <div className="recentworks-section__cards">{rwArr}</div>
        </div>
      </div>
    </section>
  );
}

export default RecentBlog;
