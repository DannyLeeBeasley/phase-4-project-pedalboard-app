import React, { Component } from "react";
import PedalBoard from "./PedalBoard.js";
class PedalBoards extends Component {
  render() {
    return (
      <div>
        <h1>PedalBoards</h1>
        <a className="New-Pedal-Link" href="./newpedalboard">
          Make New PedalBoard
        </a>
        <PedalBoard />
      </div>
    );
  }
}

export default PedalBoards;
