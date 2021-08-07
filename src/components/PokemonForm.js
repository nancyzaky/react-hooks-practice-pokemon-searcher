import React, { useState, useRef } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemon, setPokemon }) {
  const [name, setName] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");
  const [hp, setHp] = useState("");
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          const newObj = {
            name: name,
            hp: hp,
            sprites: {
              front: frontUrl,
              back: backUrl,
            },
          };
          fetch("http://localhost:3000/pokemon", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj),
          });
          setPokemon([...pokemon, newObj]);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={(e) => {
              setHp(e.target.value);
            }}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={(e) => {
              setFrontUrl(e.target.value);
            }}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={(e) => {
              setBackUrl(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
