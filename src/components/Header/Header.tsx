import { useState } from "react";
import logo from "../../img/logo.svg";
import Burger from "./Burger";
import Link from "./Link";

function Header(props: any) {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const sideMenuOpen = (e: any) => {
    setSideMenuOpen(!isSideMenuOpen);
    if (isSideMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const onLinkClickHandler = (e: any) => {
    e.preventDefault();
    props.onChangePage(e.currentTarget.getAttribute("data-label"));
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header__links">
          <Link url="#" label="HOME" imageType="home" onLinkClick={onLinkClickHandler} />
          {/* <Link
            url="#"
            label="BLOG"
            imageType="chat"
            onLinkClick={onLinkClickHandler}
          /> */}
          <Link url="#" label="WORK" imageType="terminal" onLinkClick={onLinkClickHandler} />
        </div>
        <Burger status={isSideMenuOpen} toggleStatus={sideMenuOpen} />
        <div className={`header__sidemenu ${isSideMenuOpen ? "header__sidemenu--visible" : ""}`}>
          <Link url="#" label="HOME" imageType="home" onLinkClick={onLinkClickHandler} />
          {/* <Link url="#" label="BLOG" imageType="chat" onLinkClick={onLinkClickHandler} /> */}
          <Link url="#" label="WORK" imageType="terminal" onLinkClick={onLinkClickHandler} />
        </div>
      </div>
    </header>
  );
}
export default Header;
