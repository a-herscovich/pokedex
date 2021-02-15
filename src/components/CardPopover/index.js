import React from "react";
import "./CardPopover.scss";

const CardPopover = (info, showPopover, onCardClick) => {
  console.log("info: ", info.data)
  return (
    <div
      className={`cardPopover${showPopover ? "_show" : ""}`}
      onClick={() => { onCardClick(info.data); }}
    >
      <img className="pokeball" src="https://webstockreview.net/images/pokeball-clipart-1.png" alt="pokeball" />
      <p>{`Name: ${info.info.name}`}</p>
      <p>{`Types: ${info.info.types}`}</p>
      <p>{`Set: ${info.info.set}`}</p>
      <p>{`Series: ${info.info.series}`}</p>
    </div>
  );
};

export default CardPopover;
