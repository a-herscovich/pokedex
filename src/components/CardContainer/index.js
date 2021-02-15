import React, { useState } from "react";
import Card from "../Card";
import CardPopover from "../CardPopover";
import "./CardContainer.scss";

const CardContainer = ({ pokemonCards = [] }) => {
  const [activeCard, setActiveCard] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  const onCardClick = (card) => {
    setActiveCard(card);
    setShowPopover(!showPopover);
  };

  return (
    <div className="cardContainer">
      {pokemonCards.map((data) => {
        return (
          <>
            <Card
              className={showPopover ? "card_showPopover" : "card"}
              key={data.id}
              cardKey={data.id}
              content={data.imageUrl}
              info={data}
              onCardClick={onCardClick}
              showPopover={showPopover}
            >
              {data.name}
            </Card>
            {showPopover && (<CardPopover info={activeCard} data={data} showPopover={showPopover} onCardClick={onCardClick} />)}
          </>
        );
      })}
    </div>
  );
};

export default CardContainer;
