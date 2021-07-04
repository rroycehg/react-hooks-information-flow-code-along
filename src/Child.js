import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  

  function handleClick() {
    const newColor = getRandomColor()
    props.onChangeColor(newColor)
  }

  return <div className="child" 
              onClick={handleClick}
              className="child"
              style={{ backgroundColor: props.color }} />;
}

export default Child;
