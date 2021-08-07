import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, setPokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((item) => {
        return <PokemonCard item={item} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
