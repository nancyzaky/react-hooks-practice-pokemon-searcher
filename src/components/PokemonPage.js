import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const fetchUrl = () => {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [setPokemon]);
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon} />
      <br />
      <Search pokemon={pokemon} setPokemon={setPokemon} />
      <br />
      <PokemonCollection pokemon={pokemon} setPokemon={setPokemon} />
    </Container>
  );
}

export default PokemonPage;
