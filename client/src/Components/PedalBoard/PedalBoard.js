import React from "react";
import { useEffect, useState } from "react";

function PedalBoard({ name, pedals, stereo, id, addNewPedalboard }) {
  console.log("pedalTester", id);

  function handleDeletePedalboard() {
    fetch(`http://localhost:3000/pedalboards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((newPedal) => addNewPedalboard(newPedal));
    window.location.href = "/pedalboards";
  }

  return (
    <div className="PedalBoard">
      <div>{name}</div>
      <br />
      <div>{stereo}</div>
      <br />
      <div>
        {pedals.map((pedal) => {
          return (
            <div>
              {pedal.name}
              <img alt={pedal.name} src={pedal.image} />
            </div>
          );
        })}
        <button className="update-pedalboard" onClick="">
          Update
        </button>
        <button className="delete-pedalboard" onClick={handleDeletePedalboard}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PedalBoard;
