import { Fragment, useState } from "react";
import "./App.scss";
import Blogs from "./Blogs/Blogs";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";
import RecentBlog from "./RecentWorks/RecentWorks";
import SkillCards from "./SkillCards/SkillCards";
import Works from "./Works/Works";

function App() {
  const [isCurrentContent, setisCurrentContent] = useState("HOME");

  const onChangePageHandler = (e: any) => {
    setisCurrentContent(e);
  };

  return (
    <Fragment>
      <Header onChangePage={onChangePageHandler} />
      {isCurrentContent === "HOME" && (
        <Fragment>
          <Hero />
          <SkillCards />
          <Portfolio />
          <RecentBlog />
          <ContactMe />
        </Fragment>
      )}
      {isCurrentContent === "BLOG" && (
        <Fragment>
          <Blogs />
        </Fragment>
      )}
      {isCurrentContent === "WORK" && (
        <Fragment>
          <Works />
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
}

export default App;
