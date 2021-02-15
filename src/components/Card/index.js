import React from "react";
import "./Card.scss";

const Card = ({ cardKey, content: url, info, onCardClick, showPopover }) => {
  return (
    <div
      className={`card${showPopover ? "_showPopover" : ""}`}
      onClick={() => {
        onCardClick(info);
      }}
    >
      <img alt={cardKey} src={url}></img>
    </div>
  );
};

export default Card;
