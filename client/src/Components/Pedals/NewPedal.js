import React, { Component, useState } from "react";
import { Form } from "semantic-ui-react";
function NewPedal() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test", e.target.pedalName.value, e.target.stereo.value);
    window.location.href = "/pedals";
  };
  return (
    <div>
      <h1>NewPedal</h1>
      <Form className="new-pedal-form" onSubmit={handleSubmit}>
        <label>
          Pedal Name
          <input type="text" name="pedalName" />
        </label>
        <br />
        <label>
          Effects Type
          <select name="effectsType">
            <option value="distortion">distortion</option>
            <option value="gain">gain</option>
            <option value="fuzz">fuzz</option>
            <option value="overdrive">overdrive</option>
            <option value="bit-reduction">bit-reduction</option>
            <option value="delay">delay</option>
            <option value="reverb">reverb</option>
            <option value="pitch">pitch</option>
            <option value="ring modulation">ring modulation</option>
            <option value="flanger">flanger</option>
            <option value="phaser">phaser</option>
            <option value="wah">wah</option>
            <option value="rotary">rotary</option>
            <option value="tremolo">tremolo</option>
            <option value="filter">tremolo</option>
            <option value="eq">eq</option>
            <option value="dynamics">dynamics</option>
            <option value="specialty">specialty</option>
            <option value="multi">multi</option>
            <option value="other">other</option>
          </select>
        </label>
        <br />
        <label>
          Stereo?
          <select name="stereo">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>
        <br />
        <label>
          Number of Inputs
          <input type="integer" name="numberOfInputs" />
        </label>
        <br />
        <label>
          Number of Outputs
          <input type="integer" name="numberOfOutputs" />
        </label>
        <br />
        <label>
          Price
          <input type="text" name="price" />
        </label>
        <br />
        <label>
          Image
          <input
            type="file"
            name="image"
            // value={selectedFile}
            // onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </label>
        <br />
        <label>
          Effects Type
          <select name="effectsType">
            <option value="dynamics">dynamics</option>
            <option value="gain">gain</option>
            <option value="modulation">modulation</option>
            <option value="time">time</option>
            <option value="tune">tune</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit"></input>
      </Form>
    </div>
  );
}

export default NewPedal;
