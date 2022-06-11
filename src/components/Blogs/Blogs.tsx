import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <section className="blogs">
      <div className="blogs__container">
        <div className="blogs__wrapper">
          <h2 className="blogs__title">Blog Post</h2>
          <div className="blogs__cards">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="blogs__pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <div>...</div>
            <a href="#">20</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
