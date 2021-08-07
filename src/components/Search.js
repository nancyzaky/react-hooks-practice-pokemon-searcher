import React, { useRef, useEffect } from "react";

function Search({ pokemon, setPokemon }) {
  const inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          ref={inputRef}
          onChange={() => {
            const wordLength = inputRef.current.value.length;
            if (wordLength) {
              const result = pokemon.filter((item) => {
                console.log(item.name.slice(0, wordLength));
                return (
                  item.name.slice(0, wordLength) === inputRef.current.value
                );
              });
              setPokemon(result);
            } else {
              fetch("http://localhost:3000/pokemon")
                .then((resp) => resp.json())
                .then((data) => {
                  setPokemon(data);
                });
            }
          }}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
