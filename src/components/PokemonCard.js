import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ item }) {
  const { id, name, sprites, hp } = item;
  console.log(sprites);
  const [front, setFront] = useState(true);
  return (
    <Card key={id}>
      <div>
        <div className="image">
          <img
            onClick={() => {
              setFront(!front);
            }}
            src={front ? sprites.front : sprites.back}
            alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
