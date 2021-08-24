import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const fetchUrl = () => {
    fetch("http://localhost:3001/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  };
  const addPokemon = (obj) => {
    setPokemon([...pokemon, obj]);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search pokemon={pokemon} setPokemon={setPokemon} />
      <br />
      <PokemonCollection pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
