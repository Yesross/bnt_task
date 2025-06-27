import React, { useState } from "react";

function ControlledInput() {
  const [inputt, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputt} // value come from state
        onChange={e => setValue(e.target.value)} 
        placeholder="Type something"
      />
      <p>You typed: {inputt}</p>
    </div>
  );
}

export default ControlledInput;