// import { useParams } from "react-router-dom";
import React from "react";
function NewPedalBoard() {
  // const paramsPort = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "/pedalboards";
  };
  return (
    <div className="new-pedal-board">
      <h1>NewPedalBoard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Board Name
          <input type="text" name="boardName"></input>
        </label>
        <br />
        <label>
          Stereo?
          <select>
            <option value="false">No</option>
            <option value="true">Yes</option>
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
