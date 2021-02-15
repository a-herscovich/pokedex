import React, { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import "./Container.scss";

const Container = () => {
  const [pokemonCards, setPokemonCards] = useState();

  const fetchData = async (value) => {
    const data = value
      ? await fetch(`https://api.pokemontcg.io/v1/cards?name=${value}`)
      : await fetch(`https://api.pokemontcg.io/v1/cards`);
    const cards = await data.json();
    setPokemonCards(cards.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Searchbar fetchData={fetchData} />
      {pokemonCards && pokemonCards.length > 0 && (
        <CardContainer pokemonCards={pokemonCards} />)}
      <Footer />
    </div>
  );
};

export default Container;
