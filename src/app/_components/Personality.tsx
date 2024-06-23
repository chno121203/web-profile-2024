import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div className="text-white">
        <p className="text-lg">Adventurer (ISFP)</p>
        <p className="pb-2">
          Adventurers are flexible and charming, always ready to explore and
          experience something new.
        </p>
        <div className=" text-2xl flex gap-1 bg-red-900">
          <Badge>INTROVERTED</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
