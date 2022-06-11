import { useState } from "react";

function Burger(props: any) {
  return (
    <div
      className={`burger ${props.status ? "burger--opened" : ""}`}
      onClick={props.toggleStatus}
    >
      <div className="burger__wrapper">
        <div className="burger__line">&nbsp;</div>
        <div className="burger__line">&nbsp;</div>
        <div className="burger__line">&nbsp;</div>
      </div>
    </div>
  );
}

export default Burger;
