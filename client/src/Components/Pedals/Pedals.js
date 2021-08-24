import React from "react";
import NewPedal from "./NewPedal";
import Pedal from "./Pedal";
import { useEffect, useState } from "react";

function Pedals() {
  const [pedals, setPedals] = useState([]);

  useEffect(() => {
    async function fetchPedals() {
      const result = await fetch("");
      if (result.ok) {
        const data = await result.json();
        setPedals(data);
      }
    }
  });

  return (
    <div>
      <h1>Pedals</h1>
      <a className="New-Pedal-Link" href="./newpedal">
        Make New Pedal
      </a>
      <br />
      <a className="My-Pedals-Link" href="./mypedals">
        My Pedal Collection
      </a>
      <Pedal />
    </div>
  );
}

export default Pedals;
