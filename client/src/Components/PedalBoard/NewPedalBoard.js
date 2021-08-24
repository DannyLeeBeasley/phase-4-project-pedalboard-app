// import { useParams } from "react-router-dom";
import React, { useState } from "react";

function NewPedalBoard({ addNewPedalboard }) {

  const [name, setName] = useState('')
  const [isStereo, setIsStereo] = useState(false)
  // const [pedalOrder, setPedalOrder] = useState([])

  // const paramsPort = useParams();
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/pedalboards', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        stereo: isStereo,
        // pedal_order: pedalOrder
      }),
    })
    .then(res => res.json())
    .then(newPlant => addPlant(newPlant));
    window.location.href = "/pedalboards";
  };
  return (
    <div className="new-pedal-board">
      <h1>NewPedalBoard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Board Name
          <input 
            type="text" 
            name="boardName"
            placeholder="Board Name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            ></input>
        </label>
        <br />
        <label>
          Stereo?
          <select>
            <option value="false" onChange={(e) => {setIsStereo(e.target.value)}}>No</option>
            <option value="true" onChange={(e) => {setIsStereo(e.target.value)}}>Yes</option>
          </select>
        </label>
        <br />
        <label>
          Add Pedal
          <select name="addPedal">
            <option value="">Stand In</option>
          </select>
        </label>
        <input type="button" value="Remove Pedal" onClick=""></input>
        <input type="button" value="Add Pedal?" onClick=""></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default NewPedalBoard;
