import React from "react";
import NewPedal from "./NewPedal";
import Pedal from "./Pedal";
import "./Pedals.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pedals({ pedals, setPedals }) {
  console.log("word", pedals);
  // const [pedals, setPedals] = useState([]);

  // useEffect(() => {
  //   async function fetchPedals() {
  //     const result = await fetch("");
  //     if (result.ok) {
  //       const data = await result.json();
  //       setPedals(data);
  //     }
  //   }
  // });

  return (
    <div className="pedals">
      <h1>Pedals</h1>
      {pedals.map((p) => {
        return (
          <Pedal
            name={p.name}
            image={p.image}
            effectsType={p.effect_type}
            stereo={p.stereo}
            ins={p.number_of_inputs}
            outs={p.number_of_outputs}
            price={p.price}
          />
        );
      })}
      <a className="New-Pedal-Link" href="./newpedal">
        Make New Pedal
      </a>
      <br />
      <a className="My-Pedals-Link" href="./mypedals">
        My Pedal Collection
      </a>
    </div>
  );
}

export default Pedals;
