import React, { useState } from "react";
import './colorSwitch.css'

function ColorSwitch() {
  const [color, setColor] = useState()
  return (
      <div className = {`centered ${color}`}>
        <h1>Color Picker</h1>
      <button className = "red" onClick={() => setColor('red')}> Red </button>
      <button className = "blue" onClick={() => setColor('blue')}> blue </button>
      <button className = "yellow" onClick={() => setColor('yellow')}> yellow </button>
      </div>
  );
}

export default ColorSwitch