import React from "react";

function PedalBoard({ name, pedals, stereo }) {
  console.log("pedalTester", pedals);
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
        <button className="delete-pedalboard">Delete Board</button>
      </div>
    </div>
  );
}

export default PedalBoard;
