import React, { useState } from "react";

function Textbox() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input onChange={handleInput}></input>
      Textbox
      <h2>{input}</h2>
    </div>
  );
}

export default Textbox;
